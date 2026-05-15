/**
 * @file signal-quality.service.ts
 * @description Signal Quality Analysis Service for Horizon Medical IoT Holter App
 *
 * Performs real-time signal quality assessment on incoming ECG data,
 * detecting noise, baseline drift, electrode lead-off, and saturation.
 * Metrics align with the backend hrzmed_wss quality validation.
 *
 * Quality scoring:
 * - Noise level (RMS of high-frequency components)
 * - Baseline drift (low-frequency wandering)
 * - Signal saturation (ADC clipping detection)
 * - Lead-off detection (flat-line or extreme impedance)
 * - Packet loss rate
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {
  SignalQuality,
  SIGNAL_QUALITY_INFO,
  ChannelQualityMetrics,
  SignalQualitySummary,
  ECG_CHANNEL_UUIDS,
} from '../models/ecg.models';

/** Window size for quality analysis (number of samples) */
const ANALYSIS_WINDOW = 250; // 1 second at 250 Hz

/** ADC saturation thresholds (32-bit signed, ADS1298 range) */
const ADC_MAX = 8388607;   // 2^23 - 1 (positive rail)
const ADC_MIN = -8388608;  // -(2^23) (negative rail)
const SATURATION_THRESHOLD = 0.95; // 95% of rail = saturated

/** Lead-off detection: flatline variance threshold */
const FLATLINE_VARIANCE_THRESHOLD = 10;

/** Noise threshold (RMS of difference signal) */
const NOISE_RMS_EXCELLENT = 5;
const NOISE_RMS_GOOD = 15;
const NOISE_RMS_FAIR = 40;
const NOISE_RMS_POOR = 100;

/** Baseline drift threshold (mean deviation over window) */
const DRIFT_THRESHOLD_FAIR = 500;
const DRIFT_THRESHOLD_POOR = 2000;

/** Quality update interval in milliseconds */
const UPDATE_INTERVAL_MS = 1000;

@Injectable()
export class SignalQualityService {
  /** Quality metrics per channel */
  private _channelMetrics: ChannelQualityMetrics[] = [];

  /** Sample buffers for analysis (circular buffers) */
  private _sampleBuffers: number[][] = [];

  /** Buffer write indices */
  private _bufferIndices: number[] = [];

  /** Packet counters for loss rate */
  private _expectedPackets: number = 0;
  private _receivedPackets: number = 0;

  /** Quality update subject */
  private _qualitySubject: Subject<SignalQualitySummary> = new Subject();

  /** Update timer */
  private _updateTimer: any = null;

  /** Last update timestamp */
  private _lastUpdate: number = 0;

  /** Lead names for display */
  private readonly _leadNames = ['I', 'II', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];

  constructor() {
    this._initializeBuffers();
  }

  // ========================================================================
  // Public API
  // ========================================================================

  /** Observable of quality summary updates */
  get quality$(): Observable<SignalQualitySummary> {
    return this._qualitySubject.asObservable();
  }

  /** Get current quality summary */
  get currentQuality(): SignalQualitySummary {
    return this._computeSummary();
  }

  /** Get quality for a specific channel */
  getChannelQuality(channelIndex: number): ChannelQualityMetrics {
    if (channelIndex >= 0 && channelIndex < this._channelMetrics.length) {
      return this._channelMetrics[channelIndex];
    }
    return this._createDefaultMetrics(channelIndex);
  }

  /**
   * Feed new samples into the quality analysis engine.
   *
   * @param channelIndex  Channel index (0-7)
   * @param samples       Array of sample values
   */
  addSamples(channelIndex: number, samples: number[]): void {
    if (channelIndex < 0 || channelIndex >= 8) return;

    this._receivedPackets++;

    const buffer = this._sampleBuffers[channelIndex];
    let idx = this._bufferIndices[channelIndex];

    for (const sample of samples) {
      buffer[idx % ANALYSIS_WINDOW] = sample;
      idx++;
    }
    this._bufferIndices[channelIndex] = idx;

    // Throttle quality updates
    const now = Date.now();
    if (now - this._lastUpdate >= UPDATE_INTERVAL_MS) {
      this._lastUpdate = now;
      this._updateAllChannelMetrics();
      this._qualitySubject.next(this._computeSummary());
    }
  }

  /**
   * Record an expected packet (for loss rate calculation).
   */
  recordExpectedPacket(): void {
    this._expectedPackets++;
  }

  /**
   * Start periodic quality assessment.
   */
  start(): void {
    this.stop();
    this._lastUpdate = Date.now();
    this._expectedPackets = 0;
    this._receivedPackets = 0;
    this._initializeBuffers();

    this._updateTimer = setInterval(() => {
      this._updateAllChannelMetrics();
      this._qualitySubject.next(this._computeSummary());
    }, UPDATE_INTERVAL_MS);
  }

  /**
   * Stop periodic quality assessment.
   */
  stop(): void {
    if (this._updateTimer) {
      clearInterval(this._updateTimer);
      this._updateTimer = null;
    }
  }

  /**
   * Reset all metrics.
   */
  reset(): void {
    this.stop();
    this._initializeBuffers();
    this._expectedPackets = 0;
    this._receivedPackets = 0;
  }

  /**
   * Cleanup.
   */
  destroy(): void {
    this.stop();
    this._qualitySubject.complete();
  }

  // ========================================================================
  // Private Analysis Methods
  // ========================================================================

  /** Initialize sample buffers and metrics */
  private _initializeBuffers(): void {
    this._sampleBuffers = [];
    this._bufferIndices = [];
    this._channelMetrics = [];

    for (let i = 0; i < 8; i++) {
      this._sampleBuffers.push(new Array(ANALYSIS_WINDOW).fill(0));
      this._bufferIndices.push(0);
      this._channelMetrics.push(this._createDefaultMetrics(i));
    }
  }

  /** Create default metrics for a channel */
  private _createDefaultMetrics(channelIndex: number): ChannelQualityMetrics {
    return {
      channelIndex,
      lead: this._leadNames[channelIndex] || `CH${channelIndex + 1}`,
      quality: SignalQuality.NO_SIGNAL,
      score: 0,
      noiseLevel: 0,
      baselineDrift: 0,
      saturationDetected: false,
      leadOff: true,
      lastUpdated: Date.now(),
    };
  }

  /** Update metrics for all channels */
  private _updateAllChannelMetrics(): void {
    for (let i = 0; i < 8; i++) {
      this._channelMetrics[i] = this._analyzeChannel(i);
    }
  }

  /** Analyze a single channel and return quality metrics */
  private _analyzeChannel(channelIndex: number): ChannelQualityMetrics {
    const buffer = this._sampleBuffers[channelIndex];
    const writeIdx = this._bufferIndices[channelIndex];

    // Need minimum samples for analysis
    if (writeIdx < ANALYSIS_WINDOW / 4) {
      return this._createDefaultMetrics(channelIndex);
    }

    const sampleCount = Math.min(writeIdx, ANALYSIS_WINDOW);
    const samples = buffer.slice(0, sampleCount);

    // Compute statistics
    const mean = samples.reduce((a, b) => a + b, 0) / sampleCount;
    const variance = samples.reduce((a, b) => a + (b - mean) * (b - mean), 0) / sampleCount;

    // Lead-off detection (flat line)
    const leadOff = variance < FLATLINE_VARIANCE_THRESHOLD;

    // Saturation detection
    const satCount = samples.filter(s =>
      s > ADC_MAX * SATURATION_THRESHOLD || s < ADC_MIN * SATURATION_THRESHOLD
    ).length;
    const saturationDetected = satCount > sampleCount * 0.05; // >5% saturated

    // Noise estimation (RMS of first-order difference)
    let diffSum = 0;
    for (let i = 1; i < sampleCount; i++) {
      const diff = samples[i] - samples[i - 1];
      diffSum += diff * diff;
    }
    const noiseRMS = Math.sqrt(diffSum / (sampleCount - 1));

    // Baseline drift (deviation of mean from zero, or slow trend)
    const halfLen = Math.floor(sampleCount / 2);
    const firstHalfMean = samples.slice(0, halfLen).reduce((a, b) => a + b, 0) / halfLen;
    const secondHalfMean = samples.slice(halfLen).reduce((a, b) => a + b, 0) / (sampleCount - halfLen);
    const baselineDrift = Math.abs(secondHalfMean - firstHalfMean);

    // Compute quality score (0-100)
    let score = 100;

    if (leadOff) {
      score = 0;
    } else {
      // Noise penalty
      if (noiseRMS > NOISE_RMS_POOR) score -= 50;
      else if (noiseRMS > NOISE_RMS_FAIR) score -= 30;
      else if (noiseRMS > NOISE_RMS_GOOD) score -= 15;
      else if (noiseRMS > NOISE_RMS_EXCELLENT) score -= 5;

      // Saturation penalty
      if (saturationDetected) score -= 25;

      // Drift penalty
      if (baselineDrift > DRIFT_THRESHOLD_POOR) score -= 20;
      else if (baselineDrift > DRIFT_THRESHOLD_FAIR) score -= 10;

      score = Math.max(0, Math.min(100, score));
    }

    // Classify quality
    let quality: SignalQuality;
    if (leadOff) quality = SignalQuality.NO_SIGNAL;
    else if (score >= 90) quality = SignalQuality.EXCELLENT;
    else if (score >= 70) quality = SignalQuality.GOOD;
    else if (score >= 50) quality = SignalQuality.FAIR;
    else if (score >= 25) quality = SignalQuality.POOR;
    else quality = SignalQuality.NO_SIGNAL;

    return {
      channelIndex,
      lead: this._leadNames[channelIndex] || `CH${channelIndex + 1}`,
      quality,
      score,
      noiseLevel: noiseRMS,
      baselineDrift,
      saturationDetected,
      leadOff,
      lastUpdated: Date.now(),
    };
  }

  /** Compute overall quality summary */
  private _computeSummary(): SignalQualitySummary {
    const activeMetrics = this._channelMetrics.filter(m => !m.leadOff);
    const overallScore = activeMetrics.length > 0
      ? activeMetrics.reduce((a, b) => a + b.score, 0) / activeMetrics.length
      : 0;

    let overallQuality: SignalQuality;
    if (activeMetrics.length === 0) overallQuality = SignalQuality.NO_SIGNAL;
    else if (overallScore >= 90) overallQuality = SignalQuality.EXCELLENT;
    else if (overallScore >= 70) overallQuality = SignalQuality.GOOD;
    else if (overallScore >= 50) overallQuality = SignalQuality.FAIR;
    else if (overallScore >= 25) overallQuality = SignalQuality.POOR;
    else overallQuality = SignalQuality.NO_SIGNAL;

    const packetLossRate = this._expectedPackets > 0
      ? 1 - (this._receivedPackets / this._expectedPackets)
      : 0;

    return {
      overallQuality,
      overallScore: Math.round(overallScore),
      channelMetrics: [...this._channelMetrics],
      contactImpedance: 0, // Would require impedance measurement from firmware
      packetLossRate: Math.max(0, packetLossRate),
      timestamp: Date.now(),
    };
  }
}
