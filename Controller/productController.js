const Product = require('../models/productModel.js');



 // use to retrieve full data and it is controller
const getProduct = async (req,res) => {
    try {
        const product  = await Product.find({});
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// use to retrieve only require data {controller}
const getSingleProduct  = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// use to post data on mongo db {controller}
const postData = async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// use to update data {controller}
const putData = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id);
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// use to delete data {controller}
const deleteData = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json("product deleted");

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getProduct, getSingleProduct, postData, putData, deleteData};