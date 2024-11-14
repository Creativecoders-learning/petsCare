const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config();
const app = express();
const port = process.env.PORT | 8000;


// middleware 
app.use(express.json())
app.use(cors({
  origin: ['https://petscarefrontend.netlify.app']
}))


const uri =process.env.DB_URI;
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
    // Send a ping to confirm a successful connection

    // collection
    const database = client.db('petsCare')
    const adoptionCollection = database.collection('adoptionCollection')
    app.locals.adoptionCollection = adoptionCollection;
    const blogCollection = database.collection('blogs');
    const vetsCollection = database.collection('vets');
    const vetsServicesCollection = database.collection('vetServices');
    const usersCollection = database.collection('users');
    const shopProductCollection = database.collection('shop-products');

    // Blogs related api's
    const BlogAPI = require('./Modules/Blog/BlogAPI')(blogCollection);
    app.use('/', BlogAPI)

    // vets relates api's
    const VetAPI = require('./Modules/Vet/VetApi')(vetsCollection);
    app.use('/', VetAPI)

    // vets services related api
    const VetServicesApi = require('./Modules/Vet/VetServicesApi')(vetsServicesCollection);
    app.use('/', VetServicesApi)


    // users related api's
    const usersApi = require('./Modules/Users/UsersAPi')(usersCollection);
    app.use('/', usersApi)

    // shop related api's
    const sellerApi = require('./Modules/Shop/Seller/SellerApi')(shopProductCollection);
    app.use('/', sellerApi)

    

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('This is petsCare server...')
})

app.listen(port, () => {
  console.log(`my port is ${port}`)
})


