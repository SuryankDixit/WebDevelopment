var mongoose = require("mongoose");

// if database exist ,them it will use ,otherwise it will create the database;
mongoose.connect("mongodb://localhost/cat_app");


// It is good to define a structure of the data that we are going to store;
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

//It is is just like that we are creating an object of name cat through which we can use CRUD functionality.
//like  Cat.create(), Cat.find() etc;
// Read documentation to know more, This is not enough.
var Cat = mongoose.model("Cat", catSchema);

var cat1 = new Cat({
    name: "kitty",
    age: 17
});