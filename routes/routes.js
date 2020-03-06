module.exports=(app)=>{
    const controller = require('../controller/controller');

    app.get('/value',controller.findData)
}