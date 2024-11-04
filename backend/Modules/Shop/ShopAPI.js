const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send('our petCare website backend is running')
})

 module.exports= router

 