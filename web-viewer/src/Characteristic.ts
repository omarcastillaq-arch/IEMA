export class Characteristic {
  public uuid: number;
  public gatt_characteristic: BluetoothRemoteGATTCharacteristic;
  public data: number[];
  public channel_1: number[];
  public channel_2: number[];

  constructor(uuid: number) {
    this.uuid = uuid;
  }
}
