This script runs on Node.js 8 and uses the noble and MongoDB libraries. It's designed to run on an IoT gateway. It has been tested on a Jetson Nano board with a generic Bluetooth 4.0 USB dongle connected to a custom-designed BLE ECG machine.

HOW IT WORKS

The ECG BLE machine sends continuous notifications with ECG signal data acquired by the gateway running this script. The script then takes the ECG signal data and stores it in a MongoDB collection. A server can then subscribe to the MongoDB change streams and receive the data in almost real-time.
