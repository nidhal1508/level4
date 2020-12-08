const express = require('express');
const router = express.Router();
const Todo = require('../models/todoSchema');

// get a list of users from database
router.get('/all',async (req, res, next)=> {
    await Todo.find({}).then(function(todo) {
        res.send(todo);
    });
    
});
// get a  users from database by id
router.get('/all/:id',async (req, res, next) =>{

   await Todo.findOne({_id:req.params.id}).then(function (Todo) {
        res.send(Todo);
    });
  
    
});

// add a new users to the database
router.post('/all',async (req,res, next) => {
  await Todo.create(req.body).then(function (todo) {
        res.send(todo) ;
    
    }).catch(next);
});

//update a users in database
router.put('/all/:id',async (req,res, next)=> {
    await Todo.findByIdAndUpdate({_id:req.params.id}, req.body).then(async() =>{
       await Todo.findOne({_id:req.params.id}).then(function (todo) {
        res.send(todo);
    }); 
    });  
});

// delete a users from the database
router.delete('/all/:id', async (req,res, next) =>{
    await Todo.findByIdAndRemove({_id:req.params.id}).then(function (todo) {
        res.send(todo);
        
    });  
});

module.exports = Todo;