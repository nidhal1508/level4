const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todo schema 

const TodoSchema= new Schema({
Name :String,
description:String

})





const todo = mongoose.model('todo', TodoSchema);

module.exports = todo;