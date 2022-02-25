const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();
const {
    connect,
    getDB
} = require('./MongoUtil');

const app = express();
app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

async function main() {
    // connect to the mongodb
    // first arg of the MongoClient.connect() is the URI (or your connection string)
    await connect(process.env.MONGO_URI, "tgc16-food")

    // SETUP ROUTES
    app.get('/', async function (req, res) {
        res.send("Show all food records")
    })

    app.get('/food/add', function(req,res){
        res.render('add_food.hbs')
    })
}

main();


app.listen(3000, function () {
    console.log("Server has started")
});