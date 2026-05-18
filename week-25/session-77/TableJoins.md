# Joins in MYSQL Table

- Let's Database and Create Tables
```
CREATE DATABASE joins_demo;

USE joins_demo;
```

1. Department Table
```
CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50)
);

```
2. Insert data into Department
```
INSERT INTO Department VALUES
(1, 'IT'),
(2, 'HR'),
(3, 'Finance'),
(4, 'Marketing'),
(5, 'Support');
```
3. Verify Department Table
```
SELECT * FROM Department;
```

4. Create Employee Table
```
CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    DeptID INT,
    Salary INT,
    FOREIGN KEY (DeptID)
    REFERENCES Department(DeptID)
);
```
5. Insert Data into it
```
INSERT INTO Employee VALUES
(101, 'Rahul', 1, 50000),
(102, 'Priya', 2, 45000),
(103, 'Karan', 1, 60000),
(104, 'Amit', NULL, 40000),
(105, 'Sneha', 5, 55000);
```
6. Verify The data
```
SELECT * FROM Employee;
```