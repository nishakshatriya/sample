var jsonFile = require("../model/model");
module.exports = {
  findAll(data, callback) {
    var toType = data.firstUnit;
    var fromType = data.secondUnit;
    if (data) {
      var keys = Object.keys(jsonFile.unitType()[0]);
      console.log("keys.....", keys);
      var keys = Object.keys(keys);
      console.log('asdfghjk------>',keys);
      
      

      for (var i = 0; i < keys.length; i++) {
        console.log("in for loop keys", keys[i]);

        if (keys[i] == toType) {
          console.log("in secind if loop");

          var calculatedValue =
            jsonFile.unitType()[0][keys[i]][fromType] * unitValue;
        }
      }
      return callback(null, calculatedValue);
    }
  }
};

/*var jsonFile = require('./unitTypes');
module.exports = {
  unitConversion(fromType, toType, unitValue, callback) {
    var keys = Object.keys(jsonFile.unitType()[0]);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] == toType) {
        var calculatedValue = jsonFile.unitType()[0][keys[i]][fromType] * unitValue
      }
    }
    return callback(null, calculatedValue);
  } */
