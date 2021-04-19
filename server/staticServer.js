const express = require("express");
const dirPath = require("../config/dirPath.js");
const ports = require("../config/ports.js");

const server = express();

server.use(express.static(dirPath.rootDir.path));

function start() {
  return new Promise((resolve) => {
    server.listen(ports._st, function () {
      console.log(`Static server running on port ${ports._st}...`);
      resolve(0);
    });
  });
}

module.exports = {
  start: start,
};
