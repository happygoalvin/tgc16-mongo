Show all the databases in your server
```
show databases;
```
To set the active database `sample_airbnb`
```
use sample_airbnb;
```

To know what is the current database
```
db
```

To see all the collections in the current active database:
```
show collections
```
# Find documents
Generic syntax:
```
db.<name of collection>.find()
```
Prettify the result:
```
db.listingsAndReviews.find().pretty();
```
# Limit
Limit to a certain number of results
```
db.listingsAndReviews.find().pretty().limit(5);
```

# Projection
Choose which fields to display. We only want to see the name of the
listing and the number of beds.
```
db.listingsAndReviews.find({},{
    'name':1,
    'beds':1,
})
```
Note: first argument is the criteria to filter by
and if it is an empty object it means we want all documents
```
# Filter by a criteria
db.listingsAndReviews.find({
    'beds':2,
},{
    'name':1,
    'beds':1
})
```
## Search by multiple criteria (AND)
Find all the listings with 2 bedrooms and 2 beds.
```
db.listingsAndReviews.find({
    'beds':2,
    'bedrooms':2
},{
    'name':1,
    'beds':1,
    'bedrooms':1,
    'house_rules':1
}).pretty().limit(5);
```
# search by keys of nested objects
```
db.listingsAndReviews.find({
    'address.country':'Brazil'
},{
    'name':1,
    'address.country':'Brazil'
}).pretty()
```
# Filter by inequality
Example: Find all listings that have more than or equal to 3 bedrooms
```
db.listingsAndReviews.find({
    'bedrooms':{
        '$gte':3
    }
},
    {
        'name':1
        'bedrooms':1
    }
).pretty().limit(5)
```

Search for all listings that have beetwen 3 and 6 bedrooms.

```
db.listingsAndReviews.find({
    'bedrooms':{
        '$gte':3,
        '$lte':6
    }
},
{
    'bedrooms':1,
    'name':1
}).pretty()
```

example: find all listings in Brazil that has less than 4 bedrooms
```
db.listingsAndReviews.find({
    'address.country':'Brazil',
    'bedrooms': {
        '$lte':4
    }
},{
    'address.country':1,
    'name':1,
    'bedrooms':1,
    'beds':1
}).pretty()
```

## Find by elements in array
eg. find all listings of oven in the amenities array
```
db.listingsAndReviews.find({
    'amenities':'Oven',
},{
    'name':1,
    'amenities':1
}).pretty()
```

eg. Find all listings that have oven, OR micowave OR stove
```
db.listingsAndReviews.find({
    'amenities':{
        '$in':['Oven','Microwave', 'Stove']
    }
},{
    'name':1,
    'amenities':1
}).pretty()
```

eg. $all will only match if everything in aray is in amenities
```
db.listingsAndReviews.find({
    'amenities':{
        '$all':['Oven','Microwave','Stove', 'Dishes and silverware']
    }
},{
    'name':1,
    'amenities':1
}).pretty()
```

# Search by object ID
Find the document in the movies collection that has the following
Object ID: 573a1390f29313caabcd4135
```
use sample_mflix;

db.movies.find({
    '_id': ObjectId('573a1390f29313caabcd4135')
}).pretty()
```

# Logical Operators
Back to the 'sample_airbnb' database.
eg. Find all listings in Brazil or Canada:
```
db.listingsAndReviews.find({
    '$or':[
        {
            'address.country':'Brazil'
        },
        {
            'address.country':'Canada'
        }
    ]
},{
    'name':1,
    'address.country':1
}).pretty()
```

Find all listings in Brazil or Canada. The listings from Brazil must have
more than 3 bedrooms.
```
db.listingsAndReviews.find({
    '$or':[
        {
            'address.country':"Brazil",
            'bedrooms':{
                '$gt': 3
            }
        },
        {
            'address.country':'Canada'
        }
    ]
},{
    'name':1,
    'address.country':1,
    'bedrooms':1
}).pretty()
```