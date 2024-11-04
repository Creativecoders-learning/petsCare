const express = require('express')
const adoptionRouter = express.Router();


adoptionRouter.get('/getAdoption',async(req,res)=>{
     res.send('all adoption data')
})

module.exports=adoptionRouter