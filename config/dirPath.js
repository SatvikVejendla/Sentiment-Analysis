const path = require("path");

let name = "index.html";
let rootPath = "public";

module.exports = {
  pathName: rootPath,
  rootDir: {
    path: path.join(__dirname, "../", rootPath),
  },
  htmlFile: {
    path: path.join(__dirname, "../", rootPath, "index.html"),
  },
};
