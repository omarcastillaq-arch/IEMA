import { BLEManager } from './BLEManager';

export class Device {
  public id: string;
  public ble: BLEManager;
  constructor(id: string, ble: BLEManager) {
    this.id = id;
    this.ble = ble;
    console.log("Device created");
  }
}
