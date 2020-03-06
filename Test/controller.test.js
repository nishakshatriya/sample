const assert = require('chai').assert;
const sinon = require('sinon')
const services = require('../services/services');
const controller = require('../controller/controller');

req = {
    "FEET":"2"
}

res = {
    send : function(){}
}

console.log('request-------------->',req);

console.log('response------------->',res);


describe('asdfghjk', function(){
    beforeEach(function(){
        sinon.stub(services,'findAll').yields(null,"hey")
    })

    it('asdf',()=>{
        let mock = sinon.mock(res);
        mock.expects('send').once().withExactArgs("hey");
        controller.findData(req,res);
        mock.verify()
    })
})



// describe("converting units", function () {
//     beforeEach(function(){
//         sinon.stub(services, 'unitConversion').yields(null, 2);
//     })


// afterEach(function(){
//     services.unitConversion.restore();  
// })
//     //inches
//     it("0 inch should return 0 inch", () => {
//         var inch = controller.unitConversion("inch", "length", 1);
//         var inch1 = controller.unitConversion("inch","length",0);
//         console.log(inch1);
//         console.log(inch);
//         assert.equal(inch1,inch)
//     }),
//        // check feet to inch conversion
//     it(" 1 feet equals 12 inch", () => {
//         var feet = controller.unitConversion("feet", "length", 1);
//         assert.equal(2, feet);
//     })
// })
