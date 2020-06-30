var express = require("express");

// executing express and saving it in variable;
var app = express();


// app.get( "PATH" , Anonymous CallBack function that will execute code)
app.get("/", function(req, res) {
    res.send("Hello There, Welcome to Homepage!");
});

app.get("/bye", function(req, res) {
    res.send("Ok Bye!");
});

console.log("First Express App");

// returns a port number on which server is running
app.listen(4000, function() {
    console.log("Server has started!, Press ctrl+c to shut down the server.");
});