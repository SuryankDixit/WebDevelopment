var express = require("express");

var app = express();


// In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var places_to_visit = [
    { name: "Mawsynram, Meghalaya", image: "https://www.hlimg.com/images/places2see/738X538/mawsynram_1510844669m.jpg" },
    { name: "Chembra Peak, Wayand, Kerala", image: "https://www.escape2explore.com/storage/event-package/upload/Wayanad-3D-and-2N-Tour-with-Chembra-Peak-trek,-Cave-and-Waterfalls-10-04-2018-1523337556.jpg" },
    { name: "Ziro, Arunachal Pradesh", image: "https://www.tourmyindia.com/states/arunachalpradesh/images/dilopolyang-maniipolyang1.jpg" }
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


app.listen(10000, function(req, res) {

    console.log("Server has started! Travel the Unknown Places.");
});