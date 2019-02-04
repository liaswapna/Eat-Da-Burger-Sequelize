const express = require('express')
const exphbs  = require('express-handlebars');
var db = require("./models");
const app = express()
const PORT = process.env.PORT || 3000

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application body as JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Set Handlebars.
app.engine("handlebars",exphbs({defaultLayout: "main"}))
app.set("view engine","handlebars")

// connection to api-routes
require('./routes/burger-api-routes')(app)
require('./routes/customer-api-routes')(app)

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  
  module.exports = app;