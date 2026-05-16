import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx';
import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [BLE, NetworkInterface, WebSocketServer]
})
export class HomePageModule {}
