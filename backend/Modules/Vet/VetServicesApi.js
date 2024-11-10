const express = require('express');
// const { ObjectId } = require('mongodb');

function VetServicesApi(vetsServicesCollection){
    const vetsServiceRouter = express.Router();
    // get all vets
    vetsServiceRouter.get('/vetsServices', async (req, res) => {
        const result = await vetsServicesCollection.find().toArray();
        res.send(result);
  })

  return vetsServiceRouter;
}

module.exports = VetServicesApi;