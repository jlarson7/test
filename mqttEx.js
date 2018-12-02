var Cayenne = require('cayennejs');

// Initiate MQTT API
const cayenneClient = new Cayenne.MQTT({
  username: "25e51420-f5d1-11e8-a254-e163efaadfe8",
  password: "a18088c00f74a59d3671ee73e4b8b1cb6f0f2ee4",
  clientId: "a093f6c0-f5d9-11e8-b82d-f12a91579eed"
});

cayenneClient.connect((err, mqttClient) => {
  // dashboard widget automatically detects datatype & unit
  cayenneClient.kelvinWrite(3, 65);

  // sending raw values without datatypes
  cayenneClient.rawWrite(4, 123);

  // subscribe to data channel for actions (actuators)
  cayenneClient.on("cmd9", function(data) {
    console.log(data);
  });

});