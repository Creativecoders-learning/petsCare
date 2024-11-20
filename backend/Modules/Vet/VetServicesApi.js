const express = require("express");
const vetsServiceRouter = express.Router();
const { ObjectId } = require("mongodb");

module.exports = (vetsServicesCollection) => {

  // get all service vets
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

  // add services 
  vetsServiceRouter.post("/vetServices", async (req, res) => {
    const result = await vetsServicesCollection.insertOne(req.body);
    console.log(result);
    res.send(result);
  });

  // service update 
  vetsServiceRouter.patch("/vetServices/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    const query = { _id: new ObjectId(id) };
    const updateDoc = { $set: updateData };

    const result = await vetsServicesCollection.updateOne(query, updateDoc);
    res.send(result);
  });

  // status 
  vetsServiceRouter.patch("/vetServices/:id/status", async (req, res) => {
    const { id } = req.params;
    const { bookingEmail } = req.body;

    const query = { _id: new ObjectId(id), vetEmail: bookingEmail };
    const updateDoc = { $set: { status: "Paid" } };

    const result = await vetsServicesCollection.updateOne(query, updateDoc);
    res.send(result);
  });

  return vetsServiceRouter;
}
