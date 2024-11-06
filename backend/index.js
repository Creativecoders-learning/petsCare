const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const app = express()
const shopRouter = require('../backend/Modules/Shop/ShopAPI')
const blogRouter = require('../backend/Modules/Blog/BlogAPI')
const adoptionRouter = require('../backend/Modules/Adoption/AdoptionAPI')
const port = process.env.port || 8000


// middleware 
app.use(express.json())
app.use(cors({
  origin:['http://localhost:5173']
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

    app.use('/adoption',adoptionRouter)
    app.use('/',shopRouter)

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`my port is ${port}`)
})

