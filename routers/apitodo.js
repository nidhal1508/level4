const express = require('express');
const router = express.Router();
const Todo = require('../models/todoSchema');

// get a list of users from database
router.get('/all',function (req, res, next) {
    Todo.find({}).then(function(todo) {
        res.send(todo);
    });
    
});
// get a  users from database by id
router.get('/all/:id',function (req, res, next) {

    Todo.findOne({_id:req.params.id}).then(function (Todo) {
        res.send(Todo);
    });
  
    
});

// add a new users to the database
router.post('/all',function (req,res, next) {
    Todo.create(req.body).then(function (todo) {
        res.send(todo) ;
    
    }).catch(next);
});

//update a users in database
router.put('/all/:id',function (req,res, next) {
    Todo.findByIdAndUpdate({_id:req.params.id}, req.body).then(function () {
        Todo.findOne({_id:req.params.id}).then(function (todo) {
        res.send(todo);
    }); 
    });  
});

// delete a users from the database
router.delete('/all/:id', function (req,res, next) {
    Todo.findByIdAndRemove({_id:req.params.id}).then(function (todo) {
        res.send(todo);
        
    });  
});

module.exports = Todo;