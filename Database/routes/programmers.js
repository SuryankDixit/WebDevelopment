const express = require("express");

var router = express.Router();

const programmer = require("../models/programmer");

router.get("/", async function(req, res) {
    try {
        var programmers = await programmer.find();
        res.json(programmers);
    } catch (err) {
        res.send("Error" + err);
    }
});

router.get("/:id", async function(req, res) {
    try {
        var programmer = await programmer.findById(req.params.id); // params because we are checking url
        res.json(programmer);
    } catch (err) {
        res.send("Error" + err);
    }
});


router.post("/", async function(req, res) {
    const newProgrammer = new programmer({
        name: req.body.name,
        tech: req.body.tech,
        age: req.body.age
    });

    try {
        const p1 = await newProgrammer.save();
        res.json(p1);
        //res.redirect("/");
    } catch (error) {
        res.send("Error" + error);
    }
});

module.exports = router