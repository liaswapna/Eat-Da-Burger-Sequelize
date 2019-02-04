
// *********************************************************************************
// burger-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({raw: true, include: [{ model: db.Customer}]}).then(function(data) {
      res.render("index", { burger: data });
    });
  });

  app.post('/api/burgers', function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(data) {
      res.json(data);
    });
  });

  app.put('/api/burger', function (req, res) {
    db.Burger.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbPost) {
          res.json(dbPost);
        });
  });

  app.delete('/api/burger', function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.body.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
}
