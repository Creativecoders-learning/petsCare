const express = require('express')
const blogRouter = express.Router()

blogRouter.get('/blogId',(req,res)=>{
    res.send('this is single blog router')
})
blogRouter.get('/allBlogs',(req,res)=>{
    res.send('this is all blog router')
})

module.exports= blogRouter