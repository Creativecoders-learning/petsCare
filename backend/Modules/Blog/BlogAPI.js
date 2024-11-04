const express = require('express');

function BlogAPI(blogCollection) {
    const blogRouter = express.Router();

    blogRouter.get('/blogs', async (req, res) => {
        const result = await blogCollection.find().toArray()
        res.send(result)
    })

    return blogRouter;
}

module.exports = BlogAPI;