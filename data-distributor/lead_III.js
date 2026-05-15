//Graph signal based on received data from a websocket.

$(document).ready(function() {
  //Connect to socket.io server
  var socket = io("ws://192.168.1.16:9000", { transports: ["websocket"] });

  //Get canvas context
  var canvas = document.getElementById("lead_III");
  canvas.width = window.innerWidth/2 - 30;
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 1;

  //Confirm connection
  socket.on("Ok", data => {
    console.log("Received", data, "from server");
    socket.emit("Ok", { Ok: "got it" });
  });

  //Initial values
  var y_cursor = 0;
  var x_cursor = 0;
  var x_scale = 2;
  var key = 0;

  //Receive data
  socket.on("lead_III_data", data => {
    // Begin line
    ctx.beginPath();
    ctx.moveTo(x_cursor, y_cursor);
    ctx.strokeStyle = "#DCED31";

    //Frame animation function
    function frame_animation(timestamp) {
      // Elapsed time
      // if (start === undefined) start = timestamp;
      // const elapsed = timestamp - start;

      y_cursor = (data[key] / 8388607) * 50 + 50; //Scaled 24 bit, range from -50 to 50
      ctx.lineTo(x_cursor, y_cursor);
      x_cursor += x_scale;
      ctx.stroke();
      // console.log("Key:", key, x_cursor, y_cursor);
      key++;

      //Clear swipe
      ctx.clearRect(x_cursor, 0, 10, canvas.height);

      //Draw from the beginning when reaching canvas end
      if (x_cursor > canvas.width) {
        x_cursor = 0;

        // ctx.clearRect(x_cursor, 0, 50, canvas.height);
        ctx.moveTo(x_cursor, y_cursor);
      }

      // Stop the animation after all samples have been drawn
      if (key < Object.keys(data).length) {
        window.requestAnimationFrame(frame_animation);
      } else {
        key = 0;
        // Go back one sample
        // x_cursor -= x_scale;
      }
    }

    //Call frame animation function
    window.requestAnimationFrame(frame_animation);

    //Window resize debounce
    var timeout = false;
    var delay = 250;
    window.onresize = function() {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(getDimensions, delay);
    };

    // window.resize callback function
    function getDimensions() {
      W = window.innerWidth/2 - 30;
      canvas.width = W;
      ctx.strokeStyle = "#DCED31";
    }
  });
});
