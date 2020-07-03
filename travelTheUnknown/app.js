var express = require("express");

var app = express();


// In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var places_to_visit = [
    { name: "Mawsynram, Meghalaya", image: "https://c.saavncdn.com/901/Hills-and-Horizons-English-2018-20180619150718-500x500.jpg" },
    { name: "Chembra Peak, Wayand, Kerala", image: "https://c.saavncdn.com/357/Hills-English-2018-20180621182537-500x500.jpg" },
    { name: "Ziro, Arunachal Pradesh", image: "http://www.highlandsanctuarymusic.com/wp-content/uploads/2019/07/Highland-Sanctuary-Of-Valleys-and-Hills-500x500.jpg" },
    { name: "Mawsynram, Meghalaya", image: "https://c.saavncdn.com/901/Hills-and-Horizons-English-2018-20180619150718-500x500.jpg" },
    { name: "Chembra Peak, Wayand, Kerala", image: "https://c.saavncdn.com/357/Hills-English-2018-20180621182537-500x500.jpg" },
    { name: "Ziro, Arunachal Pradesh", image: "http://www.highlandsanctuarymusic.com/wp-content/uploads/2019/07/Highland-Sanctuary-Of-Valleys-and-Hills-500x500.jpg" }
];

app.get("/", function(req, res) {

    res.render("landings");
});

app.get("/places", function(req, res) {


    res.render("places", { visit: places_to_visit });
});


app.post("/places", function(req, res) {

    let place = req.body.new_place;
    let image = req.body.image_url;
    let newPlace = {
        name: place,
        image: image
    };
    places_to_visit.push(newPlace);

    res.redirect("/places");
});

// form will take the data and post to places url;
app.get("/places/new", function(req, res) {

    res.render("new");
});


app.listen(30000, function(req, res) {

    console.log("Server has started! Travel the Unknown Places.");
});