const express = require('express');
const router = express.Router();
const Pannier = require('../models/PannierSchema');

// get a list of users from database
router.get('/panniers',async (req, res, next) =>{
   await Pannier.find({}).then(function(pannier) {
       res.send(pannier);
    });
    
});
// get a  users from database by id
router.get('/panniers/:id',async (req, res, next) => {

    await Pannier.findOne({_id:req.params.id}).populate("cmd") // key to populate
     .then(pannier => {
        res.json(pannier); 
     });
    });
  
    


// add a new users to the database
router.post('/panniers',async (req,res, next) => {
    await Pannier.create(req.body).then(function (pannier) {
        res.send(pannier) ;
    
    }).catch(next);
});

// update a users in database
router.put('/panniers/:id',async (req,res, next) =>{
    await Pannier.findByIdAndUpdate({_id:req.params.id}, req.body).then(async () =>{
        await Pannier.findOne({_id:req.params.id}).then(function (pannier) {
        res.send(pannier);
    }); 
    });  
});

// delete a users from the database
router.delete('/panniers/:id', async (req,res, next) =>{
    await Pannier.findByIdAndRemove({_id:req.params.id}).then(function (pannier) {
        res.send(pannier);
        
    });  
});



     
//export router 
module.exports = router ;