var express = require("express");

var app = express();


//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("public")); //defined css;


//A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

app.set("view engine", "ejs"); // rendering ejs files 



app.get("/", function(req, res) {

    // render function simply looks for views dir and then search for the specified file;
    // This kind of rendering is STATIC because we are not passing any object to ejs file.

    //ejs is EMBEDDED JAVASCRIPT.
    res.render("home"); // OR res.render("home.ejs");
});


app.get("/fallinlovewith/:name", function(req, res) {

    // Rendering the name value as an object in the ejs file.
    let name = req.params.name;
    res.render("love", { Name: name }); // OR res.render("love.ejs", { Name: name });
});


app.get("/posts", function(req, res) {

    let posts = [

        { Title: "Galaxy", Author: "Suryank Dixit" },
        { Title: "Hacking", Author: "Ankit Gupta" },
        { Title: "Food", Author: "Nakul" }
    ];
    res.render("posts", { post: posts });
});


app.listen(10000, function() {
    console.log("Server has started !");
});