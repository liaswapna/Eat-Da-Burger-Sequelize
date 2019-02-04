
// *********************************************************************************
// post-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({raw: true, include: [{ model: db.Customer}]}).then(function(data) {
      console.log(data)
      res.render("index", { burger: data });
    });
  });

  app.post('/api/burgers', function (req, res) {
    // console.log(req.body)
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


// Requiring our models
// var db = require("../models");

// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/api/posts", function(req, res) {

//     var query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }

//     db.Post.findAll({
//       where: query,
//       include: [db.User]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });

//   });

//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {

//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.User]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });

//   });

//   // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     db.Post.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
// };






// const burger = require('../models/burger')

// module.exports = (app)=>{

//   app.get('/',function(req,res){
//     burger.selectAll(function(data){
//       res.render('index',{burger: data})
//     })
//   })

//   app.post('/api/burgers',function(req,res){
//     burger.insertOne("burger_name",req.body.burger_name,function(result){
//       res.json({ id: result.insertId });
//     })
//   })

//   app.put('/api/burger',function(req,res){
//     burger.updateOne("devoured",req.body.id,function(result){
//       res.json({ id: result.insertId });
//     })
//   })

//   app.delete('/api/burger',function(req,res){
//     burger.deleteOne(req.body.id,function(result){
//       res.json({ id: result.insertId });
//     })
//   })

// }

