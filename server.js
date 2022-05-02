// import the express module
const express = require('express');
// to give each note a uniqe id we can use the uuid module!
const uuid = require('uuid');

const fs = require('fs');

// we need to import our api routes!
// we can link to the dir that holds them
const apiRoutes = require('./routes/apiRoutes');

// import html routes
const htmlRoutes = require('./routes/htmlRoutes');


// we put express function in a variable so we can chain methods to it!
const app = express();
//variable port(heroku sets to 80 automatically)
const PORT = process.env.PORT || 3001;

// we create expressions for middleware
// this one tells us we may receive arrays within arrays
app.use(express.urlencoded({extended: true}));
// this one will parse json data and put it in req.body object
app.use(express.json());
// will use our front end files in the public folder
app.use(express.static('public'));



// we use our api routes
app.use('/api', apiRoutes);

// and our html routes
app.use('/', htmlRoutes);

// this is a 'wildcard' route, any route that hasnt been defined
// will be redirected to the locatio specified
// remember: wildcard routes should come last!
app.get('*', function(req, res) {
    console.log ('get request sent for index.html')
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});


// this will start our express erver at the specified port
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`)
    
});