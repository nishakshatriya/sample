
var services = require('../services/services');

// exports.findData = (req,res) => {
//     services.findAll(req,(function(err,data){
//         if(err){
//             res.status(500).send({
//                 message: err.message || "something went wrong"
//             })
//         }
//         res.message = "Successful!!"
//         res.send(data)
//     }))
// }

exports.getConversion = (req,res) => {
    console.log('requested bodyyyyy----->',req.body);
    

    services.convert(req,(err,data) => {
        if(err){
            return res.send({err:err});
        }
        else{
            return res.send({
                message: "Successfull!", data:data
            })
        }
    })
}
