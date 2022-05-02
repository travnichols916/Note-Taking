// use express router function
const router = require('express').Router();


// route to notes.js
router.use(require('./notes.js'));

module.exports = router;