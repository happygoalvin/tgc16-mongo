# Project company name and year founded and find by the criteria below

1. Use the sample_training database

2. Project the company name and year founded and find by the crieria below:

2a. all companies founded in the year 2006
```
db.companies.find({
    'founded_year': 2006
},{
    'name':1,
    'founded_year':1
}).pretty()
```

2b. All companies founded after the year 2000
```
db.companies.find({
    'founded_year':{
        '$gte': 2000
    }
},{
    'name':1,
    'founded_year':1
}).pretty()
```

2c. All companies founded between the year 1900 and 2010
```
db.companies.find({
    'founded_year':{
        '$gte': 1900,
        '$lte': 2010
    }
},{
    'name':1,
    'founded_year':1
}).pretty()
```

3. Project the company name, the valuation amount and the valuation currency of its IPO, and find by the criteria below

3a. All companies with valuation amount higher than 100 million
```
db.companies.find({
    'ipo.valuation_amount': {
        '$gte': 100000000
    }
},{
    'name':1,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()
```

3b. All companies with valuation amount higher than 100 million and with the currency being 'USD'
```
db.companies.find({
    'ipo.valuation_amount': {
        '$gte': 100000000
    },
    'ipo.valuation_currency_code':"USD"
},{
    'name':1,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()
```

# Use the inspections collections from the sample_training database for the questions below

1. Find all businesses which has violations issued
```

```

2. Find all businesses which has violations issued
```

```

3. 
