const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


// middleware 
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://petscarefrontend.netlify.app"
  ]
}))


const uri = process.env.DB_URI;
console.log(uri)
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
    const receiver = database.collection('receiver')
    const adoptionCollection = database.collection('adoptionCollection')
    const blogCollection = database.collection('blogs');
    const vetsCollection = database.collection('vets');
    const vetsServicesCollection = database.collection('vetServices');
    const usersCollection = database.collection('users');
    const shopProductCollection = database.collection('shop-products');
    const ordersCollection = database.collection('orders');


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

    // adoption related api's
    const adoptionApi = require('./Modules/Adoption/AdoptionAPI')(receiver, adoptionCollection);
    app.use('/', adoptionApi);

    // payment related api's
    const SSLCommerzApi = require('./Modules/Payment/SSLCommerz')(ordersCollection);
    app.use('/', SSLCommerzApi)


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


