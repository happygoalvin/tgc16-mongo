const express = require('express');
const {
    type
} = require('express/lib/response');
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

// for forms to work
app.use(express.urlencoded({
    extended:false
}));


async function main() {
    // connect to the mongodb
    // first arg of the MongoClient.connect() is the URI (or your connection string)
    await connect(process.env.MONGO_URI, "animal_shelter")

    // SETUP ROUTES
    app.get('/', async function (req, res) {
        const db = getDB();
        let allAnimals = await db.collection('animals_2').find({}).toArray();
        res.render("all-animals.hbs", {
            'animalRecord': allAnimals
        })
    })

    app.get('/animals/add', async function (req, res) {
        const db = getDB();
        let allTypes = await db.collection('type').find({}).toArray();
        res.render('add-animals.hbs', {
            'type': allTypes
        })
    })

    app.post('/animals/add', async function (req, res) {
        let {
            animalName,
            age,
            type,
            gender,
            notes
        } = req.body;

        let db = getDB();
        await db.collection('animals_2').insertOne({
            'name': animalName,
            'age': age,
            'type': type,
            'gender': gender,
            'notes': notes
        });
        res.redirect('/');
    })
}

main();


app.listen(3000, function () {
    console.log("Server has started")
});