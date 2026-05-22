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