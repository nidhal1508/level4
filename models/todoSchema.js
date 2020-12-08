const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todo schema 

const TodoSchema= new Schema({
    name: {
        type: String,
        required:[true,'Name is required']
    },
     description:{
        type: String,
        required:[true,'description is required']
    }

})





const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;