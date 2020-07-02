var express = require("express");

var app = express();

var bodyparser = require("body-parser");

// it shows the body of the post request in the cosole as an object 
// Takes the request body and parse it into javascript object;
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let friends = ["Ankit", "Nakul", "Preteek", "Siddhu"];

app.get("/", function(req, res) {

    res.render("home");
});

app.get("/friends", function(req, res) {

    res.render("friends", { friends: friends });
});

app.post("/addfriend", function(req, res) {

    // req.body doesn't make objects itself, we need to install package fro this  (npm install body-parser);;
    console.log(req.body);
    let friendName = req.body.newfriend;
    friends.push(friendName);
    //res.send("This is the post route.");
    res.redirect("/friends");
});


app.listen(20000, function() {
    console.log("Server has started");
});