const express = require('express')
const adoptionRouter = express.Router();


adoptionRouter.get('/getAdoption',async(req,res)=>{
    const adoptionCollection = req.app.locals.adoptionCollection;
    const result = await adoptionCollection.find().toArray()
     res.send(result)
})


module.exports=adoptionRouter