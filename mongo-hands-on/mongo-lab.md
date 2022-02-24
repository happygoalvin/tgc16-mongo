# USE THE sample_restaurants DATABASE FOR THE QUESTIONS BELOW

1a. Find all restaurants that specialize in hamburgers cuisine 
```
db.restaurants.find({
    'cuisine':"Hamburgers"
},{
    'name':1,
    'cuisine':1
}).pretty()
```

1b. Find all restaurants that specialize in American cuisine and are in the Bronx borough.
```
db.restaurants.find({
    'cuisine':"Hamburgers",
    'borough':"Bronx"
},{
    'name':1,
    'cuisine':1,
    'borough':1
}).pretty()
```

1c. Find all restaurants that are located at the street "Stillwell Avenue"
```
db.restaurants.find({
    'address.street': "Stillwell Avenue"
},{
    'name':1,
    'address.street':1
}).pretty()
```


# USE THE sample_mflix DATABASE FOR THE QUESTIONS BELOW

From the movies collection
2a. Count how many movies there are
```
db.movies.find().count()
```
2b. Count how many movies there are released before the year 2000
```
db.movies.find({
    'year':{
        '$lte':2000
    }
}).count()
```
2c. Show the first ten titles of movies produced in the USA
```
db.movies.find({
    'countries':{
        '$in': ['USA']
    }
}).pretty().limit(10);
```

2d. Show the first ten titles of movies not produced in the USA
```
db.movies.find({
    'countries':{
        '$nin':["USA"]
    }
},{
    'title':1,
    'countries':1
}).pretty().limit(10)
```
2e. Show movies that have at least 3 wins in the awards object
```
db.movies.find({
    'awards.wins': {
        '$gte':3 
    }
},{
    'title':1,
    'awards.wins':1
}).pretty()
```
2f. Show movies that have at least 3 nominations in the awards object
```
db.movies.find({
    'awards.nominations':{
        '$gte':3
    }
},{
    'title':1,
    'awards.nominations':1
}).pretty()
```
2g. Show movies that cast Tom Cruise
```
db.movies.find({
    'cast': "Tom Cruise"
},{
    'title':1,
    'cast':1
}).pretty()
```
2h. Show movies that are directed by Charles Chaplin
```
db.movies.find({
    'directors': "Charles Chaplin"
},{
    'title':1,
    'directors':1
}).pretty()
```

USE THE sample_weatherdata DATABASE FOR THE QUESTIONS BELOW

3a. Count how many records there are of wind speed with rate higher than 5
```
db.data.find({
    'wind.speed.rate':{
        '$gte':5
    }
}).count()
```
3b. Count how many records there are of wind speed with rate higher than 5 but is not 999.9
```
db.data.find({
    'wind.speed.rate':{
        '$gte':5,
        '$ne':999.9
    }
}).count()
```

# USE THE sample_supplies DATABASE FOR THE QUESTIONS BELOW

4a. Count how many sales includes laptop
```
db.sales.find({
    'items.name':"laptop"
}).count()
```
4b. Count how many sales includes laptop and is made at Denver
```
db.sales.find({
    'items.name':"laptop",
    'storeLocation'':"Denver"
}).count()
```
4c. Show the sales that are made at Denver OR Seattle.
```
db.sales.find({
    '$or':[
        {
        'storeLocation':"Denver"
        },
        {
        'storeLocation':"Seattle"
        }
    ]
},{
    'storeLocation':1
}).pretty()
```
4d. Show the store location where the user with the email address "beecho@wic.be" has purchased at
```
db.sales.find({
    'customer.email': "beecho@wic.be"
},{
    'storeLocation':1
}).pretty()
```
4e. Show the store location of all sales where coupon is used and the customer's satisfaction is 4 or above
```
db.sales.find({
    'couponUsed':true,
    'customer.satisfaction': {
        '$gte': 4
    }
},{
    'storeLocation':1
}).pretty()
```
4f. Show the store location and items sold for sales where more than 4 laptops are sold
```
db.sales.find({
    'items.name':"laptop",
    'items.quantity':{
        '$gte':4
    }
},{
    'storeLocation':1,
    'items':1
}).pretty()
```

# `Create a Database`

HANDS ON
Create a new mongodb database with the name fake_school
Create a new collection name students
Add to the students collection the following documents:

Name: Jane Doe
Age: 13
Subjects: Defense Against the Dark Arts, Charms, History of Magic
Date Enrolled: 13th May 2016

Name: James Verses
Age: 14
Subjects: Transfiguration, Alchemy
Date Enrolled: 15th June 2015

Name: Jonathan Goh
Age: 12
Subjects: Divination, Study of Ancient Runes
Date Enrolled: 16th April 2017

```
use fake_school

db.students.insertMany([
    {
        'Name': 'Jane Doe',
        'Age': 13,
        'Subjects': '[Defense Against the Dark Arts, Charms, History of Magic'],
        'Date Enrolled': ISODate('13-05-2016')
    },
    {
        'Name': 'James Verses',
        'Age': 14,
        'Subjects': ['Transfiguration, Alchemy'],
        'Date Enrolled': ISODate('15-06-2015')
    },
    {
        'Name': 'Jonathan Goh',
        'Age': 12,
        'Subjects': ['Divination, Study of Ancient Runes'],
        'Date Enrolled': ISODate('16-04-2017')
    }
])

{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6217319a320b9e43974ea830"),
                ObjectId("6217319a320b9e43974ea831"),
                ObjectId("6217319a320b9e43974ea832")
        ]
}
```


# Hands on for Update documents
Increase the age of all the students by 1
```
db.students.updateMany({},
    {$inc: {
        'Age': +1
    }
})
```
Change the date enrolled of Jonathan Goh to 2018 13th May
```
db.students.updateOne({
    '_id':ObjectId("6217319a320b9e43974ea832")
},{
    $set:{
        'Date Enrolled':'2018 13th May'
    }
})
```
Change the age of James Verses to 13
```
db.students.updateOne({
    'Name':'James Verses'
},{
    $set:{
        'Age':13
    }
})
```
Change the student with the name of "Jane Doe" to "Jane Doe Jr" and her age to 11.
```
db.students.updateOne({
    'Name':'Jane Doe Jr'
},{
    $set:{
        'Name':'Jane Doe Jr',
        'Age':11
    }
})
```
