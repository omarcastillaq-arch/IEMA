# Web Bluetooth ECG visualization application

* /dist: compilation output folder which contains main index.html and bundle.js files.  
* /src: TypeScript source code.  
* webpack.config.js: Webpack configuration file.  
* tsconfig.json: TypeScript compiler configuration.
* package-lock.json: npm dependencies.

This Web BLE ECG app is written in TypeScript and is used to colorfully animate a 12-lead electrocardiogram (ECG) from a custom made Bluetooth Low Energy (BLE or Bluetooth 4.0+) acquisition hardware. The signal is animated in HTML5 Canvas and is responsive to the client's screen size. The custom hardware used with this app has the following GATT structure:

1 ECG Service
* UUID: 0x805b.  

8 Characteristics:  
* Lead I = Channel 1 UUID: 0x8171.  
* Lead II = Channel 2 UUID: 0x8172.  
* Lead V1 = Channel 3 UUID: 0x8173.  
* Lead V2 = Channel 4 UUID: 0x8174.  
* Lead V3 = Channel 5 UUID: 0x8175.  
* Lead V4 = Channel 6 UUID: 0x8176.  
* Lead V5 = Channel 7 UUID: 0x8177.  
* Lead V6 = Channel 8 UUID: 0x8178.  

All characteristics must support sending notifications. Leads III, aVR, aVF, and aVL can be calculated from I and II.

Each GATT notification from each channel contains 21 samples of 24 bits, 250 Hz sampling rate data in 2's complement, which are converted to signed 32-bit numbers. Webpack is used for compilation and packing. This app has been tested in Chrome Beta version 84.0.4147.38 (64 bits) and node.js v8.

### HOW IT WORKS

When the ECG device is turned on, it's in advertising mode so that the Web Bluetooth API can discover it. To start watching for changes in the code run

```console
npm install
npx webpack --config webpack.config.js
```

Then open index.html in the dist/ folder. In the web page, click the "Connect" button. Find your device from the list and click "Pair." Once successfully connected, the app will start automatically displaying the live signal of all leads.
