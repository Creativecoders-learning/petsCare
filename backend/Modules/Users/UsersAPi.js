const express = require('express');
const usersRouter = express.Router();

module.exports = (usersCollection) => {

      // post method to store all users+-
      usersRouter.post('/users', async (req, res) => {
            const users = req.body;
            const doc = {
                  ...users
            }
            const result = await usersCollection.insertOne(doc);
            res.send(result);
      })

      // get all users
      usersRouter.get('/users', async (req, res) => {
            const result = await usersCollection.find({}).toArray()
            res.send(result)
      })

      // get user by email
      usersRouter.get('/users/by-email/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const result = await usersCollection.findOne(query);
            res.send(result)
      })

      // put method for add role
      usersRouter.put('/users/by-email/:email', async (req, res) => {
            const email = req.params.email;
            const updateUserInfo = req.body;
            console.log(updateUserInfo);

            const options = { upsert: true }
            const filter = { email: email }
            const doc = {
                  $set: {
                        ...updateUserInfo
                  }
            };
            const result = await usersCollection.updateOne(filter, doc, options);
            res.send(result)

      })

      // delete user
      usersRouter.delete('/users/by-email/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const result = await usersCollection.deleteOne(query);
            res.send(result);
      })

      return usersRouter;
}