const express = require('express');

function UsersAPI(usersCollection) {
      const usersRouter = express.Router();

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
            res.send(await usersCollection.find().toArray())
      })

      return usersRouter;
}

module.exports = UsersAPI;