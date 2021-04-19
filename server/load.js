const staticServer = require("./staticServer.js");
const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");

function load() {
  return new Promise((resolve) => {
    staticServer.start().then(async () => {
      console.log("Static server running on port 3000...");
      model = await tf.loadLayersModel(
        "http://localhost:3000/state/model.json"
      );
      resolve(model);
    });
  });
}

module.exports = load;
