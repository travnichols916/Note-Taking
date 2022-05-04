// import the express module
const express = require('express');
// to give each note a uniqe id we can use the uuid module!
const uuid = require('uuid');
const fs = require('fs');

//Import api routes 
const apiRoutes = require('./routes/api');
// import html routes
const htmlRoutes = require('./routes/html');

const app = express();
//variable port(heroku sets to 80 automatically)
const PORT = process.env.PORT || 3001;

// we create expressions for middleware to allow receiving of arrays
app.use(express.urlencoded({extended: true}));
// this one will parse json data
app.use(express.json());
app.use(express.static('public'));
//sending /api routes first
app.use('/api', apiRoutes);
// /api/notes
// and our html routes
app.use('/', htmlRoutes);

//undefined routes should be last
// app.get('*', function(req, res) {
//     console.log ('get request sent for index.html')
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// });


// listen to server at dynamic port
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`)
    
});