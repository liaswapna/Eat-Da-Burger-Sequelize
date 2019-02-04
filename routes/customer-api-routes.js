// *********************************************************************************
// customer-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


var db = require("../models/")

module.exports = function(app){
    app.post('/api/customers', function(req,res){
        db.Customer.create({
            customer_name: req.body.customer_name,
            BurgerId: req.body.BurgerId
        }).then(function(data){
            res.json(data)
        })
    });
}