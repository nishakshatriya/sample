
const services = require('../services/services');
// const sinon = require('sinon');
// const dataFile = require('../Measurement/unitTypes')
const assert = require('chai').assert;

// var data = [{
//     fromType:"inch",
//     toType:"feet",
//     unitValue:"3"
// }]

// describe('converting',function(){
//     it('asdfgj',function(){
//         services.findAll(data,(err,data)=>{
//             if(err){
//                 console.log('erorrrrr!!!!');   
//             }
//             assert.equal(data, 3000);     
//         })
//     })
// })
 
/*
var jsonFile = require('../model/model');
module.exports = {
findAll(data, callback) {
if(data){
var keys = Object.keys(jsonFile.unitType()[0]);
console.log('keys.....',keys);
for (var i = 0; i < keys.length; i++) {
if (keys[i] == toType) {
var calculatedValue = jsonFile.unitType()[0][keys[i]][fromType] * unitValue
}
}
return callback(null, calculatedValue);
}
}

}

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


var data1={
    firstUnit:"INCH",
    secondUnit:"INCH",
    unitValue:0
    }
    
    var data2={
    firstUnit:"INCH",
    secondUnit:"FEET",
    unitValue:1
    }
    
    describe("quantity measurement sinon testing services",function(){
    
    it('Given zero inch should return zero inch',()=>{
    services.findAll(data1,(err,data)=>{
    if(err){
    console.log(err);
    }
    console.log(data,'aejdfgayjdgyae');
    
    assert.equal(data,0);
    });
    })

    
    }); 