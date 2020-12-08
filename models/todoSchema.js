const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todo schema 

const TodoSchema= new Schema({
Name :String,
description:String

})





const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;