//Subscribe to change streams and distribute the data.

//Web servers
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(9000);

// Register the index route of your app that returns the HTML file
app.get('/', function (req, res) {
    console.log("Homepage accessed from browser");
    res.sendFile(__dirname + '/index.html');
});

//MongoDB driver
var mongo = require('mongodb');

//Access to script and style files
var path = require('path');
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/socketio', express.static(path.join(__dirname, '/node_modules/socket.io-client/dist/')));
app.use('/', express.static(__dirname));

//Welcome
console.log("DBRD v0.1");
console.log("Retrive and distribute server started!");
console.log("Waiting for clients to connect...");

//Socket.io connection event handler
io.on('connection', (socket) => {
  console.log("Client", socket.id, "connected");
  socket.emit('Ok', { hello: 'client' });

  socket.on("Ok", (data) => {
    console.log("Client", socket.id, "confirmed");
  });

  socket.on('disconnect', () => {
    console.log("Client", socket.id, "disconnected");
  });

  //Connect to database
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
      if (err) throw err;
      console.log("Connected to database server", );

      //Use device1 collection on devices database
      const collection = db.db("devices").collection("device1");

      //Lead I
      //Create change stream and filter by uuid
      const pipeline_lead_I = [ { $match:{'fullDocument.uuid':'8171'} } ];
      //Receive change
      const change_stream_lead_I = collection.watch(pipeline_lead_I);
      //Emit change
      change_stream_lead_I.on("change", next => {
        socket.emit('lead_I_data', next.fullDocument.samples);
      });

      //Lead II
      const pipeline_lead_II = [ { $match:{'fullDocument.uuid':'8172'} } ];
      const change_stream_lead_II = collection.watch(pipeline_lead_II);
      change_stream_lead_II.on("change", next => {
        socket.emit('lead_II_data', next.fullDocument.samples);
      });

      //Lead III
      const pipeline_lead_III = [ { $match:{'fullDocument.uuid':'8171'} } ];
      const change_stream_lead_III = collection.watch(pipeline_lead_III);
      change_stream_lead_III.on("change", next => {
        socket.emit('lead_III_data', next.fullDocument.samples);
      });

      //Lead aVR
      const pipeline_lead_aVR = [ { $match:{'fullDocument.uuid':'8171'} } ];
      const change_stream_lead_aVR = collection.watch(pipeline_lead_aVR);
      change_stream_lead_aVR.on("change", next => {
        socket.emit('lead_aVR_data', next.fullDocument.samples);
      });

      //Lead aVL
      const pipeline_lead_aVL = [ { $match:{'fullDocument.uuid':'8172'} } ];
      const change_stream_lead_aVL = collection.watch(pipeline_lead_aVL);
      change_stream_lead_aVL.on("change", next => {
        socket.emit('lead_aVL_data', next.fullDocument.samples);
      });

      //Lead aVF
      const pipeline_lead_aVF = [ { $match:{'fullDocument.uuid':'8172'} } ];
      const change_stream_lead_aVF = collection.watch(pipeline_lead_aVF);
      change_stream_lead_aVF.on("change", next => {
        socket.emit('lead_aVF_data', next.fullDocument.samples);
      });

      //Lead V1
      const pipeline_lead_V1 = [ { $match:{'fullDocument.uuid':'8173'} } ];
      const change_stream_lead_V1 = collection.watch(pipeline_lead_V1);
      change_stream_lead_V1.on("change", next => {
        socket.emit('lead_V1_data', next.fullDocument.samples);
      });

      //Lead V2
      const pipeline_lead_V2 = [ { $match:{'fullDocument.uuid':'8174'} } ];
      const change_stream_lead_V2 = collection.watch(pipeline_lead_V2);
      change_stream_lead_V2.on("change", next => {
        socket.emit('lead_V2_data', next.fullDocument.samples);
      });

      //Lead V3
      const pipeline_lead_V3 = [ { $match:{'fullDocument.uuid':'8175'} } ];
      const change_stream_lead_V3 = collection.watch(pipeline_lead_V3);
      change_stream_lead_V3.on("change", next => {
        socket.emit('lead_V3_data', next.fullDocument.samples);
      });

      //Lead V4
      const pipeline_lead_V4 = [ { $match:{'fullDocument.uuid':'8176'} } ];
      const change_stream_lead_V4 = collection.watch(pipeline_lead_V4);
      change_stream_lead_V4.on("change", next => {
        socket.emit('lead_V4_data', next.fullDocument.samples);
      });

      //Lead V5
      const pipeline_lead_V5 = [ { $match:{'fullDocument.uuid':'8177'} } ];
      const change_stream_lead_V5 = collection.watch(pipeline_lead_V5);
      change_stream_lead_V5.on("change", next => {
        socket.emit('lead_V5_data', next.fullDocument.samples);
      });

      //Lead V6
      const pipeline_lead_V6 = [ { $match:{'fullDocument.uuid':'8178'} } ];
      const change_stream_lead_V6 = collection.watch(pipeline_lead_V6);
      change_stream_lead_V6.on("change", next => {
        socket.emit('lead_V6_data', next.fullDocument.samples);
      });
    });

    //Print info
    console.log("Watching changes on database...");
  });
