
function initSocketIO()
{
  iosocket = io.connect();
  console.log('io !');
  iosocket.on('onconnection', function(value) {
  faster = value.pollOneValue; // recieve start poll value from server
  // initPoll();
  // initButton();
  // initSlider();


  // recieve changed values by other client from server
  iosocket.on('updateData', function (recievedData) {
    faster = recievedData.pollOneValue; // recieve start poll value from server
    alert("faster "+ faster);
  });

    });
}

initSocketIO()
