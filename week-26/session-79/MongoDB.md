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