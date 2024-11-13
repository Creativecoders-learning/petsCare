const express = require('express')

function adoptionAPI(adoptionCollection) {
    const adoptionRouter = express.Router();


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

}

function ReceiverAdoption(recieverList) {
    const recieverAdoption = express.Router()
    // get reciever adoption data 
    recieverAdoption.get('/userAdoption', async (req, res) => {
        const email = req.query.email;
        const query = { receiver_email: email }
        const result = await adoptionCollection.find(query).toArray()
        res.send(result)
    })
}


module.exports = { ReceiverAdoption, adoptionAPI }