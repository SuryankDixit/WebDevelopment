const express = require("express");

var app = express();

var mongoose = require('mongoose');

//Set up default mongoose connection
var url = 'mongodb://localhost/ProgrammerDB';


mongoose.connect(url, { useNewUrlParser: true });

//Get the default connection to get hold on the database:
var db = mongoose.connection;

//Bind connection to error event and open event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function() {
    console.log("Connectd..");
});

// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

var programmer_route = require("./routes/programmers");
app.use("/programmers", programmer_route); // for all the /programmer rqst, route that to programmer_route

app.listen(10000, function(req, res) {

    console.log("Server has started!");
});