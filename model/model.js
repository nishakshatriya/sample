function unitType() {
    var units = [{
      "length": {
        "inch": 1,
        "feet": 12,
        "yard": 36,
        "cm": 0.3937
      },
      "volumn": {
        "gallon": 3.78,
        "litre": 1,
        "ml": 1000
      },
      "mass": {
        "kilograms": 1,
        "tonne": 1000,
        "grams": 0.001
      },
      "temperature": {
        "celcius": 1,
        "fahrenheit": 0.4716
      }
    }]
  
    return units
  }
  
  module.exports = {
    unitType
  }