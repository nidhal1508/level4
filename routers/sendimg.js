const express = require('express')
const multer  = require('multer');
const imgModel = require('../models/imageSchema');
const router = express.Router();




router.get('/send/:id', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('router', { items: items });
        }
    });
});
module.exports = router;