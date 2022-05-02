// use express router function 
const path = require('path');
const router = require('express').Router();

// router function to read request 
router.get('/', function (req, res) {
    console.log ('get request sent for index.html');
    //send file to html
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/notes', function (req, res) {
    console.log ('get request sent for notes.html');
    //send created file to html
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

module.exports = router;