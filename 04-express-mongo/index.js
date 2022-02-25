const express = require('express');
const hbs = require('hbs');
const { MongoClient } = require('mongodb');
const wax = require('wax-on');
require('dotenv').config();

const app = express();
app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// connect to the mongodb
async function main() {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true
    }); 
    
    // Setup routes
    app.get('/', async function(req,res){
        const db = client.db('sample_airbnb') // select the sample sample_airbnb database
    const data = await db.collection('listingsAndReviews') // select the listingsAndReviews collection  
                       .find({}) // find all documents
                       .toArray(); 
    res.send(data);
    })
}
main();


// Node Monitor 
app.listen(3000, function() {
    console.log("Server has started")
})

