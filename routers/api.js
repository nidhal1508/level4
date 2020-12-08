// import express in node: const nom = require('express')
const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

// get a list of users from database
router.get('/users',async (req, res, next) =>{
   await User.find({}).then(function(user) {
       res.send(user);
    });
    
});
// get a  users from database by id
router.get('/users/:id',async (req, res, next) => {

    await User.findOne({_id:req.params.id}).populate("todos") // key to populate
     .then(user => {
        res.json(user); 
     });
    });
  
    


// add a new users to the database
router.post('/users',async (req,res, next) => {
    await User.create(req.body).then(function (user) {
        res.send(user) ;
    
    }).catch(next);
});

// update a users in database
router.put('/users/:id',async (req,res, next) =>{
    await User.findByIdAndUpdate({_id:req.params.id}, req.body).then(async () =>{
        await User.findOne({_id:req.params.id}).then(function (user) {
        res.send(user);
    }); 
    });  
});

// delete a users from the database
router.delete('/users/:id', async (req,res, next) =>{
    await User.findByIdAndRemove({_id:req.params.id}).then(function (user) {
        res.send(user);
        
    });  
});


// delete todo from user
router.post('/deleteTodoId/:idUser/:idTodo', async (req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $pull : {todos:  req.params.idTodo}});
    const user = await User.findById(req.params.idUser);
    res.json(user);
});
// update a todos from users
router.post('/deleteTodoId/:idUser/:idTodo', async (req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $push : {todos:  req.params.idTodo}});
    const user = await User.findById(req.params.idUser);
    res.json(user);
});

// User.findOne({_id: userId })
//    .populate("todos") // key to populate
//    .then(user => {
//       res.json(user); 
//    });
//export router 
module.exports = router;