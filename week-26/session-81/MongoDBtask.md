# MongoDB Complete Practice Tasks and Solutions (Except Aggregation)

# Table of Contents
1. Database & Collection Tasks
2. Insert Operations Tasks
3. Find Query Tasks
4. Update Query Tasks
5. Delete Query Tasks
6. Operators Tasks
7. Projection Tasks
8. Sorting & Limiting Tasks
9. Arrays Tasks
10. Embedded Documents Tasks
11. Index Tasks
 
---

# 1. Database & Collection Tasks

## Task 1
Create a database named:

```text
companyDB
```

Create a collection named:

```text
employees
```

---

## Task 2
Show all databases.

---

## Task 3
Show all collections inside current database.

---

# 2. Insert Operations Tasks

## Task 1
Insert one employee document.

```json
{
  "name": "Rahul",
  "age": 25,
  "department": "IT"
}
```

---

## Task 2
Insert multiple employee documents.

---

# 3. Find Query Tasks

## Task 1
Find all employee documents.

---

## Task 2
Find employee whose name is Rahul.

---

## Task 3
Find employees whose department is IT.

---

## Task 4
Find employees whose age is greater than 26.

---

# 4. Update Query Tasks

## Task 1
Update Rahul's department to Admin.

---

## Task 2
Add status field as Active for all employees.

---

## Task 3
Increase Rahul's age by 1.

---

# 5. Delete Query Tasks

## Task 1
Delete employee whose name is Amit.

---

## Task 2
Delete employees whose age is greater than 28.

---

# 6. Operators Tasks

## Task 1
Find employees whose age is greater than or equal to 25.

---

## Task 2
Find employees whose age is not equal to 30.

---

## Task 3
Find employees whose department is either IT or HR.

---

# 7. Projection Tasks

## Task 1
Display only name and department fields.

---

## Task 2
Hide age field.

---

# 8. Sorting & Limiting Tasks

## Task 1
Sort employees by age ascending.

---

## Task 2
Sort employees by age descending.

---

## Task 3
Display only first 2 employees.

---

# 9. Arrays Tasks

## Task 1
Insert student document with skills array.

---

## Task 2
Add Angular skill into Rahul's skills.

---

## Task 3
Remove Java skill from Rahul.

---

# 10. Embedded Documents Tasks

## Task 1
Insert employee document with address object.

---

## Task 2
Find employees whose city is Mumbai.

---

# 11. Index Tasks

## Task 1
Create index on employee name.

---

## Task 2
View all indexes.

---

## Task 3
Create compound index on department and age.

---

# 12. MongoDB Compass Tasks

## Task 1
Connect MongoDB Compass with local MongoDB.

---

## Task 2
Create database using Compass.

---

# 13. Authentication Tasks

## Task 1
Create MongoDB user:
Username: admin
Password: admin123

---

# 14. MongoDB Shell Tasks

## Task 1
Open MongoDB shell.

---

## Task 2
Switch to companyDB database.

---

# 15. MongoDB with Node.js Tasks

## Task 1
Install MongoDB package in Node.js.

---

## Task 2
Connect Node.js with MongoDB.

---

# 16. Real Project Tasks

## Task 1
Create Employee Management database.

---

## Task 2
Insert employees with:
- name
- email
- salary
- department
- skills
- address

---

# 17. Solutions

# Database & Collection Solutions

## Solution 1

```javascript
use companyDB

db.createCollection("employees")
```

---

## Solution 2

```javascript
show dbs
```

---

## Solution 3

```javascript
show collections
```

---

# Insert Operations Solutions

## Solution 1

```javascript
db.employees.insertOne({
  name: "Rahul",
  age: 25,
  department: "IT"
})
```

---

## Solution 2

```javascript
db.employees.insertMany([
  {
    name: "Amit",
    age: 30,
    department: "HR"
  },
  {
    name: "Neha",
    age: 28,
    department: "Finance"
  }
])
```

---

# Find Query Solutions

## Solution 1

```javascript
db.employees.find()
```

---

## Solution 2

```javascript
db.employees.find({
  name: "Rahul"
})
```

---

## Solution 3

```javascript
db.employees.find({
  department: "IT"
})
```

---

# Update Query Solutions

## Solution 1

```javascript
db.employees.updateOne(
  {
    name: "Rahul"
  },
  {
    $set: {
      department: "Admin"
    }
  }
)
```

---

## Solution 2

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

# Delete Query Solutions

## Solution 1

```javascript
db.employees.deleteOne({
  name: "Amit"
})
```

---

## Solution 2

```javascript
db.employees.deleteMany({
  age: {
    $gt: 28
  }
})
```

---

# Operators Solutions

## Solution 1

```javascript
db.employees.find({
  age: {
    $gte: 25
  }
})
```

---

## Solution 2

```javascript
db.employees.find({
  age: {
    $ne: 30
  }
})
```

---

# Projection Solutions

## Solution 1

```javascript
db.employees.find(
  {},
  {
    name: 1,
    department: 1,
    _id: 0
  }
)
```

---

# Sorting Solutions

## Solution 1

```javascript
db.employees.find().sort({
  age: 1
})
```

---

## Solution 2

```javascript
db.employees.find().sort({
  age: -1
})
```

---

# Array Solutions

## Solution 1

```javascript
db.students.insertOne({
  name: "Rahul",
  skills: [
    "Java",
    "MongoDB"
  ]
})
```

---

## Solution 2

```javascript
db.students.updateOne(
  {
    name: "Rahul"
  },
  {
    $push: {
      skills: "Angular"
    }
  }
)
```

---

# Index Solutions

## Solution 1

```javascript
db.employees.createIndex({
  name: 1
})
```

---

## Solution 2

```javascript
db.employees.getIndexes()
```

---

