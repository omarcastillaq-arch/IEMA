import { BLEManager } from "./BLEManager";
import { Device } from "./Device";
import { Service } from "./Service";
import { Characteristic } from "./Characteristic";
import { SignalCanvas } from "./SignalCanvas";
import { Container } from "./Container";

let connect_button: HTMLButtonElement = document.querySelector("#connect_button");
connect_button.addEventListener("click", () => {
  main();
});

let sink_button: HTMLButtonElement = document.querySelector("#sink_button");
sink_button.addEventListener("click", () => {
  sink();
});

function main() {
  //Welcome
  console.log("IECG v0.2");

  //ECG Channels characteristics
  let channel_1 = new Characteristic(0x8171);
  let channel_2 = new Characteristic(0x8172);
  let channel_3 = new Characteristic(0x8173);
  let channel_4 = new Characteristic(0x8174);
  let channel_5 = new Characteristic(0x8175);
  let channel_6 = new Characteristic(0x8176);
  let channel_7 = new Characteristic(0x8177);
  let channel_8 = new Characteristic(0x8178);

  let ecg_characteristics: Characteristic[] = [
    channel_1,
    channel_2,
    channel_3,
    channel_4,
    channel_5,
    channel_6,
    channel_7,
    channel_8
  ];

  //ECG Service
  let ecg_service = new Service(0x805b, ecg_characteristics);

  //Create BLE Manager
  let ble = new BLEManager(ecg_service, false);

  //Create ECG Device
  let ecg_device = new Device("1A", ble);

  //Connect to ECG Device
  ecg_device.ble.connect().then(() => {

    //Hide Connect button
    connect_button.style.visibility = "hidden";
    sink_button.style.visibility = "hidden";

    //Create web page container
    let container = new Container("#FFFFFF", "10px");

    //Create canvas
    let lead_I_canvas = new SignalCanvas("I", false, "rgba(50,50,50,0.1)", "#000000", 0.5);
    let lead_II_canvas = new SignalCanvas("II", false, "rgba(220,237,49,0.1)", "#DCED31", 0.5);
    let lead_III_canvas = new SignalCanvas("III", false, "rgba(239,45,86,0.1)", "#EF2D56", 0.5);
    let lead_aVR_canvas = new SignalCanvas("aVR", false, "rgba(237,125,58,0.1)", "#ED7D3A", 0.5);
    let lead_aVL_canvas = new SignalCanvas("aVL", false, "rgba(202,12,206,0.1)", "#CA0CCE", 0.5);
    let lead_aVF_canvas = new SignalCanvas("aVF", false, "rgba(72,145,255,0.1)", "#4891FF", 0.5);
    let lead_V1_canvas = new SignalCanvas("V1", false, "rgba(255,205,107,0.1)", "#FFCD6B", 0.5);
    let lead_V2_canvas = new SignalCanvas("V2", false, "rgba(255,112,215,0.1)", "#FF70D7", 0.5);
    let lead_V3_canvas = new SignalCanvas("V3", false, "rgba(237,125,58,0.1)", "#ED7D3A", 0.5);
    let lead_V4_canvas = new SignalCanvas("V4", false, "rgba(12,206,107,0.1)", "#0CCE6B", 0.5);
    let lead_V5_canvas = new SignalCanvas("V5", false, "rgba(239,45,86,0.1)", "#EF2D56", 0.5);
    let lead_V6_canvas = new SignalCanvas("V6", false, "rgba(202,12,206,0.1)", "#CA0CCE", 0.5);
    let lead_II_canvas_big = new SignalCanvas("II Large", true, "rgba(12,206,107,0.1)", "#0CCE6B", 0.5);

    //Append canvases to container
    container.append_canvas(lead_I_canvas);
    container.append_canvas(lead_II_canvas);
    container.append_canvas(lead_III_canvas);
    container.append_canvas(lead_aVR_canvas);
    container.append_canvas(lead_aVL_canvas);
    container.append_canvas(lead_aVF_canvas);
    container.append_canvas(lead_V1_canvas);
    container.append_canvas(lead_V2_canvas);
    container.append_canvas(lead_V3_canvas);
    container.append_canvas(lead_V4_canvas);
    container.append_canvas(lead_V5_canvas);
    container.append_canvas(lead_V6_canvas);
    container.append_canvas(lead_II_canvas_big);

    //Enable notifications
    ecg_device.ble.start_notifications(channel_1);
    ecg_device.ble.start_notifications(channel_2);
    ecg_device.ble.start_notifications(channel_3);
    ecg_device.ble.start_notifications(channel_4);
    ecg_device.ble.start_notifications(channel_5);
    ecg_device.ble.start_notifications(channel_6);
    ecg_device.ble.start_notifications(channel_7);
    ecg_device.ble.start_notifications(channel_8);
  });
}

function sink() {
  //Welcome
  console.log("IECG v0.2");

  //ECG Channels characteristics
  let channel_1 = new Characteristic(0x8171);
  let channel_2 = new Characteristic(0x8172);
  let channel_3 = new Characteristic(0x8173);
  let channel_4 = new Characteristic(0x8174);
  let channel_5 = new Characteristic(0x8175);
  let channel_6 = new Characteristic(0x8176);
  let channel_7 = new Characteristic(0x8177);
  let channel_8 = new Characteristic(0x8178);

  let ecg_characteristics: Characteristic[] = [
    channel_1,
    channel_2,
    channel_3,
    channel_4,
    channel_5,
    channel_6,
    channel_7,
    channel_8
  ];

  //ECG Service
  let ecg_service = new Service(0x805b, ecg_characteristics);

  //Create BLE Manager
  let ble = new BLEManager(ecg_service, true);

  //Create ECG Device
  let ecg_device = new Device("1A", ble);

  //Hide Connect button
  connect_button.style.visibility = "hidden";
  sink_button.style.visibility = "hidden";

  //Create web page container
  let container = new Container("#FFFFFF", "10px");

  //Create canvas
  let lead_I_canvas = new SignalCanvas("I", false, "rgba(50,50,50,0.1)", "#000000", 0.5);
  let lead_II_canvas = new SignalCanvas("II", false, "rgba(220,237,49,0.1)", "#DCED31", 0.5);
  let lead_III_canvas = new SignalCanvas("III", false, "rgba(239,45,86,0.1)", "#EF2D56", 0.5);
  let lead_aVR_canvas = new SignalCanvas("aVR", false, "rgba(237,125,58,0.1)", "#ED7D3A", 0.5);
  let lead_aVL_canvas = new SignalCanvas("aVL", false, "rgba(202,12,206,0.1)", "#CA0CCE", 0.5);
  let lead_aVF_canvas = new SignalCanvas("aVF", false, "rgba(72,145,255,0.1)", "#4891FF", 0.5);
  let lead_V1_canvas = new SignalCanvas("V1", false, "rgba(255,205,107,0.1)", "#FFCD6B", 0.5);
  let lead_V2_canvas = new SignalCanvas("V2", false, "rgba(255,112,215,0.1)", "#FF70D7", 0.5);
  let lead_V3_canvas = new SignalCanvas("V3", false, "rgba(237,125,58,0.1)", "#ED7D3A", 0.5);
  let lead_V4_canvas = new SignalCanvas("V4", false, "rgba(12,206,107,0.1)", "#0CCE6B", 0.5);
  let lead_V5_canvas = new SignalCanvas("V5", false, "rgba(239,45,86,0.1)", "#EF2D56", 0.5);
  let lead_V6_canvas = new SignalCanvas("V6", false, "rgba(202,12,206,0.1)", "#CA0CCE", 0.5);
  let lead_II_canvas_big = new SignalCanvas("II Large", true, "rgba(12,206,107,0.1)", "#0CCE6B", 0.5);

  //Append canvases to container
  container.append_canvas(lead_I_canvas);
  container.append_canvas(lead_II_canvas);
  container.append_canvas(lead_III_canvas);
  container.append_canvas(lead_aVR_canvas);
  container.append_canvas(lead_aVL_canvas);
  container.append_canvas(lead_aVF_canvas);
  container.append_canvas(lead_V1_canvas);
  container.append_canvas(lead_V2_canvas);
  container.append_canvas(lead_V3_canvas);
  container.append_canvas(lead_V4_canvas);
  container.append_canvas(lead_V5_canvas);
  container.append_canvas(lead_V6_canvas);
  container.append_canvas(lead_II_canvas_big);
}
