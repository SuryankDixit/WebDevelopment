var express = require("express"),
    bodyparser = require("body-parser"), // use it to parse values from form to post request.
    mongoose = require("mongoose"),
    app = express();

// APP CONFIG

app.set("view engine", "ejs"); // Easy to send html file back to client if we use ejs;
app.use(express.static("public")); // all the CSS JS HTML files will be here
app.use(bodyparser.urlencoded({ extended: true }));


var url = 'mongodb://127.0.0.1/restful_blog_app';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function() {
    console.log("Connected.");
});

// MONGOOSE MODEL CONFIG;

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
var blog = mongoose.model('blog', blogSchema);

// blog.create({

//     title: "World of Cloud Computing:",
//     image: "https://www.crn.com/resources/025a-0ebfd08f24a2-0773e08615b2-1000/shot_of_corridor_in_working_data_center_full_of_rack_servers_and_supercomputers_with_cloud_storage_advantages_icon_visualization..jpeg",
//     body: "Cloud Computing concepts are totally based on the abstraction."
// }, function(err, place) {
//     if (err) {
//         console.log("Error!");
//     }
// })

// ROUTES

// Index route: Shows the index of all the posts:
app.get("/blogs", function(req, res) {

    blog.find({}, function(err, blogs) {
        if (err) {
            console.log("Error " + err);
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

// Create Route :  New Blog
app.get("/blogs/new", function(req, res) {
    res.render("new");
});


app.post("/blogs", function(req, res) {
    blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            // console.log(newBlog);
            // console.log(req.body.blog);
            res.redirect("/blogs");
        }
    });
})

// SHOW Routes:
app.get("/blogs/:id", function(req, res) {

    blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});


app.listen(30000, function(req, res) {
    console.log("Server has started, Welcome to BLOG APP.");
});