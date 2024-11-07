const express = require('express');
const { ObjectId } = require('mongodb');

function BlogAPI(blogCollection) {
    const blogRouter = express.Router();

    // Add blog
    blogRouter.post('/blogs', async (req, res) => {
        const blog = req.body;
        const blogDoc = {
            $set: {
                ...blog
            }
        }
        const result = await blogCollection.insertOne(blogDoc);
        res.send(result)
    })

    // get all blogs
    blogRouter.get('/blogs', async (req, res) => {
        const result = await blogCollection.find().toArray()
        res.send(result)
    })

    // get blog by id
    blogRouter.get('/blogs/blog-details/:id', async (req, res) => {
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

    // delete vet blog by id
    blogRouter.delete('/blogs/blog-details/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await blogCollection.deleteOne(query);
        res.send(result);
    })

    return blogRouter;
}

module.exports = BlogAPI;