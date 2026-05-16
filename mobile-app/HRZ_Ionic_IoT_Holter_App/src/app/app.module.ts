/**
 * @file app.module.ts
 * @description Root Application Module for Horizon Medical IoT Holter App
 *
 * Registers all pages, providers, and third-party modules.
 * Socket.IO configuration is now environment-configurable.
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DevicePage } from '../pages/device/device';

import { BLE } from '@ionic-native/ble';

// New providers for Phase 11 improvements
import { BleSecurityService } from '../providers/ble-security.service';
import { ECGChannelService } from '../providers/ecg-channel.service';
import { SignalQualityService } from '../providers/signal-quality.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DevicePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // Ionic global configuration
      backButtonText: 'Volver',
      mode: 'md', // Material Design for consistent cross-platform look
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DevicePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    BleSecurityService,
    ECGChannelService,
    SignalQualityService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
