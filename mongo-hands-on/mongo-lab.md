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