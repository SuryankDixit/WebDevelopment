var mongoose = require("mongoose");

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

module.exports = p1; // exporting this schema to other files so that they can access this.