const express = require('express');
const bodyParser = require('body-parser'); //look at body and parse it + attach to body of object
const mongoose = require('mongoose'); //use to connect to mongoDB

const app = express();   // set up express application


mongoose.connect('mongodb://localhost/ninjago');  // connect  mongodb

mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());  //parse JSON data

app.use('/api', require('./routes/api')); // initialize routes


//error handling middleware

app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message}); //.status changes to show 422 error status code in console
});

// listen for requests
app.listen(process.env.port || 4000, function(){  //listen is a method
    console.log('now listening for requests');
});