const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();   // set up express application


mongoose.connect('mongodb://localhost/ninjago');  // connect  mongodb

mongoose.Promise = global.Promise;

app.use(bodyParser.json());  //parse JSON data

app.use('/api', require('./routes/api')); // initialize routes


app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});