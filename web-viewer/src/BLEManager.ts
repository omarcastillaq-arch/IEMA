import { Service } from "./Service";
import { Characteristic } from "./Characteristic";
import { SignalCanvas } from "./SignalCanvas";
import { Socket } from "./Socket";
import { Container } from "./Container";

export class BLEManager {
  public server: any;
  public service: Service;
  public channel_1: number[];
  public channel_2: number[];
  public static socket: Socket; // Socket.io client

  constructor(service: Service, sink_mode: boolean) {
    this.service = service;
    BLEManager.socket = new Socket(sink_mode);
    if (sink_mode) {
      console.log("Sink mode");
    } else {
      console.log("Source mode"); 
    }
    console.log("BLE Manager created");
  }

  //Connect to device
  connect(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      window.navigator.bluetooth
        .requestDevice({
          acceptAllDevices: true,
          optionalServices: [this.service.uuid],
        })
        .then((device) => {
          console.log("Connecting to device...");
          device.gatt.connect().then((gatt_server) => {
            this.server = gatt_server;

            //Remove connect button
            document.getElementById("connect_button").style.display = "none";

            console.log("Connected!", gatt_server);
            resolve(this.server);
          });
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
    return promise;
  }

  //Start receiving notifications from the specified characteristic
  start_notifications(characteristic: Characteristic) {
    this.server
      .getPrimaryService(this.service.uuid)
      .then((gatt_service: BluetoothRemoteGATTService) => {
        return gatt_service.getCharacteristic(characteristic.uuid);
      })
      .then(async (gatt_characteristic: BluetoothRemoteGATTCharacteristic) => {
        const gatt_characteristic_1 = await gatt_characteristic
          .startNotifications();
        characteristic.gatt_characteristic = gatt_characteristic_1;
        gatt_characteristic_1.addEventListener(
          "characteristicvaluechanged",
          (event: Event) => this.notification_handler(event, characteristic)
        );
        console.log("Notifications started on", gatt_characteristic_1.uuid);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  //Function to handle notifications
  notification_handler(
    event: any,
    characteristic: Characteristic
  ) {
    // let data: number[] = this.convert_to_16bits(event.target.value);
    // console.log(event.target.value);
    let data_view: DataView = event.target.value; //DataView(84)
    let data_array: number[] = [];
    let canvas: SignalCanvas;

    // Convert from 24 bit to 16 bit signed integers
    for (let index = 0; index < data_view.byteLength / 3; index++) {
      data_array[index] = (data_view.getUint8(index * 3) << 24 | data_view.getUint8(index * 3 + 1) << 16 | data_view.getUint8(index * 3 + 2) << 8) >> 8;
      data_array[index] = -data_array[index];
    }

    switch (characteristic.uuid) {
      case 0x8171:
        this.channel_1 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "I"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8172:
        this.channel_2 = data_array;
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "II"
        })
        canvas.draw_line(data_array);

        // Calculate Lead III
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_2[i] - this.channel_1[i]
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "III"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVR
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = -(this.channel_1[i] + this.channel_2[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVR"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVL
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_1[i] - (this.channel_2[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVL"
        })
        canvas.draw_line(data_array);

        //Calculate Lead aVF
        for (let i = 0; i < data_array.length; i++) {
          data_array[i] = this.channel_2[i] - (this.channel_1[i]) / 2;
        }
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "aVF"
        })
        canvas.draw_line(data_array);

        //Calculate Lead II Large
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "II Large"
        })
        canvas.draw_line(this.channel_2);
        break;

      case 0x8173:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V1"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8174:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V2"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8175:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V3"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8176:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V4"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8177:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V5"
        })
        canvas.draw_line(data_array);
        break;

      case 0x8178:
        canvas = Container.canvases.find(canvas => {
          return canvas.id === "V6"
        })
        canvas.draw_line(data_array);
        break;

      default:
        break;
    }
  }
}
