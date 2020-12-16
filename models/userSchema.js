const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // create geoschema
// const GeoSchema = new Schema({
// type: {
//     type:String,
//     default:"Point"
// },
// cordinnates:{
//     type:[Number],
//     index:"2dsphere"
// }

// });
// create todo schema 


// create user schema & model

const UserSchema = new Schema ({
name: {
    type: String,
    required:[true,'Name is required']
},
prename:{
    type: String,
    required:[true,'Prename is required']
},
email:{
    type: String,
    required:[true,'email is required']
},
rank: String,
avaibility:{
    type:Boolean,
    default:false
},
password:{
    type: String,
    required:[true,'password is required']
},
// geometry: GeoSchema

todos:[{type:Schema.Types.ObjectId,ref:'todo'}],
image:[{type:Schema.Types.ObjectId,ref:'image'}],
cmd:[{type:Schema.Types.ObjectId,ref:'pannier'}]
    

   

});

const User = mongoose.model('user', UserSchema);

module.exports = User;