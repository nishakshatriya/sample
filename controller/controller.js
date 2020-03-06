"use strict";

var services = require('../services/services');
// module.exports = {
//     findData(fromType, toType, unitValue) {
//         var result
//         services.unitConversion(fromType, toType, unitValue, ((err, data) => {
//             if (err) {
//                 return false
//             }
//             console.log('data-------------->>>',data);
//             result = data;
//         }))
//         return result
//     }
// };

exports.findData = (req,res) => {
    services.findAll(req,(function(err,data){
        if(err){
            res.status(500).send({
                message: err.message || "something went wrong"
            })
        }
        res.message = "Successful!!"
        res.send(data)
    }))
}

// exports.getingdata = (req,res) => {
//     services.findAll(req,(function(err,data){
//         if(err){
//             res.status(500).send({
//                 message: err.message || "wronggg"
//             })
//         }

//     var result = {
//         "fromType":"inch",
//         "toType":"feet",
//         "unitValue":"3"
//     }
//     res.send(data);
//     }))
// }