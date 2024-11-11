const express = require('express');
const { ObjectId } = require('mongodb');

const sellerApi = (shopProductCollection) => {
    const sellerApiRouter = express.Router();

    // get all shop products
    sellerApiRouter.get('/shop-products', async (req, res) => {
        const result = await shopProductCollection.find().toArray();
        res.send(result);
    })

    // create products
    sellerApiRouter.post('/shop-products', async (req, res) => {
        const newProduct = req.body;
        console.log(newProduct)
        const result = await shopProductCollection.insertOne(newProduct);
        res.send(result);
    })

    // delete products
    sellerApiRouter.delete('/shop-products/:id', async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const filter = { _id: new ObjectId(id) };
        const result = await shopProductCollection.deleteOne(filter);
        res.send(result);
    })

    // get product by id
    sellerApiRouter.get('/shop-products/:id', async(req, res)=> {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await shopProductCollection.findOne(filter);
        res.send(result);
    })

    // update product
    sellerApiRouter.patch('/shop-products/:id', async (req, res) => {
        const id = req.params.id;
        const updatedProduct = req.body;
        console.log(updatedProduct, id)
    })



    return sellerApiRouter;
}

module.exports = sellerApi;