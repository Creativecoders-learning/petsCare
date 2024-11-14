const express = require('express');
const vetsRouter = express.Router();
const { ObjectId } = require('mongodb');

module.exports = (vetsCollection)=> {

      // get all vets
      vetsRouter.get('/vets', async (req, res) => {
            const result = await vetsCollection.find().toArray();
            res.send(result);
      })

      // get single vet
      vetsRouter.get('/vets/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await vetsCollection.findOne(query);
            res.send(result)
      })
      

      // delete vet
      vetsRouter.delete('/vets/:id', async (req, res) => {
            
      })

      return vetsRouter;
}