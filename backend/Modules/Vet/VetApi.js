const express = require('express');
const { ObjectId } = require('mongodb');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

function VetAPI(vetsCollection) {
      const vetsRouter = express.Router();

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
      

 // Payment method section
 vetsRouter.post('/create-payment-intent', async (req, res) => {
      const { price } = req.body;

      // Validate price
      if (!price || isNaN(price) || price <= 0) {
          return res.status(400).send({ error: "Invalid or missing price" });
      }

      const amount = parseInt(price * 100); // Convert to cents
      console.log("Converted amount in cents:", amount);

      try {
          const paymentIntent = await stripe.paymentIntents.create({
              amount: amount,
              currency: "usd",
              payment_method_types: ['card'],
          });

          res.send({
              clientSecret: paymentIntent.client_secret,
          });
      } catch (error) {
          console.error("Error creating payment intent:", error);
          res.status(500).send({ error: "Failed to create payment intent" });
      }
  });

    


      return vetsRouter;
}

module.exports = VetAPI;