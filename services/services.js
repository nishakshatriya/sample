var jsonFile = require("../model/model");
module.exports = {
  convert(data, callback) {
    var toType = data.body.firstUnit;
    var fromType = data.secondUnit;
    console.log("to typeeeee---->", data.body);
    console.log("from type----->", fromType);
    if (data) {
      var result, unitValue;

      var keys = Object.keys(jsonFile);

      for (var i = 0; i < keys.length; i++) {
        if (keys[i] == toType) {
          var retrieveKeys = Object.keys(jsonFile[keys[i]]);
          for (var j = 0; j < retrieveKeys.length; j++) {
            if (retrieveKeys[j] == fromType) {
              result = jsonFile[keys[i]][retrieveKeys[j]] * unitValue;
            }
          }
          return callback(null, result);
        }
      }
    }
  }
};
