import { Component, ChangeDetectorRef } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx';
// import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server/ngx';
import { io } from "socket.io-client";
import { element } from 'protractor';

declare var cordova: any
var clients = [];
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  is_scanning: boolean;
  is_connected: boolean;
  ws_is_connected: boolean;
  device: any;
  wsserver: any;
  users: any[];
  sample_buffer: any;
  ip_address: string;
  socket_client: any;
  socket_client_connected: boolean;
  isModalOpen: boolean = false;
  patient_firstname: string;
  patient_lastname: string;
  is_recording: boolean = false;
  is_hidden = false;
  blink_timer: any;
  constructor(private ble: BLE,
    public loading_controller: LoadingController,
    public toastController: ToastController,
    private chRef: ChangeDetectorRef,
    private networkInterface: NetworkInterface,
  ) {
    try {
      this.wsserver = cordova.plugins.wsserver;
    } catch (e) {
      console.log(e);
    }
    this.is_connected = false;
    this.ws_is_connected = false;
    this.is_scanning = false;
    this.device = {};
    this.sample_buffer = [];
    this.networkInterface.getWiFiIPAddress()
      .then(address => {
        console.info(`IP Address: ${address.ip}, Subnet: ${address.subnet}`);
        this.ip_address = address.ip;
      })
      .catch(error => console.error(`Unable to get IP: ${error}`));
  }

  connect_to_ws_server() {
    if (this.ws_is_connected) {
      this.stop_ws_server();
    } else {
      this.start_ws_server();
    }
  }

  set_open_modal(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if(this.patient_firstname && !isOpen) console.log("Patient first name: " + this.patient_firstname);
    if(this.patient_lastname && !isOpen) console.log("Patient last name: " + this.patient_lastname);
  }

  set_patient_firstname(name){
    this.patient_firstname = name;
  }

  set_patient_lastname(name){
    this.patient_lastname = name;
  }

  start_ws_server() {
    // this.stop_ws_server();
    console.log("Starting server...");
    this.wsserver.start(8888, {
      // WebSocket Server handlers
      'onFailure': function (addr, port, reason) {
        console.log('Stopped listening. Reason: ', addr, port, reason);
      },
      // WebSocket Connection handlers
      'onOpen': function (conn) {
        console.log('A user connected from', conn.remoteAddr);
        clients.push(conn);
        console.log("Added to the clients list");
      },
      'onMessage': function (conn, msg) {

      },
      'onClose': function (conn, code, reason, wasClean) {
        console.log('A user disconnected from', conn.remoteAddr);
      },
    }, (address, port) => {
      console.log('Listening on', address, port);
      this.ws_is_connected = true;
      this.chRef.detectChanges();
    }, (reason) => {
      console.log('Did not start. Reason:', reason);
      this.stop_ws_server();
      this.start_ws_server();
    });
  }

  stop_ws_server() {
    this.wsserver.stop((addr, port) => {
      console.log('Stopped listening on', addr, port);
      this.ws_is_connected = false;
      this.chRef.detectChanges();
    });
  }

  connect_to_holter() {
    if (this.is_connected) {
      this.ble.disconnect(this.device.id).then(result => {
        this.is_connected = false;
        console.log('Disconnected');
        console.log(JSON.stringify(result));
      },
        err => {
          console.log('Error disconnecting');
        });
    } else {
      this.start_scanning();
      this.is_scanning = true;
    }
  }

  connect_to_socket_server() {
    if (!this.socket_client_connected) {
      this.socket_client = io("http://144.202.5.9:9990", {
        withCredentials: false
      });
      console.log("Connecting to socket server...");
      this.socket_client.on("connect", () => {
        console.log("Connected to socket server");
        this.socket_client_connected = true;
      });
      this.socket_client.on("disconnect", () => {
        console.log("Disconnected from socket server");
        this.socket_client_connected = false;
      });
    } else {
      this.socket_client.emit("force_disconnect");
      this.socket_client_connected = false;
    }
    this.chRef.detectChanges();
  }

  async start_scanning() {
    this.ble.enable().then(() => {
      console.log('BLE Enabled');
    })

    let devices = [];
    let loader = await this.loading_controller.create({
      message: "Scanning...",
    });
    await loader.present();
    this.is_scanning = true;
    console.log('Scanning starting...');
    this.ble.startScan([]).subscribe(device => {
      devices.push(device);
      console.log(device);
    });

    setTimeout(() => {
      this.ble.stopScan().then(async () => {
        let found = false;
        console.log('Scanning stopped');
        console.log(JSON.stringify(devices))
        devices.forEach(device => {
          if (device.name == "IoT Holter") {
            console.log("IoT Holter found");
            this.device = device;
            this.connect(device);
            found = true;
          }
        });
        if (!found) {
          const toast = await this.toastController.create({
            message: 'No IoT Holter found',
            duration: 2000
          });
          toast.present();
        }
        this.is_scanning = false;
        loader.dismiss();
      });
    }, 2000);
  }

  async connect(device) {
    console.log('Connecting to IoT Holter...');
    console.log(JSON.stringify(device));
    let loader = await this.loading_controller.create({
      message: "Connecting...",
    });
    await loader.present();
    this.ble.connect(device.id).subscribe(result => {
      this.is_connected = true;
      console.log('Connected');
      console.log(JSON.stringify(result));
      loader.dismiss();
      this.start_notifications();
    },
      err => {
        this.is_connected = false;
        console.log('Peripheral disconnected');
        loader.dismiss();
        this.chRef.detectChanges();
      });
  }

  record_ecg(){
    if (this.is_recording) {
      this.is_recording = false;
      console.log("Stopped recording ECG");
      clearInterval(this.blink_timer);
      this.is_hidden = false;
    } else {
      this.is_recording = true;
      console.log("Recording ECG...");
      this.blink_timer = setInterval(()=>{
        if(this.is_hidden) {
          this.is_hidden = false;
        }else{
          this.is_hidden = true;
        }
      }, 500)
    }
  }

  start_notifications() {
    this.ble.startNotification(this.device.id, '805B', '8171').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 1;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8171', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8172').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 2;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8172', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8173').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 3;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8173', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8174').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 4;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8174', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8175').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 5;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8175', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8176').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 6;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8176', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8177').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 7;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8177', data);
    });
    this.ble.startNotification(this.device.id, '805B', '8178').subscribe(result => {
      let data = new Uint8Array(result[0]);
      // console.log("BLE Payload length: ", data.length);
      // console.log("BLE Payload: ", buf2hex(data));
      let channel = new Uint8Array(1);
      channel[0] = 8;
      var mergedArray = new Uint8Array(channel.length + data.length);
      mergedArray.set(channel);
      mergedArray.set(data, channel.length);

      clients.forEach(client => {
        // console.log("Send to WS client", buf2hex(data), client.uuid);
        this.wsserver.send({ uuid: client.uuid }, mergedArray);
      });
      this.socket_client.emit('8178', data);
    });
  }
}

function buf2hex(buffer) { // buffer is an ArrayBuffer
  return [...new Uint8Array(buffer)]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('');
}
