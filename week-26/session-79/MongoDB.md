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
    - a. InserOne()
    ```
    db.name_of_collection.insertOne({JSON Data type});
    ```
    example:
    ```
    db.student.insertOne({name:"Nikunj Soni",age: 25, city:"Mumbai"});
    ```
    OUTPUT:
    ```
    {
        acknowledged: true,
        insertedId: ObjectId('6a105992f6a4f84105f1b3d6')
    }
    ```