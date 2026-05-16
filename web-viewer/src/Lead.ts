import { SignalCanvas } from "./SignalCanvas";
import { Characteristic } from "./Characteristic";

export class Lead {
    public name: string;
    public characteristic: Characteristic;
    public canvas: SignalCanvas;

    constructor(name: string, characteristic: Characteristic, canvas: SignalCanvas) {
        this.name = name;
        this.characteristic = characteristic;
        this.canvas = canvas;
    }

}
