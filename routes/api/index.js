// use express router function
const router = require('express').Router();

// /
// route to notes.js
router.use(("/notes"), require('./notes.js'));

module.exports = router;
