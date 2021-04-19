const fs = require("fs");
const JSONify = require("./JSONify.js");
const path = require("path");

function loadVocab() {
  console.log("Loading vocab...");
  let out = fs
    .readFileSync(path.join(__dirname, "../imdb.vocab"), function (err) {})
    .toString()
    .split("\n");
  console.log("JSONify vocab...");
  out = JSONify(out);
  return out;
}

module.exports = loadVocab;
