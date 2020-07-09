var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyparser = require("body-parser");


//Set up default mongoose connection
var url = 'mongodb://localhost:27017/myPlaces';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function() {
    console.log("Connectd..");
});

// SCHEMA SETUP
// mongoose-model

var places_schema = mongoose.Schema;

var place1 = new places_schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

// Compile model from schema
// Means p1 is a model(like an object) that uses this
var p1 = mongoose.model('p1', place1);

// p1.create({

//     name: "Bandipur National Reserve,Karnataka ",
//     image: "https://www.weekendthrill.com/wp-content/uploads/2016/08/product-images-14-min-300x300.png",
//     desc: "Bandipur national park was established in 1974. It is located in Karnataka state of India. Karnataka has the second highest Tiger population in India. Along with adjacent Nagarhole park it’s one among the premier Tiger Reserves within the country. It was once a personal hunting reserve for the Maharaja of the dominion of Mysore. Bandipur Tiger Reserve has now upgraded. Wildlife is the best place for Bandipur. It has many sorts of biomes, but dry deciduous forest is dominant.The park spans an area of 337 sq mi, protecting several species of India’s endangered wildlife. Together with the adjoining Nagarhole National Park 248 sq mi, Mudumalai National Park 120 sq mi. Gundlupet taluq of Chamarajanagar district is the place where bandipur is located. It is about 80 kilometers from the town of Mysore on the route to a serious tourist destination of Ooty. Therefore, Bandipur sees tons of tourist traffic and there are many wildlife fatalities caused by speeding vehicles that are reported annually. There is a ban on traffic from 9 pm to six am of dusk to dawn to assist bring down the death rate of wildlife."
// }, function(err, place) {
//     if (err) {
//         console.log("Error!");
//     } else {
//         console.log("Newly created place");
//         console.log(place);
//     }
// })



// In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", function(req, res) {

    res.render("landings");
});


// INDEX Route : Get Rqst : Displays all the places:
app.get("/places", function(req, res) {

    // Now access the database and pass values to the HTML file

    // Finding all the values from the database.
    p1.find({}, function(err, allPlaces) {
        if (err) {
            console.log(err);
        } else {
            // console.log(allPlaces);
            res.render("index", { visit: allPlaces });
        }
    });

    //Passing places array to the HTML file.
    // res.render("places", { visit: places_to_visit });
});

// CREATE Route : Post Rqst : Adds data into the database
app.post("/places", function(req, res) {

    let place = req.body.new_place;
    let image = req.body.image_url;
    let newPlace = {
        name: place,
        image: image
    };

    // Rather than pushing data into the array , moe save data in the database.
    //places_to_visit.push(newPlace);

    p1.create(newPlace, function(err, newly_created_place) {
            if (err) {
                console.log("Error!" + err);
            } else {
                res.redirect("/places");
            }
        })
        // res.redirect("/places");
});

// NEW Route : Get : Show form to cretae new place 
// form will take the data and post to places url;
app.get("/places/new", function(req, res) {

    res.render("new");
});


// SHOW Route: get : Displays the info about route. Shows info about one thing in particular.

app.get("/places/:id", function(req, res) {

    // Searching on the basis of ID:
    res.render("show");
});



app.listen(30000, function(req, res) {

    console.log("Server has started! Travel the Unknown Places.");
});