const mongoose = require("mongoose");


const Product = mongoose.Schema({
    name :{
        type: String,
        required : [true, 'enter product name'],
    },
    quantity : {
        type: Number,
        required: [true, "enter quantity"]
    },
    price : {
        type : Number,
        required: [true, "enter price"]
    },
    Image: {
        type: String,
        required: false
    }
 },
 {
    TimeStamp: true
 }
);

const ProductModule = mongoose.model("Product" , Product);


module.exports = ProductModule;