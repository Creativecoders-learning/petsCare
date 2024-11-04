const express = require('express')
const blogRouter = express.Router()

blogRouter.get('/blogId', (req, res) => {
    res.send('this is single blog router')
})

// Get all blogs
blogRouter.get('/allBlogs', async (req, res) => {
    const blogCollection = req.app.locals.blogCollection;

    try {
        const blogs = await blogCollection.find().toArray();
        res.send('ALl blogs');
    } catch (error) {
        res.status(500).send('Error retrieving blogs');
    }
});

module.exports = blogRouter