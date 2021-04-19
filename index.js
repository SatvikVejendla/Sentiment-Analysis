//packages
const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const fs = require("fs");

//utils
const dirPath = require("./config/dirPath.js");
const staticServer = require("./server/staticServer.js");
const load = require("./server/load.js");
const loadVocab = require("./jsUtils/loadVocab.js");
const tokenize = require("./processing/tokenize.js");
let model;
let app = express();

let word_index = loadVocab();

app.get("/", (req, res) => {
  res.sendFile(dirPath.htmlFile.path);
});

app.get("/predict", (req, res) => {
  let str = req.query.input;

  str = str
    .toLowerCase()
    .split(" ")
    .map((word) => word_index[word] + 3 || 2);

  let arr = [1, ...str];

  if (str.length > 250) {
    str = str.slice(0, 250);
  } else {
    let l = 250 - str.length;
    for (let i = 0; i < l; i++) {
      str.push(0);
    }
  }

  let out = model.predict(tf.tensor2d([str])).dataSync();

  res.json(out);
});

app.listen(8000, function () {
  console.log("App server running on port 8000...");
  load().then((_m) => {
    model = _m;
    console.log("Model successfully loaded...");
  });
});
