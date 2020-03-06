const express = require('express')
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json)

const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

require('../SinonQuantityMeasurement (copy)/routes/routes')(app)

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});