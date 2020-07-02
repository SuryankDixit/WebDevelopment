var express = require("express");

var app = express();

app.set("view engine", "ejs");

const axios = require('axios');

// We will have 2 routes, one for search and other for results

app.get("/", function(req, res) {

    res.render("search");
});


app.get("/results", function(req, res) {

    let movie = req.query.movie_name; // accessing data given by use in the form;

    let url = `http://omdbapi.com/?s=${movie}&apikey=thewdb`;

    axios.get(url) // if response is received OK 
        .then(function(response) {
            //console.log(typeof(response.data));
            //res.send(response.data.Search[0]);
            let data = response.data;
            res.render("results", { data: data });
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
});


app.listen(10000, function(req, res) {

    console.log("Server has Started!! Press ctrl+C to shutdown.");
});