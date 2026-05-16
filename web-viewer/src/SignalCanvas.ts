import { Socket } from "./Socket";
import { BLEManager } from "./BLEManager";

export class SignalCanvas {
  public id: string;
  public height: number;
  public big: boolean;
  public background_gradient_color: string;
  public line_color: string;
  public x_cursor: number;
  public y_cursor: number;
  public x_scale: number;
  public canvas: HTMLCanvasElement;
  public data: number[]; //21 Samples per packet
  public y: number[] = [];
  public y_lpf: number[] = [];
  public last_data_previous: number = 0;
  public last_y_previous: number = 0;
  public shift_array: number[];

  constructor(
    id: string,
    big: boolean,
    background_gradient_color: string,
    line_color: string,
    x_scale: number,
  ) {
    this.id = id;
    this.height = 200; //Default canvas height
    this.big = big;
    this.background_gradient_color = background_gradient_color;
    this.line_color = line_color;
    this.x_cursor = 0;
    this.y_cursor = 0;
    this.x_scale = x_scale;
    this.shift_array = new Array(63).fill(0); //  = n taps

    //Create canvas element
    this.canvas = document.createElement("canvas");
    this.canvas.id = id;
    this.canvas.height = this.height;

    //Set colors
    this.canvas.setAttribute("style", `background-image:linear-gradient(180deg, ${background_gradient_color} 0%, rgba(0,0,0,0) 100%)`);
    this.canvas.style.borderRadius = "5px";
    console.log("Canvas", this.canvas.id, "created");
  }

  draw_line(data: number[]) {
    this.dc_blocker(data);
    this.low_pass_filter();
    let parts: number = 1; // # of animation segments
    if (!Socket.sink_mode) {
      BLEManager.socket.client.emit(this.id, this.y_lpf);
      parts = 4; //Smoother animation when connected locally
    }

    let context = this.canvas.getContext('2d');
    context.strokeStyle = this.line_color;
    let i: number = 0;
    let loop = () => {
      this.render(context, i, parts);
      this.attach_labels();
      i++;
      if (i < parts) {
        window.requestAnimationFrame(loop);
      }
    }
    window.requestAnimationFrame(loop);
  }

  private render(context: CanvasRenderingContext2D, part: number, parts: number) {
    context.beginPath();
    context.moveTo(this.x_cursor, this.y_cursor);

    let len = Math.round(this.y_lpf.length/parts);

    for (let i = part * len; i < len * (part + 1); i++) {
      this.y_cursor = ((this.y_lpf[i] / 16777215) * this.height) * 500 + this.height / 2;
      this.x_cursor += this.x_scale;
      if (this.x_cursor > this.canvas.width) {
        this.x_cursor = 0;
        context.moveTo(this.x_cursor, this.y_cursor);
      }
      context.lineTo(this.x_cursor, this.y_cursor);
      context.clearRect(this.x_cursor, 0, 20, this.height);
    }
    context.stroke();
  }

  // Low-pass filter coefficients:
  // Configuration:
  // fS = 250  Sampling rate.
  // fL = 15, bL = 17.5 Cutoff frequency
  // A = 70[dB] Stopband attenuation
  // N = 63  # Filter length, must be odd
  // beta = 6.755  # Kaiser window beta
  // https://fiiir.com/
  private low_pass_filter() {

    let filter_taps: number[] = [
      -0.000058830428425608,
      -0.000140032945345042,
      -0.000245965599411971,
      -0.000344132158774729,
      -0.000380578999501745,
      -0.000287577655674314,
      0.000000000000000000,
      0.000521275146357389,
      0.001263383412819459,
      0.002139731115372201,
      0.002980385257949500,
      0.003541694388618421,
      0.003539283481909320,
      0.002703733171746804,
      0.000852373311706265,
      -0.002035035070282782,
      -0.005752928485526080,
      -0.009836068405948322,
      -0.013569569562723439,
      -0.016050664119516781,
      -0.016300579171010594,
      -0.013414250495755436,
      -0.006725937595355839,
      0.004037618687974633,
      0.018646276094724901,
      0.036323159652856693,
      0.055784338343295027,
      0.075363055910405999,
      0.093204768514669703,
      0.107505515706331184,
      0.116756823833014375,
      0.119957469327001506,
      0.116756823833014375,
      0.107505515706331184,
      0.093204768514669703,
      0.075363055910405916,
      0.055784338343295027,
      0.036323159652856693,
      0.018646276094724901,
      0.004037618687974633,
      -0.006725937595355839,
      -0.013414250495755446,
      -0.016300579171010594,
      -0.016050664119516767,
      -0.013569569562723427,
      -0.009836068405948322,
      -0.005752928485526080,
      -0.002035035070282782,
      0.000852373311706265,
      0.002703733171746804,
      0.003539283481909320,
      0.003541694388618421,
      0.002980385257949500,
      0.002139731115372201,
      0.001263383412819459,
      0.000521275146357389,
      0.000000000000000000,
      -0.000287577655674315,
      -0.000380578999501745,
      -0.000344132158774728,
      -0.000245965599411971,
      -0.000140032945345042,
      -0.000058830428425608,
    ];

    // Convolution
    for (let i = 0; i < this.y.length; i++) {
      let tmp: number = 0;

      // Shift to the right and remove last item to keep the size
      this.shift_array.unshift(this.y[i]);
      this.shift_array.pop();

      // Calculate FIR filter output (y_lpf)
      for (let j = 0; j < filter_taps.length; j++) { // Assuming n taps = n samples per packet
        tmp += filter_taps[j] * this.shift_array[j];
      }
      this.y_lpf[i] = tmp;
    }
  }

  // Implement DC blocker
  // https://www.dsprelated.com/freebooks/filters/DC_Blocker.html
  private dc_blocker(data: number[]) {
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        this.y[i] = data[i] - this.last_data_previous + 0.995 * this.last_y_previous;
        this.last_data_previous = data[i],
          this.last_y_previous = this.y[i];
      } else {
        this.y[i] = data[i] - data[i - 1] + 0.995 * this.y[i - 1];
        data[i - 1] = data[i];
        this.y[i - 1] = this.y[i];
      }
    }
    // Store the last element of x and y
    this.last_data_previous = data[data.length - 1];
    this.last_y_previous = this.y[data.length - 1];
  }

  attach_labels() {
    let context = this.canvas.getContext('2d');
    context.clearRect(15, 2, 70, 30);
    context.font = "16px Verdana";
    context.fillStyle = "black";
    context.fillText(this.id, 15, 20);
  }
}
