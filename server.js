// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var request = require("request");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/usersdb");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//routes

app.get('/', function(req, res, next, error){
	// Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
    res.render("index",{ title: 'Express' });
      }
});




// Listen on port 27017
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});


