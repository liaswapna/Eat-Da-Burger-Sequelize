var db = require("../models/")

module.exports = function(app){
    app.post('/api/customers', function(req,res){
        console.log(req.body)
        db.Customer.create({
            customer_name: req.body.customer_name,
            BurgerId: req.body.BurgerId
        }).then(function(data){
            res.json(data)
        })
    });
}