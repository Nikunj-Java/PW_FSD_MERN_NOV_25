# MongoDB (NoSQL) Command For CLI

## 1. Create Database
```
use pwskills;
```
## 2. Create Collection
```
db.createCollection("students");
```
## 3. Insert Data
- For Data Insertion we use JSON type(Key value Pair)
- 1. InsertOne()
- 2. InsertMany()
    - a. InsertOne()
    ```
    db.name_of_collection.insertOne({JSON Data type});
    ```
    example:
    ```
    db.students.insertOne({name:"Nikunj Soni",age: 25, city:"Mumbai"});
    ```
    OUTPUT:
    ```
    {
        acknowledged: true,
        insertedId: ObjectId('6a105992f6a4f84105f1b3d6')
    }
    ```
    - b. InsertMany()
    ```
    db.name_of_collection.insertMany(
        [
            {JSON Data type-1},
            {JSON Data type-2},
            {JSON Data type-3}
        ]
    );
    ```
    Example:
    ```
    db.students.insertMany(
        [
            {name:"Nilesh Patel",age: 30, city:"Gujarat"},
            {name:"Amit Ameya",age: 43, city:"UP"},
            {name:"Rajeev Mehra",age: 21, city:"Nashik"},
        ]
    );
    ```
    - also You can change the schema at any time
    ```
    db.students.insertMany(
        [
            {
                name: "Amit",
                age: 25
            },
            {
                name: "Rahul",
                age: 30
            }
        ]
    );
    ```
    - also you can change schema 
    ```
     db.students.insertOne({name:"Test",age: 24, city:"Mumbai", email:"test@gmail.com"});
    ```
## 4. Read Data
1. Find All Documents
- Syntax:
```
db.name_of_collection.find();
```
- Example:
```
db.students.find();
```

2. Find Specific Data
- a. Data by age
```
db.students.find({age:25});
```
- b. Data by name

```
db.students.find({name:"Nikunj Soni"});
```

- c. Find by Multiple Conditions
```
db.students.find(
    {
    name:"Nikunj Soni",
    age:25,
    city:"Mumbai"
    }
);
```

## 5. Update Data
- to update a data we have two methods 
    1. updateOne()
    2. updateMany()
1. updateOne()
- it will update only one record
- Example:
```
db.students.updateOne(
    {name:"Nikunj Soni"},
        { 
            $set: 
            { city: "Indore"}
        }
    );
```
2. updateMany()
- it will update many records togather
-- Example:
```
db.students.updateMany(
    {name:"Nikunj Soni"},
        { 
            $set: 
            { age: 10}
        }
    );
```

## 6. Delete Data
- Deleting a Data Can be done in two ways
    1. deleteOne()
    2. deleteMany()
1. deleteOne()
- we can delete one record based on matched condition
- example:
```
db.students.deleteOne({name:"Test"});
```

2. deleteMany()
- we can delete many Documents based on Matching Condition
- example:
```
db.students.deleteMany({age:30});
```
----------------------------------------------------------------------------------------------
# Query Operators

## 1. Comparison Operator

----------------------------------------------------------------------------------------------
|   Operator                                           | Meaning
| ---------------------------------------------------- |------------------------------------ |
|   $eq                                                |Equal                                |
|   $ne                                                |Not Equal                            |
|   $gt                                                | Greater Than                        |
|   $gte                                               | Greater Than equals to              |
|   $lt                                                | Less Than                           |
|   $lte                                               |Less Than Equals to                  |
|   $in                                                | Match Any                           |
----------------------------------------------------------------------------------------------
- Examples
1. Greater Than
```
db.students.find({ age: {$gt:25} })
```

2. Less Than
```
db.students.find({ age: {$lt:25} })
```
3. Greater Than
```
db.students.find({ age: {$gte:25} })
```

4. Less Than
```
db.students.find({ age: {$lte:25} })
```

5. In Operator
```
db.students.find(
    {city: 
        {$in: ["Mumbai","Indore"]
    }
});
```

6. Equals to
```
db.students.find({ age: {$eq:10} })
```

## 2. Logical Operator

----------------------------------------------------------------------------------------------
|   Operator                                           |    Meaning                          |
| ---------------------------------------------------- |------------------------------------ |
|   $and                                               |    AND (Both Condition)             |
|   $or                                                |    OR  (Any 1 Condition)            |
|   $not                                               |    NOT                              |
----------------------------------------------------------------------------------------------

- Example-1:
```
db.students.find({
    $or:[
        {city:"Mumbai"},{age: 25}
    ]
});

```
- Example-2:
```
db.students.find({
    $and:[
        {city:"Mumbai"},{age: 25}
    ]
});

```

- Example-3:
```
db.students.find({
    age:{$not: {$gt: 25}}
});

```
## 3. Projection
- Projection Means Selecting Specific Fields
- Example:
```
db.students.find({},{name:1,_id:0});
```
```
db.students.find({},{name:1,city:1,_id:0});
```
------------------------------------------------------------------------------------------------------------
## 4. Sorting & Limiting
1. Sort Ascending
```
db.students.find().sort({age:1})
db.students.find().sort({city:1})
db.students.find().sort({name:1})
```
2. Sort Descending
```
db.students.find().sort({age:-1})
db.students.find().sort({city-1})
db.students.find().sort({name:-1})
```

3. Limit Record
```
db.students.find().limit(3);
db.students.find().limit(5);
db.students.find().limit(1);
```

4. Skip Record
```
db.students.find().skip(3);
db.students.find().skip(5);
db.students.find().skip(1);
```

## 5. Update Operators
---------------------------------------------------------------------------------------------
|   Operator                                           |    Meaning                         |
| ---------------------------------------------------- |------------------------------------|
|   $set                                               |    Set Value                       |
|   $unset                                             |    Remove Fiels                    |
|   $inc                                               |    Increment                       |
|   $rename                                            |    Rename                          |
|   $push                                              |    Add to Array                    |
|   $pull                                              |    Remove from array               |
---------------------------------------------------------------------------------------------
1. $set
```
db.students.updateOne(
    {name:"Nikunj Soni"},
        { 
            $set: 
            { city: "Indore"}
        }
    );
```

2. $unset
```
db.students.updateOne(
    {name:"Nikunj Soni"},
        { 
            $unset: 
            { city: ""}
        }
    );
```
3. $inc
```
db.students.updateOne(
    {name:"Nikunj Soni"},
        { 
            $inc: 
            { age: 5}
        }
    );
```
4. $rename
```
db.students.updateOne(
    {name:"Nikunj Soni"},
        { 
            $rename: 
            { "age": "Age"}
        }
    );
```

5. $push
- add a new row with skills:
```
db.students.insertOne({name:"Gaurav",age: 35, city:"Mumbai",skills:["Dancing","Writing"]});
```
- now let's add additional skills
```
db.students.updateOne(
    {name:"Gaurav"},
        { 
            $push: 
            { skills: "Coding"}
        }
    );
```
6. $pull
```
db.students.updateOne(
    {name:"Gaurav"},
        { 
            $pull: 
            { skills: "Singing"}
        }
    );
```
------------------------------------------------------------------------------------------------------------
# Embded Documents & Arrays
- Embded Document is like:
```
    "name":"Nikunj Soni",
    "address":{
        "city":"Mumbai",
        "landmark":"Sea Link",
        "state":"Maharashtra",
        "pin":"401234",
    },
    "skills":[
        "JAVA","MongoDB","Angular","DevOps","Docker","Kubernetes","AWS","MERN stack","MEAN stack"
    ]

```
- lets insert this into the database
```
db.students.insertOne({"name":"Nikunj Soni",
    "address":{
        "city":"Mumbai",
        "landmark":"Sea Link",
        "state":"Maharashtra",
        "pin":"401234",
    },
    "skills":[
        "JAVA","MongoDB","Angular","DevOps","Docker","Kubernetes","AWS","MERN stack","MEAN stack"
    ]});
```
## Query Nested Field
```
db.students.find({"address.city":"Mumbai"});
```
- Get Name Only
```
db.students.findOne({"address.city":"Mumbai"},{name:1,_id:0});
```
```
db.students.findOne({"address.pin":"401234"},{name:1,_id:0});
```
```
db.students.find(
    {"address.city":"Mumbai"},
    {"address.city":1,"address.pin":1,_id:0}
);
```
# Index in MongoDB
1. What is an Index?

- An index helps MongoDB find data faster.
- Without an index:

    MongoDB checks every document one by one
    This is called a Collection Scan

- With an index:

    MongoDB directly jumps to matching data
    Faster searching

2. How MongoDB Searches Without Index
- Suppose Collection
```
{
    "name": "Nikunj",
    "age": 36
}
```
- Query:
```
db.students.find({name:"Nikunj Soni"});
```
- Without Index:
    MongoDb Scan All Documents to check and Compare with the name "Nikunj Soni"

3. Create Your First Index

## Create Index on name
```
db.students.createIndex({name:1});
```
- get the indexes:
```
[
  {
    "name": "_id_"
  },
  {
    "name": "name_1"
  }
]
```
- Here '_id' is a default index

4. How it will Work ?
- suppose your document is :
```
[
  { "name": "Amit" },
  { "name": "Rahul" },
  { "name": "Neha" }
]
```
- index structure becomes something like :
```
Amit -> Document Address
Rahul -> Document Address
Neha -> Document Address
```
- use index in realtime
```
db.students.find({name:"Nikunj Soni:});
```
- This time the time of retrival will be faster as compared to all other retival
- you can also create multiple indexes of the attributes which are frequently used in a query

## Single Field Index
```
db.students.createIndex({age:1});
```
```
db.students.createIndex({city:1});
```

## Coumpound Index
```
db.students.createIndex({
    email: 1,
    mobile: -1
    });

```
or
```
db.students.createIndex(
    {"name":1,"address.city":1}
);
```
- How to use?
```
db.students.find({
    email:"Nikunj@gmail.com",
    mobile:"9876543210"
})
```

# Unique Index
- Prevent duplicated values.
- lets create a new collection "users"
```
db.createCollection("users");
```
```
db.users.createIndex(
    {email:1},
    {unique: true}
);
```
- Get the indexes
```
db.users.getIndexes()
```

- OUTPUT:
```
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true }
]
```
- lets try to insert duplicate record 
```
db.users.insertOne({"name":"Nikunj Soni","email":"nikunj@gmail.com"});
```
- now let's try to insert same record again
```
db.users.insertOne({"name":"Nikunj Soni","email":"nikunj@gmail.com"});
```
- Error: 
```
E11000 duplicate key error collection: pwskills.users index: email_1 dup key: { email: "nikunj@gmail.com" }
```

----------------------------------------------------------------------------------------------------------
# Common Stages: $match, $group , $project Expression

- lets create collection
```
db.createCollection("orders");
```
- insert Sample document
```
db.orders.insertMany([
  {
    customer: "Rahul",
    city: "Mumbai",
    product: "Laptop",
    category: "Electronics",
    quantity: 2,
    price: 50000,
    status: "Delivered"
  },
  {
    customer: "Amit",
    city: "Delhi",
    product: "Mobile",
    category: "Electronics",
    quantity: 1,
    price: 30000,
    status: "Pending"
  },
  {
    customer: "Neha",
    city: "Mumbai",
    product: "Shoes",
    category: "Fashion",
    quantity: 3,
    price: 2000,
    status: "Delivered"
  },
  {
    customer: "Priya",
    city: "Pune",
    product: "Watch",
    category: "Fashion",
    quantity: 2,
    price: 5000,
    status: "Delivered"
  },
  {
    customer: "Karan",
    city: "Delhi",
    product: "Tablet",
    category: "Electronics",
    quantity: 1,
    price: 25000,
    status: "Cancelled"
  }
])
```
## What is $match?
- $match filter document
- it is similar to WHERE Cluase in SQL
- Example-1: Match with status
```
db.orders.aggregate([
    {
        $match:{
            status:"Delivered"
        }
    }
]);
```
- Example-2: Match with Status
```
db.orders.aggregate([
    {
        $match:{
            status:"Pending"
        }
    }
]);
```
- Example-3: Match With Category
```
db.orders.aggregate([
    {
        $match:{
            category:"Electronics"
        }
    }
]);
```
- Example-4: Match with Category
```
db.orders.aggregate([
    {
        $match:{
            category:"Fashion"
        }
    }
]);
```
- You can also use Operators inside $match
- Example-5: Match Along With Price
```
db.orders.aggregate([
    {
        $match:{
           price:{
            $gt:10000
           }
        }
    }
]);
```
- Example-6: multiple match
```
db.orders.aggregate([
    {
        $match:{
            category:"Electronics",
            price:{ $gt:10000}
        }
    }
]);
```
- Example-7: multiple match with asceding orders
```
db.orders.aggregate([
    {
        $match:{
            category:"Electronics",
            price:{ $gt:10000}
        }
    },{
        $sort:{
            price:1 
        }
    }
]);
```
## What is $Group?
- it will combine documents into the group
- Mainly used for
    - Totals
    - Average
    - Counting
    - Reports
- lets calculate Total Sales Category-wise

- Example-1
```
db.orders.aggregate([
    {
        $group:{
           _id:"$category",
           totalSales:{
            $sum:"$price"
           }
        }
    }
]);

```
- Output:
```
[
  {
    "_id": "Electronics",
    "totalSales": 105000
  },
  {
    "_id": "Fashion",
    "totalSales": 7000
  }
]
```
- Example-2: based on city
```
db.orders.aggregate([
    {
        $group:{
           _id:"$city",
           totalSales:{
            $sum:"$price"
           }
        }
    }
]);

```
- OUTPUT
```
{
  _id: 'Delhi',
  totalSales: 55000
}
{
  _id: 'Mumbai',
  totalSales: 52000
}
{
  _id: 'Pune',
  totalSales: 5000
}
```

- Example-2: based on city
```
db.orders.aggregate([
    {
        $group:{
           _id:{
            city: "$city",
            category:"$category",
           },
           totalSales:{
            $sum:"$price"
           }
        }
    }
]);

```

## What is Project ?
- it used to :
    - select fiels
    - hide fields
    - rename field
    - Create Calculated Fields
- Example:1 
```
db.orders.aggregate([
    {
        $project:{
            customer:1,
            price:1,
            _id:0
        }
    }
])
```
- OUTPUT:
```
{
  customer: 'Rahul',
  price: 50000
}
```
- Example:2 Rename Fields Using $project
```
db.orders.aggregate([
    {
        $project:{
            customerName:"$customer",
            orderPrice:"$price",
            _id:0
        }
    }
])
```
- OUTPUT:
```
{
  "customerName": "Rahul",
  "orderPrice": 50000
}
```
## Common Operators

| Operator  | Purpose      |
| --------- | ------------ |
| $sum      | Total        |
| $avg      | Average      |
| $multiply | Multiply     |
| $concat   | Join strings |
| $toUpper  | Uppercase    |
| $substr   | Extract text |

- Example: 1 $multiply

```
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      totalAmount: {
        $multiply: [
          "$quantity",
          "$price"
        ]
      }
    }
  }
])

```
- Here we are doing simple calculation
```
2 X 50000= 100000
```
- Example: 2 $concat
```
db.orders.aggregate([
  {
    $project: {
      message: {
        $concat: [
          "$customer",
          " ordered ",
          "$product"         

        ]
      }
    }
  }
])
```
- $toString
```
db.orders.aggregate([
  {
    $project: {
      message: {
        $concat: [
          "$customer",
          " ordered ",
          "$product",
          " with price Rs.",
          {$toString: "$price"}

        ]
      }
    }
  }
])
```
- Uppecase
```
db.orders.aggregate([
  {
    $project: {
      message: {
        $concat: [
          {$toUpper:"$customer"},
          " ordered ",
          "$product",
          " with price Rs.",
          {$toString: "$price"}

        ]
      }
    }
  }
])
```
- Multiple Stage Togather
```
db.orders.aggregate([
  {
    $match: {
      status: "Delivered"
    }
  },
  {
    $group: {
      _id: "$category",
      totalSales: {
        $sum: "$price"
      }
    }
  }
])
```
- $max
```
 
db.orders.aggregate([
  {
    $group: {
       _id:"$category",
       highestPrice:{
        $max:"$price"
       }
    }
  }
])
````
