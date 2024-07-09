const express = require("express");
const mongoose= require("mongoose");
const routes = require("./routes/productRoutes");


const app = express();

// usnig middle ware
app.use(express.json());


//using route to manage api
app.use('/api/products' , routes);


// server running
app.get('/', (req,res) => {
    console.log("server response");
    res.send("Server running");
});




// use to extablish server connection between mongo db
mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("database connected done");
    app.listen(3000, (req,res) => {
        console.log("server running");
    });
}).catch(() => {
    console.log("error connecting database");
});

