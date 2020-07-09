var mongoose = require("mongoose");

var programmer_schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});
// Compile model from schema
// more like an object that we can use to create item
module.exports = mongoose.model('programmer', programmer_schema);