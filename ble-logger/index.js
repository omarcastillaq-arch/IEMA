//Acquire BLE data from monitoring device using a USB BLE dongle on
//Jetson Nano, and store it on a Mongo DB

var noble = require('noble');
var mongo = require('mongodb');

//24 bit signed integer
var int24 = require('int24');

// Delay
const { promisify } = require('util')
const sleep = promisify(setTimeout)

// ECG Service UUID
var ecg_uuid = "805b";

//Welcome
console.log('EBDBL v0.1') //ECG BLE DB Logger v0.1

//Connect to database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, {useUnifiedTopology: true, poolSize: 100}, function(err, db) {
  if (err) throw err;
  db.db("devices").createCollection("device1", function(err, res) {
    if (err) throw err;
    console.log("Collection created");
  });

  //New peripheral discovered event handler
  function onDiscovery(peripheral){
    // peripheral.rssi                             - signal strength
    // peripheral.address                          - MAC address
    // peripheral.advertisement.localName          - device's name
    // peripheral.advertisement.manufacturerData   - manufacturer-specific data
    // peripheral.advertisement.serviceData        - normal advertisement service data

    //Print peripheral name
    console.log("Found device", peripheral.address, "with name", JSON.stringify(peripheral.advertisement.localName));

    //Check device name
    if (peripheral.advertisement.localName === "IoT Holter"){
      console.log("Holter detected");

      //Connect to peripheral
      peripheral.connect(error => {
        console.log('Connected to', peripheral.id);
        peripheral.on('disconnect', function() {
          process.exit(0);
        });

        //Find service of interest
        peripheral.discoverServices([ecg_uuid], function(error, services) {
          console.log('Found ECG service:', services[0].uuid);

          //Discover characteristics
          services[0].discoverCharacteristics([], function(err, characteristics) {
            characteristics.forEach(function(characteristic) {
              console.log('Found characteristic:', characteristic.uuid);

              //Subscribe to notification
              characteristic.subscribe(function(error){
                if (error) {
                  console.log('Characteristic read error');
                }
                console.log("Notifications enabled on characteristic", characteristic.uuid);
              });

              //Receive notification data
              characteristic.on('data', function(data, isNotification) {
                // console.log(data.toString('hex'));

                //Parse samples
                var samples_per_document = 21;
                var samples = new Int32Array(samples_per_document);
                for (var i = 0; i < data.length/Int32Array.BYTES_PER_ELEMENT; i++) {
                  var temp32 = data.readUInt32LE(i*Int32Array.BYTES_PER_ELEMENT);

                  //Convert to 24-bit signed
                  samples[i] = int24.readInt24LE(data, i*Int32Array.BYTES_PER_ELEMENT);
                  // console.log(temp32.toString(16), samples[i].toString(16));
                }

                //Make document
                var doc = {};
                doc.uuid = characteristic.uuid;
                doc.ts = new Date();
                doc.samples = samples;
                // console.log(doc);

                //Insert document into DB
                db.db("devices").collection("device1").insertOne(doc, function(err, res){
                  if (err) throw err;
                  // console.log("Document inserted");
                });
              });
            });
          });
        });
      });
    }
  }

  //Start scanning when controller is on
  noble.on('stateChange',  function(state) {
    console.log("Controller state changed to " + state);
    if (state!="poweredOn") return;
    console.log("Starting scan...");
    noble.startScanning();
    sleep(20000).then(() => {
      noble.stopScanning();
    })
  });
  noble.on('discover', onDiscovery);
  noble.on('scanStart', function() { console.log("Scanning started"); });
  noble.on('scanStop', function() { console.log("Scanning stopped");});
});
