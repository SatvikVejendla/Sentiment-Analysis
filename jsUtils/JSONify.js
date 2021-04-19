function JSONify(arr) {
  let json = {};
  for (let i = 0; i < arr.length; i++) {
    json[arr[i]] = i;
  }
  return json;
}

module.exports = JSONify;
