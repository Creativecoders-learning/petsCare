const express = require('express');
const { ObjectId } = require('mongodb');

module.exports = (receiver,adoptionCollection) =>{
    const adoptionRouter = express.Router();
    console.log(receiver)
    // add adoption 
    adoptionRouter.post('/addAdoption', async (req, res) => {
        const adoptionInfo = req.body;
        const result = await adoptionCollection.insertOne(adoptionInfo)
        res.send(result)
    })

    
    // get all adoption and get my adoption data
    adoptionRouter.get('/getAdoption', async (req, res) => {
        const email = req.query.email;
        const query = {};
        if (email) {
            query = { email: email }
        }
        const result = await adoptionCollection.find(query).toArray()
        res.send(result)
    })

    // update admin response status 
    adoptionRouter.patch('/updatedAdminResponse',async(req,res)=>{
        const id = req.query.id;
        const query = {_id:new ObjectId(id)}
        const adoption = req.body;
        const option = {upsert: true}
        const updateData = {
            $set: {
                admin_response: adoption.status
            }
        }
        const result = await adoptionCollection.updateOne(query, updateData,option)
        res.send(result)
    })
    

    // get all receiver adoption for admin and receiver
    adoptionRouter.get('/getReceiver', async (req, res) => {
        const email= req.query.email
        let query ={}

        if(email){
            query = {receiver_email: email}

        }
        const result = await receiver.find(query).toArray()
        res.send(result)
    })
    
    // delete user adoption data by admin
    adoptionRouter.delete('/delete/:id', async (req, res) => {
        try {
            const id = req.params.id;
            console.log('ID received:', id);
    
            if (!ObjectId.isValid(id)) {
                console.log('Invalid ID format');
                return res.status(400).send({ error: 'Invalid ObjectId' });
            }
    
            const query = { _id: new ObjectId(id) };
    
            const result = await receiver.deleteOne(query);
            res.send(result);
        } catch (error) {
            console.error('Error in DELETE route:', error);
            res.status(500).send({ error: 'Server error' });
        }
    });
    




    return adoptionRouter;

}



