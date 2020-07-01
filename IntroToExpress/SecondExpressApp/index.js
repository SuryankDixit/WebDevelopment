var express = require("express");

var app = express();


app.get("/", function(req, res) {
    res.send("Hi, Welcome to Parallel Universe!");
});

app.get("/speak/:route/", function(req, res) {

    // if (name === "pig")
    //     res.send("Oink !!");
    // else if (name === "cow")
    //     res.send("MOO !!");
    // else if (name === "dog")
    //     res.send("WOOF WOOF !!!");
    // else
    //     res.send("Sounds !!!");

    animal = {
        pig: "Oink!!",
        cow: "Moo!!",
        dog: "WoofWoof!!"
    };
    let name = req.params.route.toLocaleLowerCase();
    let sound = animal[name];
    res.send(`${name} says '${sound}'`);
});

app.get("/repeat/:route/:num/", function(req, res) {

    let num = parseInt(req.params.num);
    let name = req.params.route;
    var arr = "";
    for (let i = 0; i < num; i++)
        arr += name + " ";
    res.send(arr);
});

app.get("*", function(req, res) {
    res.send("Use proper URL.");
});

app.listen(10000, function() {
    console.log("Server has started!!");
});