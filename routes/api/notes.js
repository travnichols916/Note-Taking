// declare dependencies
const path = require('path');
const fs = require('fs');
// use router instead of app object
const router = require('express').Router();
// use UUID to make an ID universally unique
const { v4: uuidv4 } = require('uuid');



// get request for notes
router.get("/notes", function(req, res) {
    console.log(`GET response for /notes endpoint`);
    fs.readFile("./db/db.json", function (err, data) {
        if (err) {
            throw (err);
        };
        let notes = JSON.parse(data)
        return res.json(notes);
    })   
});


// "C" part of CRUD otherwise known as the create/post method
// remember to use "key" : "value" syntax in Insomnia for testing
router.post ('/notes', function(req, res) {

    console.log('POST request sent for /notes endpoint');
    let newNote = req.body;
    newNote.id = uuidv4();

    // we read notes file and take data, push new note to data
    fs.readFile("./db/db.json", "utf8", function(err, data) {

        // when we readfile it becomes string, so we have to parse
        let currentNotes = (JSON.parse(data));

        currentNotes.push(newNote);
        

        // now we add new set of notes to database, but stringify it first
        fs.writeFile("./db/db.json", JSON.stringify(currentNotes), "utf8", function(err){
            console.log("post request sent for /notes endpoint")
        })
    })

    res.json(newNote);

});

//export to server.js
module.exports = router;