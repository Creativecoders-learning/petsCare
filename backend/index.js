const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT | 8000;


// middleware 
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173']
}))


const uri = `${process.env.Mongodb_Uri}`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const database = client.db('petsCare')
    const adoptionCollection = database.collection('adoptionCollection')
    app.locals.adoptionCollection = adoptionCollection;

    const blogCollection = database.collection('blogs');
    const vetsCollection = database.collection('vets');
    const vetsServicesCollection = database.collection('vetServices');
    const usersCollection = database.collection('users');
    const shopProductCollection = database.collection('shop-products');

    // app.use('/adoption', adoptionRouter)
    // app.use('/', shopRouter)

    // // Blogs related api's
    // const blogRouter = require('../backend/Modules/Blog/BlogAPI')(blogCollection);
    // app.use('/', blogRouter)

    // // vets relates api's
    // const VetAPI = require('../backend/Modules/Vet/VetApi')(vetsCollection);
    // app.use('/', VetAPI)

    // // vets services related api
    // const VetServicesApi = require('./Modules/Vet/vetServicesApi')(vetsServicesCollection);
    // app.use('/', VetServicesApi)


    // // users related api's
    // const usersRouter = require('../backend/Modules/Users/UsersAPi')(usersCollection);
    // app.use('/', usersRouter)


    // API's for vercel deploy start from here


    // Blog related api's
    // Add blog
    app.post('/blogs', async (req, res) => {
      const blog = req.body;
      const blogDoc = {
        ...blog
      }
      const result = await blogCollection.insertOne(blogDoc);
      res.send(result)
    })

    // get all blogs
    app.get('/blogs', async (req, res) => {
      const result = await blogCollection.find().toArray()
      res.send(result)
    })

    // get blog by id
    app.get('/blogs/blog-details/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await blogCollection.findOne(query);
      res.send(result)
    })

    // get blogs by email
    app.get('/blogs/by-email/:email', async (req, res) => {
      const email = req.params.email;
      console.log(email);

      const query = { "author.email": email }
      const result = await blogCollection.find(query).toArray();
      res.send(result)
    })

    // update blog
    app.put('/blogs/blog-details/:id', async (req, res) => {
      const blog = req.body;
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updateDoc = {
        $set: {
          ...blog
        }
      }
      const result = await blogCollection.updateOne(query, updateDoc, options);
      res.send(result);
    })

    // delete vet blog by id
    app.delete('/blogs/blog-details/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await blogCollection.deleteOne(query);
      res.send(result);
    })

    // Shop related api's

    // get all shop products
    app.get('/shop-products', async (req, res) => {
      const result = await shopProductCollection.find({}).toArray();
      res.send(result);
    })

    // create products
    app.post('/create-shop-products', async (req, res) => {
      const newProduct = req.body;
      console.log(newProduct)
      const result = await shopProductCollection.insertOne(newProduct);
      res.send(result);
    })

    // delete products
    app.delete('/shop-products/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const result = await shopProductCollection.deleteOne(filter);
      res.send(result);
    })

    // get product by id
    app.get('/shop-products/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await shopProductCollection.findOne(filter);
      res.send(result);
    })

    // update product
    app.patch('/shop-products/:id', async (req, res) => {
      const id = req.params.id;
      const updatedProduct = req.body;
      console.log(updatedProduct, id)
    })


    // users related api's
    // post method to store all users+-
    app.post('/users', async (req, res) => {
      const users = req.body;
      const doc = {
        ...users
      }
      const result = await usersCollection.insertOne(doc);
      res.send(result);
    })

    // get all users
    app.get('/users', async (req, res) => {
      res.send(await usersCollection.find().toArray())
    })

    // get user by email
    app.get('/users/by-email/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.find(query).toArray();
      res.send(result)
    })

    // put method for add role
    app.put('/users/by-email/:email', async (req, res) => {
      const email = req.params.email;
      const { role, lastLogIn } = req.body;
      const options = { upsert: true }
      const filter = { email: email }
      const doc = {
        $set: {
          role: role,
          lastLogIn: lastLogIn
        }
      };
      const result = await usersCollection.updateOne(filter, doc, options);
      res.send(result)

    })

    // delete user
    app.delete('/users/by-email/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email }
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // vet related api's
    // get all vets
    app.get('/vets', async (req, res) => {
      const result = await vetsCollection.find().toArray();
      res.send(result);
    })

    // get single vet
    app.get('/vets/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await vetsCollection.findOne(query);
      res.send(result)
    })

    // get all vets
    app.get("/vetServices", async (req, res) => {
      const result = await vetsServicesCollection.find().toArray();
      res.send(result);
    });

    // get single vet
    app.get("/vetServices/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await vetsServicesCollection.findOne(query);
      res.send(result);
    });

    //   service deleted
    app.delete("/vetServices/:id", async (req, res) => {
      const result = await vetsServicesCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });


    // adoption related api's

    // add adoption 
    app.post('/addAdoption', async (req, res) => {
      const adoptionInfo = req.body;
      const result = await adoptionCollection.insertOne(adoptionInfo)
      res.send(result)
    })

    // get all adoption and get my adoption data
    app.get('/getAdoption', async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query = { email: email }
      }
      const result = await adoptionCollection.find(query).toArray()
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Welcome to petCare website!!')
})

app.listen(port, () => {
  console.log(`my port is ${port}`)
})

