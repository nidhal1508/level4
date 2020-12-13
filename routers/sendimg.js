const express = require('express')
const multer  = require('multer');

const router = express.Router();




router.get('/upload/:theImageName', function(req, res){
    console.log(req.params.theImageName); //returns the imageOfApet.png
    var theName = req.params.theImageName; //imageOfApet.png
    res.sendFile( + "/upload/" + theName); //Sending the user the file
 })