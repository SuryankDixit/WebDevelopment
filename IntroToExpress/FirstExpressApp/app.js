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



app.get("/dog", function(req, res) {
    res.send("If a man loves dog, he is a good man.");
});



// Defining a pattern using ':/route' , anything passed after r will redirect us to this route;
app.get("/r/:route", function(req, res) {
    // console.log(req);
    // req has a member named params through which we can access the route name written in URL.
    let name = req.params.route;
    res.send(`This is a ${name} page, which shows results based on the URL pattern.`);
});



// This includes => name, comments, id, title;
app.get("/r/:route/comments/:id/:title/", function(req, res) {

    let name = req.params.route;
    let id = req.params.id;
    id = id.toUpperCase();
    let title = req.params.title;
    title = title.toUpperCase();
    console.log(req);
    res.send(`This is a ${name.toUpperCase()} page whose id is ${id} and title of the page is ${title}.`);
});


// When user enter a gibberish route.
app.get("*", function(req, res) {
    res.send("Welcome to the Gibberish Page.");
});

console.log("First Express App");

// returns a port number on which server is running
app.listen(50000, function() {
    console.log("Server has started!, Press ctrl+c to shut down the server.");
});