require("dotenv").config();
var session = require('express-session');
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");
var moment = require("moment");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + "/public/"));
app.use(function(req, res, next) {
  res.locals.moment = moment;
  next();
});
app.use(session({
  secret: "taco",
  resave: false,
  saveUninitialized: true
}));

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(process.env.PORT || 3000);






