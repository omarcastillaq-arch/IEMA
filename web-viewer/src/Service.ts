import { Characteristic } from './Characteristic';

export class Service {
  public uuid: number;
  public characteristics: Characteristic[];
  constructor(uuid: number, characteristics: Characteristic[]) {
    this.uuid = uuid;
    this.characteristics = characteristics;
  }
}
