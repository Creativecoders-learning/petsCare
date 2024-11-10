const express = require("express");
const { ObjectId } = require("mongodb");

function VetServicesApi(vetsServicesCollection) {
  const vetsServiceRouter = express.Router();
  // get all vets
  vetsServiceRouter.get("/vetServices", async (req, res) => {
    const result = await vetsServicesCollection.find().toArray();
    res.send(result);
  });

  // get single vet
  vetsServiceRouter.get("/vetServices/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await vetsServicesCollection.findOne(query);
    res.send(result);
  });

  //   service deleted
  vetsServiceRouter.delete("/vetServices/:id", async (req, res) => {
    const result = await vetsServicesCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.send(result);
  });

  return vetsServiceRouter;
}

module.exports = VetServicesApi;
