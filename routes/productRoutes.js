const express = require("express");
const routes = express.Router();
const {getProduct, getSingleProduct, postData, putData, deleteData} =  require('../Controller/productController.js');




 // outer to get all product
routes.get('/', getProduct);



// router to get single product using id
routes.get('/:id', getSingleProduct);



// router to post data on mongo db
routes.post('/', postData);



// route to update data
routes.put('/:id', putData);



// route to delete data
routes.delete('/:id', deleteData);


module.exports = routes;