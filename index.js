// import express in node: const nom = require('express')
const express = require('express');

// import bodyparser in node: const nom = require('bodyparser')
const bodyParser = require('body-parser');

//import mongoose
const mongoose = require('mongoose');
//connect to mongodb
mongoose.connect('mongodb://localhost/userdb');
mongoose.Promise = global.Promise;

//import router
const routes = require('./routers/api');
const routestodo=require('./routers/apitodo');
const routesemail=require('./routers/email');

//set up express app
// or const app = require('express');
const app = express();

app.use(bodyParser.json());

// initialize routes 
app.use('/api',routes);
//or  app.use('/api',require('./routers/api');

 app.use('/apitodo',routestodo);
 app.use('/apiemail',routesemail);
//error handling middleware
app.use(function (err , req , res , next) {
   res.status(422).send({error: err.message});
})

//listen for request
app.listen(process.env.port || 4000,function() {
   console.log('test working nidhal') ;
})