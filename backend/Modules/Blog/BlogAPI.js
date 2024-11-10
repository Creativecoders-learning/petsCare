const express = require('express');
const { ObjectId } = require('mongodb');

function BlogAPI(blogCollection) {
    const blogRouter = express.Router();

    // get all blogs
    blogRouter.get('/blogs', async (req, res) => {
        const result = await blogCollection.find().toArray()
        res.send(result)
    })

    // get blog by id
    blogRouter.get('/blogs/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await blogCollection.findOne(query);
        res.send(result)
    })

    // get blogs by email
    blogRouter.get('/blogs/by-email/:email', async (req, res) => {
        const email = req.params.email;
        const query = { email: email }
        const result = await blogCollection.find(query).toArray();
        res.send(result)
    })

    

    return blogRouter;
}

module.exports = BlogAPI;
