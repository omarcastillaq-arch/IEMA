# HORIZON MEDICAL — AI/ML Documentation

**Documento:** HM-AIML-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** FDA AI/ML-Based SaMD Guidance, GMLP, IMDRF SaMD Framework  

---

## Tabla de Contenidos

1. [Regulatory Framework for AI/ML](#1-regulatory-framework-for-aiml)
2. [Algorithm Description](#2-algorithm-description)
3. [Training Data and Validation](#3-training-data-and-validation)
4. [Performance Metrics](#4-performance-metrics)
5. [Bias and Fairness Analysis](#5-bias-and-fairness-analysis)
6. [Continuous Learning Plan](#6-continuous-learning-plan)
7. [Cybersecurity for AI Models](#7-cybersecurity-for-ai-models)

---

## 1. Regulatory Framework for AI/ML

### 1.1 FDA AI/ML Framework

| Document | Relevance |
|---|---|
| **AI/ML-Based SaMD Action Plan (2021)** | Overall FDA strategy for regulating AI/ML in medical devices |
| **Predetermined Change Control Plan (PCCP) Guidance (2023)** | Framework for planned modifications to AI/ML algorithms |
| **Clinical Decision Support Guidance** | Criteria for CDS exclusion from device regulation |
| **Software as Medical Device (SaMD) Guidance** | IMDRF framework for SaMD categorization |
| **Good Machine Learning Practice (GMLP) Guiding Principles** | 10 principles for developing safe and effective AI/ML |
| **Marketing Submission for AI/ML-enabled Device Software Functions (2025)** | Guidance on documentation requirements for 510(k) submissions |

### 1.2 SaMD Categorization (IMDRF)

| Factor | Horizon Medical AI Module |
|---|---|
| **Significance of information** | Treat or diagnose → "Inform clinical management" (the AI provides arrhythmia classification that informs the clinician's decision) |
| **Healthcare situation or condition** | Serious (cardiac arrhythmias — VT/VF can be life-threatening) |
| **SaMD Category** | **Category III** (Serious condition + Inform clinical management) |

### 1.3 Locked vs. Adaptive Algorithm

| Type | Horizon Medical |
|---|---|
| **Algorithm type** | **Locked algorithm** |
| **Definition** | The algorithm does not learn or modify its behavior after deployment. Any changes to the model require a new version release through the change control process. |
| **Justification** | A locked algorithm provides the most predictable and auditable behavior for regulatory compliance. Future versions with adaptive capabilities would require a PCCP. |

---

## 2. Algorithm Description

### 2.1 Model Architecture: CNN-LSTM Hybrid

```
Input: ECG Segment (10 seconds × 3 channels × 500 Hz = 15,000 samples)
    │
    ▼
┌──────────────────────────────────────┐
│          PREPROCESSING               │
│  • Resampling to 250 Hz             │
│  • Bandpass filter (0.5–45 Hz)      │
│  • Z-score normalization            │
│  • Segmentation (10s windows)       │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│     CNN FEATURE EXTRACTOR            │
│                                      │
│  Conv1D (64 filters, k=7) + BN + ReLU│
│  MaxPool1D (2)                       │
│  Conv1D (128 filters, k=5) + BN + ReLU│
│  MaxPool1D (2)                       │
│  Conv1D (256 filters, k=3) + BN + ReLU│
│  MaxPool1D (2)                       │
│  Conv1D (256 filters, k=3) + BN + ReLU│
│  Global Average Pooling             │
│                                      │
│  Output: Feature vector (256-dim)    │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│     LSTM TEMPORAL ANALYZER           │
│                                      │
│  LSTM (128 units, bidirectional)     │
│  Dropout (0.3)                       │
│  LSTM (64 units, bidirectional)      │
│  Dropout (0.3)                       │
│                                      │
│  Output: Temporal features (128-dim) │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│     CLASSIFIER                       │
│                                      │
│  Dense (64) + ReLU + Dropout (0.3)  │
│  Dense (N_classes) + Softmax        │
│                                      │
│  Output: Class probabilities         │
└──────────────┬───────────────────────┘
               │
               ▼
┌──────────────────────────────────────┐
│     POST-PROCESSING                  │
│                                      │
│  • Confidence thresholding           │
│  • Temporal aggregation (majority    │
│    voting over consecutive segments) │
│  • Alert priority assignment         │
│                                      │
│  Output: Arrhythmia label + priority │
└──────────────────────────────────────┘
```

### 2.2 Output Classes

| Class ID | Arrhythmia | Alert Priority |
|---|---|---|
| 0 | Normal Sinus Rhythm (NSR) | None |
| 1 | Atrial Fibrillation (AF) | High |
| 2 | Atrial Flutter (AFL) | High |
| 3 | Ventricular Tachycardia (VT) | Critical |
| 4 | Supraventricular Tachycardia (SVT) | Medium |
| 5 | Sinus Bradycardia | Medium |
| 6 | Sinus Tachycardia | Low |
| 7 | Premature Ventricular Complex (PVC) | Low–Medium |
| 8 | Premature Atrial Complex (PAC) | Low |
| 9 | AV Block (2nd/3rd degree) | High |
| 10 | Sinus Pause (>3 seconds) | High |

### 2.3 Model Hyperparameters

| Parameter | Value |
|---|---|
| Input size | 10s × 3ch × 250 Hz = 7,500 samples |
| CNN layers | 4 Conv1D layers (64, 128, 256, 256 filters) |
| LSTM layers | 2 bidirectional LSTM layers (128, 64 units) |
| Dropout rate | 0.3 |
| Optimizer | Adam (lr=1e-4, weight decay=1e-5) |
| Loss function | Weighted cross-entropy (class weights inversely proportional to frequency) |
| Batch size | 64 |
| Training epochs | 100 (with early stopping, patience=10) |
| Total parameters | ~2.5M |
| Inference time | <1 second per 10-second segment (GPU); <3 seconds (CPU) |

---

## 3. Training Data and Validation

### 3.1 Training Data Sources

| Dataset | Source | Size | Annotations | Use |
|---|---|---|---|---|
| MIT-BIH Arrhythmia Database | PhysioNet | 48 records, 30 min each | Beat-level by cardiologists | Training + validation |
| MIT-BIH AF Database | PhysioNet | 25 records, 10h each | AF episodes annotated | Training + validation |
| INCART Database | PhysioNet | 75 records, 30 min each | Beat-level annotations | Training + validation |
| PTB-XL | PhysioNet | 21,837 records, 10s each | Multi-label by cardiologists | Training + validation |
| Chapman-Shaoxing | PhysioNet | 10,646 records | Multi-label | Training + validation |
| Proprietary clinical dataset | [Hospital partner] | [N] records, 24h each | Board-certified cardiologists (2 reviewers + adjudicator) | Validation (held-out) |

### 3.2 Data Split

| Split | Proportion | Purpose | Records |
|---|---|---|---|
| Training | 70% | Model training | [N] |
| Validation | 15% | Hyperparameter tuning, early stopping | [N] |
| Test (internal) | 15% | Performance evaluation | [N] |
| Test (external) | Separate | Independent validation | [N] (proprietary clinical dataset) |

> **Important:** The external test set was NOT used during any stage of model development (training, tuning, architecture selection). It was reserved exclusively for final performance evaluation.

### 3.3 Data Quality Controls

| Control | Description |
|---|---|
| **Annotation protocol** | Double annotation by board-certified cardiologists; disagreements resolved by third adjudicator |
| **Inter-annotator agreement** | Cohen's kappa ≥ 0.85 required |
| **Signal quality check** | Automated quality assessment; segments with >50% artifact excluded |
| **Data augmentation** | Time warping, amplitude scaling, noise injection, baseline wander — applied only to training set |
| **Class balancing** | Weighted sampling + SMOTE for underrepresented classes |

### 3.4 Demographic Distribution of Training Data

| Demographic Factor | Distribution | Notes |
|---|---|---|
| **Age** | 18–30: [%], 31–50: [%], 51–70: [%], 71+: [%] | Weighted toward 51–70 (higher arrhythmia prevalence) |
| **Sex** | Male: [%], Female: [%] | Approximately balanced |
| **Race/Ethnicity** | Caucasian: [%], African American: [%], Asian: [%], Hispanic: [%], Other: [%] | Dataset-dependent; bias analysis performed |
| **Comorbidities** | Hypertension: [%], Diabetes: [%], Heart failure: [%], CAD: [%] | Represented in clinical dataset |

---

## 4. Performance Metrics

### 4.1 Overall Performance (Internal Test Set)

| Arrhythmia | N (test) | Sensitivity | Specificity | PPV | NPV | AUC-ROC | F1 |
|---|---|---|---|---|---|---|---|
| AF | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| AFL | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| VT | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| SVT | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| Bradycardia | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| Tachycardia | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| PVC | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| PAC | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| AV Block | [N] | [%] | [%] | [%] | [%] | [value] | [value] |
| Sinus Pause | [N] | [%] | [%] | [%] | [%] | [value] | [value] |

### 4.2 Performance on External Validation Set

| Arrhythmia | N | Sensitivity | Specificity | AUC-ROC |
|---|---|---|---|---|
| AF | [N] | [%] | [%] | [value] |
| VT | [N] | [%] | [%] | [value] |
| *[Other arrhythmias]* | [N] | [%] | [%] | [value] |

### 4.3 Confusion Matrix (Example — Internal Test Set)

```
              Predicted →
              NSR   AF   AFL   VT   SVT  Brady Tachy PVC  PAC  AVB  Pause
Actual ↓
NSR          [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
AF           [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
AFL          [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
VT           [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
SVT          [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
Bradycardia  [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
Tachycardia  [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
PVC          [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
PAC          [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
AV Block     [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
Sinus Pause  [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ]  [  ] [  ] [  ] [  ]
```

### 4.4 Robustness Testing

| Condition | Performance Impact | Acceptable? |
|---|---|---|
| Noisy signal (SNR = 10 dB) | Sensitivity drops by [%] | ☐ Yes / ☐ No |
| Motion artifact (simulated walking) | Sensitivity drops by [%] | ☐ Yes / ☐ No |
| Electrode partial detachment | Sensitivity drops by [%] | ☐ Yes / ☐ No |
| Baseline wander | Sensitivity drops by [%] | ☐ Yes / ☐ No |
| Low amplitude ECG (0.5× normal) | Sensitivity drops by [%] | ☐ Yes / ☐ No |

---

## 5. Bias and Fairness Analysis

### 5.1 Subgroup Performance Analysis

| Subgroup | N (test) | AF Sensitivity | VT Sensitivity | Overall AUC |
|---|---|---|---|---|
| **Age 18–40** | [N] | [%] | [%] | [value] |
| **Age 41–65** | [N] | [%] | [%] | [value] |
| **Age 65+** | [N] | [%] | [%] | [value] |
| **Male** | [N] | [%] | [%] | [value] |
| **Female** | [N] | [%] | [%] | [value] |
| **Caucasian** | [N] | [%] | [%] | [value] |
| **African American** | [N] | [%] | [%] | [value] |
| **Asian** | [N] | [%] | [%] | [value] |
| **Hispanic** | [N] | [%] | [%] | [value] |
| **BMI < 25** | [N] | [%] | [%] | [value] |
| **BMI ≥ 30** | [N] | [%] | [%] | [value] |

### 5.2 Fairness Metrics

| Metric | Target | Result |
|---|---|---|
| **Equalized odds** (sensitivity difference across demographics) | < 5% absolute difference | [Result] |
| **Demographic parity** (positive prediction rate across groups) | < 5% absolute difference | [Result] |
| **Calibration** (reliability across subgroups) | Calibration slope 0.8–1.2 in all subgroups | [Result] |

### 5.3 Bias Mitigation Measures

1. **Training data diversity:** Ensured representation of major demographic groups
2. **Class-weighted loss:** Prevents bias toward majority class
3. **Subgroup validation:** Separate performance evaluation per demographic
4. **Data augmentation:** Applied uniformly across groups
5. **Ongoing monitoring:** Post-market monitoring of performance by demographics (PMCF Plan)

### 5.4 Known Limitations

| Limitation | Description | Mitigation |
|---|---|---|
| Underrepresentation of pediatric data | Model not validated for patients <18 years | Contraindication in labeling |
| Limited data from certain ethnicities | Some ethnic groups underrepresented in training data | Ongoing data collection in PMCF |
| Pacemaker/ICD patients | Model not trained on paced rhythms | Warning in labeling |

---

## 6. Continuous Learning Plan

### 6.1 Current Status: Locked Algorithm

The Horizon Medical AI Module v1.0 is deployed as a **locked algorithm**. The model weights, architecture, and inference logic are fixed at the time of deployment and do not change based on new data or user interactions.

### 6.2 Update Process

| Step | Description | Regulatory Impact |
|---|---|---|
| 1 | Data collection from post-market monitoring | No regulatory impact |
| 2 | Model retraining (offline, on new dataset) | Internal activity |
| 3 | Performance comparison (new vs. current) | Internal activity |
| 4 | Regulatory assessment of changes | Determine if new 510(k) or PCCP applies |
| 5 | V&V of new model version | Required |
| 6 | Regulatory submission (if required) | 510(k) or PCCP update |
| 7 | Deployment of new version via OTA (backend only) | Controlled release |

### 6.3 Future Consideration: PCCP

If Horizon Medical decides to implement adaptive AI in future versions, a **Predetermined Change Control Plan (PCCP)** will be developed following FDA Guidance, specifying:
- Types of changes anticipated (e.g., threshold adjustments, additional arrhythmia classes)
- Boundaries of acceptable modifications
- Validation protocol for each change type
- Performance monitoring plan

---

## 7. Cybersecurity for AI Models

### 7.1 AI-Specific Threats

| Threat | Description | Risk | Mitigation |
|---|---|---|---|
| **Adversarial attacks** | Crafted input signals designed to fool the classifier | Medium | Input validation, anomaly detection, robustness testing |
| **Data poisoning** | Malicious data injected into training set | Low (locked model) | Training data provenance, quality controls |
| **Model extraction** | Reverse engineering the model through API queries | Low | API rate limiting, model obfuscation |
| **Model inversion** | Inferring training data from model outputs | Low | Differential privacy considerations |
| **Evasion attacks** | Inputs crafted to evade detection (e.g., VT that appears as NSR) | Medium | Robustness testing, confidence thresholds |

### 7.2 Security Controls for AI Module

| Control | Description |
|---|---|
| Model integrity | Checksum verification of model weights at load time |
| Input validation | Range checks, format validation, anomaly detection on input ECG data |
| Output validation | Confidence threshold (reject low-confidence classifications) |
| Access control | AI model API accessible only from authorized backend services |
| Audit logging | All inference requests and results logged |
| Model versioning | Cryptographic signing of model artifacts |

---

## Appendix A: GMLP (Good Machine Learning Practice) Compliance

| GMLP Principle | Compliance |
|---|---|
| 1. Multi-disciplinary expertise (clinical, technical, regulatory) | ✅ Team includes cardiologists, ML engineers, regulatory specialists |
| 2. Good software engineering and security practices | ✅ IEC 62304, AAMI TIR57 |
| 3. Clinical study participants representative of intended population | ⚠️ Ongoing improvement via PMCF |
| 4. Training datasets independent of test datasets | ✅ Strict split, no data leakage |
| 5. Reference datasets based on best available methods | ✅ Board-certified cardiologist annotations |
| 6. Model designed to manage/minimize risks of overfitting, bias | ✅ Dropout, regularization, cross-validation, bias analysis |
| 7. Focus on the performance of the human-AI team | ✅ Designed as decision support; usability tested |
| 8. Testing demonstrate device performance under clinically relevant conditions | ✅ Robustness testing + clinical validation |
| 9. Users provided clear information about device performance and limitations | ✅ IFU includes performance data and limitations |
| 10. Deployed models monitored with retraining managed | ✅ Post-market monitoring + change control |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | AI/ML Engineering | Creación inicial |

---

*Documento confidencial — Horizon Medical*
