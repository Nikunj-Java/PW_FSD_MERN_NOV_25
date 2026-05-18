# What is Normalization
Database Normalization is the process of organizing data in a database to:
- Reduce data redundancy (duplicate data)
- Improve data consistency
- Avoid insertion, update, and deletion anomalies
- Make the database efficient and structured
- Normalization is divided into different levels called Normal Forms.

## Scenario
-----------------------------------------------------------------------------
| StudentID | StudentName | CourseID | CourseName | Faculty | FacultyPhone |
| --------- | ----------- | -------- | ---------- | ------- | ------------ |
| 101       | Rahul       | C1       | Java       | Amit    | 98765        |
| 101       | Rahul       | C2       | MySQL      | Neha    | 87654        |
| 102       | Priya       | C1       | Java       | Amit    | 98765        |
-----------------------------------------------------------------------------
## What is the Problem Here?
- Students data is repeated
- Faculty phone repeated
- Difficult to update data
## 1NF (First Normal Form)
- Rule:
```
- 1.  Each column must contain atomic (Single) Value
- 2. No Multiple values in One cell
- 3. No repeating Groups

```
- 1NF Form:
## 1NF
-----------------------------------------------------------------------------
| StudentID | StudentName | CourseID | CourseName |
| --------- | ----------- | -------- | ---------- |
| 101       | Rahul       | C1       | Java       |
| 101       | Rahul       | C2       | MySQL      |
| 102       | Priya       | C1       | Java       |
-----------------------------------------------------------------------------
- Conclusion
```
Now:
One value per cell
Proper rows and columns
```
## 2NF (Second Normal Form)
- Rule
```
- 1. Must already be in 1NF
- 2. No Partial Dependency
- What is Partial Dependency?
    - When a column depends only on part of a composite primary key.
    - Suppose:
            Primary Key = (StudentID, CourseID)
    - But:
        StudentName depends only on StudentID
        CourseName depends only on CourseID

This causes redundancy.

```
- 2NF Form:
## 2NF
- Table:1 Student Table
---------------------------
| StudentID | StudentName |
| --------- | ----------- |
| 101       | Rahul       |
| 102       | Priya       |
---------------------------

- Table:2 Course Table
-------------------------
| CourseID | CourseName |
| -------- | ---------- |
| C1       | Java       |
| C2       | MySQL      |
-------------------------

- Table:3 Enrollment Table
--------------------------
| StudentID | CourseID |
| --------- | -------- |
| 101       | C1       |
| 101       | C2       |
| 102       | C1       |
--------------------------
- Now:
    Student info stored once
    Course info stored once

## 3NF (Third Normal Form)
Rule:
```
1. Must already be in 2NF
2. No transitive Dependency
"What is Transitive Dependency?"
    When a non-key column depends on another non-key column.
```
- Example
```
| CourseID | CourseName | Faculty | FacultyPhone |
| -------- | ---------- | ------- | ------------ |
| C1       | Java       | Amit    | 98765        |
```
- So: CourseID → Faculty → FacultyPhone
- This is transitive dependency.
## 3NF
1. Table:1 Course Table
-------------------------------------
| CourseID | CourseName | FacultyID |
| -------- | ---------- | --------- |
| C1       | Java       | F1        |
| C2       | MySQL      | F2        |
-------------------------------------
2. Table:2 Faculty Table
--------------------------------------
| FacultyID | Faculty | FacultyPhone |
| --------- | ------- | ------------ |
| F1        | Amit    | 98765        |
| F2        | Neha    | 87654        |
--------------------------------------
- Now:
    Faculty details stored separately
    No transitive dependency

# Summary
---------------------------------------------------------
| Normal Form | Main Goal                               |
| ----------- | --------------------------------------- |
| 1NF         | Remove repeating groups                 |
| 2NF         | Remove partial dependency               |
| 3NF         | Remove transitive dependency            |
---------------------------------------------------------

# Task:
Convert The Given table into 1NF , 2NF and 3NF
--------------------------------------------------------------------------------
| EmpID | EmpName | Department | ProjectNames        | Manager | ManagerPhone |
| ----- | ------- | ---------- | ------------------- | ------- | ------------ |
| E101  | Rahul   | IT         | Website, Mobile App | Amit    | 98765        |
| E102  | Priya   | HR         | Recruitment System  | Neha    | 87654        |
| E103  | Karan   | IT         | Website, CRM        | Amit    | 98765        |
--------------------------------------------------------------------------------
