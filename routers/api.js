// import express in node: const nom = require('express')
const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const cron = require('node-cron');

// get a list of users from database
router.get('/users', async (req, res, next) => {
    cron.schedule('*/2 * * * * *', async () => {
        console.log('running a task every minute at the 5th second');
        await User.find({}).then(function (user) {
            res.send(user);
        });
    });
});
// get a  users from database by id
router.get('/users/:id', async (req, res, next) => {

    await User.findOne({ _id: req.params.id }).populate("todos") // key to populate
        .then(user => {
            res.json(user);
        });
});




// add a new users to the database
router.post('/users', async (req, res, next) => {
    await User.create(req.body).then(function (user) {
        res.send(user);

    }).catch(next);
});

// update a users in database
router.put('/users/:id', async (req, res, next) => {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(async () => {
        await User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        });
    });
});

// delete a users from the database
router.delete('/users/:id', async (req, res, next) => {
    await User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);

    });
});


// delete todo from user
router.post('/updateTodoId/:idUser/:idTodo', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $push: { todos: req.params.idTodo } });
    const user = await User.findById(req.params.idUser);
    res.json(user);
});
// update a todos from users
router.post('/deleteTodoId/:idUser/:idTodo', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $pull: { todos: req.params.idTodo } });
    const user = await User.findById(req.params.idUser);
    res.json(user);
});

// insert image to the user
router.post('/insertImageId/:idUser/:idImage', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $push: { image: req.params.idImage } });
    const user = await User.findById(req.params.idUser);
    res.send(user);
});

// update a cmd from users
router.post('/cmd/:idUser/:idArticle', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $push: { Cmd: req.params.idArticle } });
    const user = await User.findById(req.params.idUser);
    res.json(user);
});

// delete cmd from user chaque 2 seconde
router.post('/cmd/:idUser', async (req, res) => {
    cron.schedule('*/2 * * * * *', async () => {
        console.log('running a task every 2 seconde');
        const updatedUser = await User.findByIdAndUpdate(req.params.idUser, { $pull: { todos: req.params.idTodo } });
        const user = await User.findById(req.params.idUser);
        res.json(user);
    });
});
//get cmd from user

router.get('/userscmd/:id', async (req, res, next) => {
    cron.schedule('*/2 * * * * *', async () => {
        console.log('running a task every 2 seconde');

        User.findOne({ _id: req.params.id }).populate("cmd") // key to populate
            .then(user => {
                console.log(user.cmd);
                res.json(user.cmd);
                
            });
    });
});



// User.findOne({_id: userId })
//    .populate("todos") // key to populate
//    .then(user => {
//       res.json(user); 
//    });
//export router 
module.exports = router;