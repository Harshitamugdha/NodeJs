const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ecomm1");

const app = express();

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const Product = mongoose.model("products", productSchema);

app.get('/products', async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 2;

    const data = await Product.find()
    .skip((page-1) * limit)
    .limit(limit);

    res.send(data);
});

app.listen(4000, ()=> {
    console.log('Server is running');
});