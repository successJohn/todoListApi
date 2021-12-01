const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Task  = require("./api/models/todoListModel");
const bodyParser = require("body-parser");



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
var routes = require("./api/routes/todoListRoute");
routes(app);

app.listen(port);

console.log(`todo Api started on port ${port}`);