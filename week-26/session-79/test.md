# Complete MongoDB + MongoDB Compass Notes (Beginner to Advanced)

# Table of Contents

1. Introduction to Databases
2. What is MongoDB?
3. SQL vs MongoDB
4. Installing MongoDB Compass
5. MongoDB Architecture
6. Understanding Database, Collection, Document
7. First Connection in MongoDB Compass
8. Creating Database & Collection
9. CRUD Operations
10. MongoDB Data Types
11. Query Operators
12. Projection
13. Sorting & Limiting
14. Update Operators
15. Delete Operations
16. Embedded Documents & Arrays
17. Indexing
18. Aggregation Framework
19. Relationships in MongoDB
20. MongoDB Compass Features
21. Import & Export Data
22. Backup & Restore
23. User Authentication & Security
24. MongoDB Shell Basics
25. MongoDB with Node.js
26. Real Project Example
27. Important Interview Questions
28. Best Practices
29. MongoDB Commands Cheat Sheet
30. Practice Tasks

---

# 1. Introduction to Databases

## What is a Database?

A database is a place where data is stored in an organized way.

Examples:

* Student records
* Employee data
* Banking systems
* E-commerce websites

## Types of Databases

### 1. Relational Database (SQL)

Examples:

* MySQL
* PostgreSQL
* Oracle

Data stored in:

* Tables
* Rows
* Columns

### 2. Non-Relational Database (NoSQL)

Examples:

* MongoDB
* Cassandra
* Redis

Data stored in:

* Documents
* JSON-like format

---

# 2. What is MongoDB?

MongoDB is a NoSQL document database.

MongoDB stores data in BSON format.
(BSON = Binary JSON)

Official Website:
urlMongoDB[https://www.mongodb.com](https://www.mongodb.com)

## Features of MongoDB

* No fixed schema
* Fast performance
* Scalable
* High availability
* Stores JSON-like documents
* Easy for developers

## Example Document

```json
{
  "name": "Nikunj",
  "age": 25,
  "city": "Mumbai"
}
```

---

# 3. SQL vs MongoDB

| SQL          | MongoDB            |
| ------------ | ------------------ |
| Database     | Database           |
| Table        | Collection         |
| Row          | Document           |
| Column       | Field              |
| JOIN         | Embedded Documents |
| Fixed Schema | Flexible Schema    |

## SQL Example

```sql
SELECT * FROM users;
```

## MongoDB Equivalent

```javascript
db.users.find()
```

---

# 4. Installing MongoDB Compass

## What is MongoDB Compass?

MongoDB Compass is a GUI tool for MongoDB.

Using Compass you can:

* Create databases
* Insert data
* Run queries
* Visualize documents
* Create indexes
* Run aggregation pipelines

## Installation Steps

### Step 1: Download MongoDB Compass

Visit:

urlMongoDB Compass Download[https://www.mongodb.com/products/tools/compass](https://www.mongodb.com/products/tools/compass)

### Step 2: Install

* Download installer
* Click Next
* Install
* Open Compass

### Step 3: Install MongoDB Community Server

Download:

urlMongoDB Community Server[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

### Step 4: Install as Service

During installation:

* Select “Install MongoDB as Service”

### Step 5: Open Compass

You will see:

```text
mongodb://localhost:27017
```

Click:

```text
Connect
```

---

# 5. MongoDB Architecture

## Structure

```text
MongoDB Server
   └── Database
         └── Collection
                └── Document
```

## Example

```text
CompanyDB
   └── employees
         └── {
                name: "Rahul",
                age: 30
             }
```

---

# 6. Understanding Database, Collection, Document

## Database

Container for collections.

Example:

```text
schoolDB
```

## Collection

Group of documents.

Example:

```text
students
```

## Document

Actual data record.

Example:

```json
{
  "name": "Amit",
  "marks": 85
}
```

---

# 7. First Connection in MongoDB Compass

## Connect to Local MongoDB

### Connection String

```text
mongodb://localhost:27017
```

### Steps

1. Open Compass
2. Paste connection string
3. Click Connect

---

# 8. Creating Database & Collection

## Create Database

### Steps

1. Click “Create Database”
2. Enter:

   * Database Name
   * Collection Name
3. Click Create

## Example

Database:

```text
companyDB
```

Collection:

```text
employees
```

---

# 9. CRUD Operations

CRUD Means:

| Operation | Meaning     |
| --------- | ----------- |
| Create    | Insert Data |
| Read      | Fetch Data  |
| Update    | Modify Data |
| Delete    | Remove Data |

---

# CREATE Operation

## Insert One Document

### Compass Steps

1. Open collection
2. Click “Add Data”
3. Insert Document

## Example

```json
{
  "name": "Nikunj",
  "age": 28,
  "city": "Virar"
}
```

## Mongo Shell Command

```javascript
db.employees.insertOne({
   name: "Nikunj",
   age: 28,
   city: "Virar"
})
```

---

# Insert Multiple Documents

```javascript
db.employees.insertMany([
  {
    name: "Amit",
    age: 25
  },
  {
    name: "Rahul",
    age: 30
  }
])
```

---

# READ Operation

## Find All Documents

```javascript
db.employees.find()
```

## Find Specific Data

```javascript
db.employees.find({ age: 25 })
```

## Pretty Format

```javascript
db.employees.find().pretty()
```

---

# Query Examples

## Find by Name

```javascript
db.employees.find({ name: "Rahul" })
```

## Find by Multiple Conditions

```javascript
db.employees.find({
  age: 25,
  city: "Mumbai"
})
```

---

# UPDATE Operation

## Update One Document

```javascript
db.employees.updateOne(
  { name: "Rahul" },
  {
    $set: {
      city: "Delhi"
    }
  }
)
```

---

# Update Many Documents

```javascript
db.employees.updateMany(
  {},
  {
    $set: {
      status: "Active"
    }
  }
)
```

---

# DELETE Operation

## Delete One Document

```javascript
db.employees.deleteOne({ name: "Rahul" })
```

## Delete Many Documents

```javascript
db.employees.deleteMany({ status: "Inactive" })
```

---

# 10. MongoDB Data Types

| Data Type | Example         |
| --------- | --------------- |
| String    | "Nikunj"        |
| Number    | 25              |
| Boolean   | true            |
| Array     | [1,2,3]         |
| Object    | {city:"Mumbai"} |
| Null      | null            |
| Date      | ISODate()       |
| ObjectId  | _id             |

---

# ObjectId

Every document has a unique ID.

Example:

```json
{
  "_id": ObjectId("6512ab34cd56"),
  "name": "Nikunj"
}
```

---

# 11. Query Operators

## Comparison Operators

| Operator | Meaning            |
| -------- | ------------------ |
| $eq      | Equal              |
| $ne      | Not Equal          |
| $gt      | Greater Than       |
| $gte     | Greater Than Equal |
| $lt      | Less Than          |
| $lte     | Less Than Equal    |
| $in      | Match Any          |

---

# Examples

## Greater Than

```javascript
db.employees.find({ age: { $gt: 25 } })
```

## Less Than

```javascript
db.employees.find({ age: { $lt: 30 } })
```

## IN Operator

```javascript
db.employees.find({
  city: {
    $in: ["Mumbai", "Delhi"]
  }
})
```

---

# Logical Operators

| Operator | Meaning |
| -------- | ------- |
| $and     | AND     |
| $or      | OR      |
| $not     | NOT     |

## Example

```javascript
db.employees.find({
  $or: [
    { city: "Mumbai" },
    { age: 25 }
  ]
})
```

---

# 12. Projection

Projection means selecting specific fields.

## Example

```javascript
db.employees.find(
  {},
  {
    name: 1,
    city: 1,
    _id: 0
  }
)
```

---

# 13. Sorting & Limiting

## Sort Ascending

```javascript
db.employees.find().sort({ age: 1 })
```

## Sort Descending

```javascript
db.employees.find().sort({ age: -1 })
```

## Limit Records

```javascript
db.employees.find().limit(5)
```

## Skip Records

```javascript
db.employees.find().skip(5)
```

---

# 14. Update Operators

| Operator | Meaning           |
| -------- | ----------------- |
| $set     | Set Value         |
| $unset   | Remove Field      |
| $inc     | Increment         |
| $rename  | Rename Field      |
| $push    | Add to Array      |
| $pull    | Remove from Array |

---

# Examples

## Increment Salary

```javascript
db.employees.updateOne(
  { name: "Amit" },
  {
    $inc: {
      salary: 5000
    }
  }
)
```

## Push into Array

```javascript
db.students.updateOne(
  { name: "Rahul" },
  {
    $push: {
      skills: "MongoDB"
    }
  }
)
```

---

# 15. Delete Operations

## Delete Collection

```javascript
db.students.drop()
```

## Delete Database

```javascript
use companyDB

db.dropDatabase()
```

---

# 16. Embedded Documents & Arrays

## Embedded Document Example

```json
{
  "name": "Nikunj",
  "address": {
    "city": "Virar",
    "state": "Maharashtra"
  }
}
```

---

# Array Example

```json
{
  "name": "Rahul",
  "skills": [
    "Java",
    "MongoDB",
    "Angular"
  ]
}
```

---

# Query Nested Field

```javascript
db.users.find({
  "address.city": "Virar"
})
```

---

# 17. Indexing

## What is Index?

Indexes improve query performance.

Without index:

* MongoDB scans all documents

With index:

* MongoDB searches faster

---

# Create Index

```javascript
db.employees.createIndex({ name: 1 })
```

## View Indexes

```javascript
db.employees.getIndexes()
```

---

# Types of Indexes

| Type         | Description        |
| ------------ | ------------------ |
| Single Field | One field          |
| Compound     | Multiple fields    |
| Text         | Search text        |
| Unique       | Prevent duplicates |

---

# Unique Index Example

```javascript
db.users.createIndex(
  { email: 1 },
  { unique: true }
)
```

---

# 18. Aggregation Framework

Aggregation is used for:

* Reports
* Analytics
* Calculations
* Grouping

---

# Aggregation Pipeline

```text
Input → Stage1 → Stage2 → Output
```

---

# Important Stages

| Stage    | Purpose       |
| -------- | ------------- |
| $match   | Filter        |
| $group   | Group Data    |
| $sort    | Sort          |
| $project | Select Fields |
| $limit   | Limit Records |

---

# Aggregation Example

## Group by Department

```javascript
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      totalSalary: {
        $sum: "$salary"
      }
    }
  }
])
```

---

# Match Example

```javascript
db.employees.aggregate([
  {
    $match: {
      age: {
        $gt: 25
      }
    }
  }
])
```

---

# 19. Relationships in MongoDB

## Types

### 1. Embedded Relationship

Store related data together.

### Example

```json
{
  "name": "Rahul",
  "orders": [
    {
      "product": "Laptop",
      "price": 50000
    }
  ]
}
```

---

# Referenced Relationship

Store references using ObjectId.

### Users Collection

```json
{
  "_id": 1,
  "name": "Rahul"
}
```

### Orders Collection

```json
{
  "userId": 1,
  "product": "Laptop"
}
```

---

# 20. MongoDB Compass Features

## Features

* Visual query builder
* Aggregation pipeline builder
* Schema analysis
* Performance analysis
* Index management
* Import/export

---

# Filter in Compass

## Example

```json
{
  "age": {
    "$gt": 25
  }
}
```

---

# Aggregation Tab

Steps:

1. Open collection
2. Click Aggregation
3. Add stages
4. Run pipeline

---

# Schema Tab

Analyzes:

* Field types
* Structure
* Missing fields

---

# 21. Import & Export Data

# Import JSON

Steps:

1. Open collection
2. Add Data
3. Import JSON/CSV

---

# Export Collection

Steps:

1. Open collection
2. Click Export
3. Select format

---

# 22. Backup & Restore

## Backup Database

```bash
mongodump --db companyDB
```

## Restore Database

```bash
mongorestore
```

---

# 23. User Authentication & Security

## Create User

```javascript
db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [
    {
      role: "readWrite",
      db: "companyDB"
    }
  ]
})
```

---

# Security Best Practices

* Use strong passwords
* Enable authentication
* Limit permissions
* Backup regularly
* Use firewall

---

# 24. MongoDB Shell Basics

MongoDB Shell = mongosh

## Open Shell

```bash
mongosh
```

---

# Important Commands

## Show Databases

```javascript
show dbs
```

## Use Database

```javascript
use companyDB
```

## Show Collections

```javascript
show collections
```

---

# 25. MongoDB with Node.js

## Install MongoDB Driver

```bash
npm install mongodb
```

---

# Connection Example

```javascript
import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function connectDB() {
  await client.connect();

  console.log("Connected Successfully");

  const db = client.db("companyDB");

  const collection = db.collection("employees");

  const data = await collection.find().toArray();

  console.log(data);
}

connectDB();
```

---

# 26. Real Project Example

# Employee Management System

## Database

```text
companyDB
```

## Collection

```text
employees
```

## Sample Document

```json
{
  "name": "Nikunj",
  "email": "nikunj@gmail.com",
  "department": "IT",
  "salary": 50000,
  "skills": [
    "MongoDB",
    "Node.js",
    "Angular"
  ],
  "address": {
    "city": "Virar",
    "state": "Maharashtra"
  }
}
```

---

# Common Queries

## IT Employees

```javascript
db.employees.find({
  department: "IT"
})
```

## Salary Greater Than 40000

```javascript
db.employees.find({
  salary: {
    $gt: 40000
  }
})
```

---

# 27. Important Interview Questions

## What is MongoDB?

MongoDB is a NoSQL document database.

## What is BSON?

Binary JSON format used internally by MongoDB.

## Difference between SQL and MongoDB?

SQL uses tables while MongoDB uses collections/documents.

## What is ObjectId?

Unique identifier for documents.

## What is Aggregation?

Used for data processing and analytics.

## What is Indexing?

Improves query performance.

## What is Sharding?

Distributes data across servers.

## What is Replication?

Copies data to multiple servers.

---

# 28. Best Practices

## Naming Conventions

Use:

```text
employees
users
products
```

Avoid:

```text
EmployeesData
UserCollectionTable
```

---

# Keep Documents Small

Large documents reduce performance.

---

# Use Indexes Carefully

Too many indexes:

* Increase storage
* Slow inserts

---

# Validate Data

Use schema validation.

---

# Backup Regularly

Always maintain backups.

---

# 29. MongoDB Commands Cheat Sheet

## Database Commands

```javascript
show dbs
use companyDB
db.dropDatabase()
```

---

# Collection Commands

```javascript
show collections
db.createCollection("users")
db.users.drop()
```

---

# Insert Commands

```javascript
db.users.insertOne({ name: "Rahul" })

db.users.insertMany([
  { name: "Amit" },
  { name: "Neha" }
])
```

---

# Find Commands

```javascript
db.users.find()

db.users.find({ age: 25 })
```

---

# Update Commands

```javascript
db.users.updateOne(
  { name: "Rahul" },
  {
    $set: {
      age: 30
    }
  }
)
```

---

# Delete Commands

```javascript
db.users.deleteOne({ name: "Rahul" })
```

---

# 30. Practice Tasks

# Beginner Tasks

1. Create database schoolDB
2. Create collection students
3. Insert 5 student records
4. Find all students
5. Find students with marks > 80
6. Update city field
7. Delete one student

---

# Intermediate Tasks

1. Create employee collection
2. Add embedded address
3. Add skills array
4. Use projection
5. Sort by salary
6. Create indexes
7. Run aggregation queries

---

# Advanced Tasks

1. Create referenced collections
2. Use aggregation pipelines
3. Create unique indexes
4. Implement authentication
5. Import/export CSV

---

# MongoDB Learning Roadmap

## Stage 1

* Understand databases
* Install MongoDB
* Learn Compass

## Stage 2

* CRUD operations
* Queries
* Operators

## Stage 3

* Arrays
* Embedded documents
* Indexes

## Stage 4

* Aggregation
* Relationships
* Optimization

## Stage 5

* MongoDB with Node.js
* Authentication
* Production deployment

---

# Final Notes

MongoDB is one of the most popular NoSQL databases used in:

* MERN Stack
* MEAN Stack
* Cloud applications
* Real-time applications
* Analytics systems

Practice daily:

* Create collections
* Insert documents
* Run queries
* Build aggregation pipelines

The more you practice, the faster you will master MongoDB.
