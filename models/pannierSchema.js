const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema = new Schema ({
item: {
    type: String,
    required:[true,'Item is required']
},
price:{
    type: Number,
    required:[true,'Price is required']
},
quantity:{
    type: Number,
    required:[true,'Quantity is required']
},
avaibility:{
    type:Boolean,
    default:true
},
descriptionItem: {
    type: String,
    required:[true,'Desription is required']
}
    

   

});

const Pannier = mongoose.model('pannier', ArticleSchema);

module.exports = Pannier;