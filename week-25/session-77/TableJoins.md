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

# 1. Inner Join
```
SELECT 
    Employee.EmpID,
    Employee.EmpName,
    Department.DeptName
FROM Employee
INNER JOIN Department
ON Employee.DeptID = Department.DeptID;
```

## Output

+-------+---------+-----------+
| EmpID | EmpName | DeptName |
| ----- | ------- | -------- |
| 101   | Rahul   | IT       |
| 102   | Priya   | HR       |
| 103   | Karan   | IT       |
| 105   | Sneha   | Support  |
+-------+---------+-----------+

# 2. LEFT JOIN
```
SELECT 
    Employee.EmpID,
    Employee.EmpName,
    Department.DeptName
FROM Employee
LEFT JOIN Department
ON Employee.DeptID = Department.DeptID;

```
## Output:
+-------+---------+-----------+
| EmpID | EmpName | DeptName |
| ----- | ------- | -------- |
| 101   | Rahul   | IT       |
| 102   | Priya   | HR       |
| 103   | Karan   | IT       |
| 104   | Amit    | NULL     |
| 105   | Sneha   | Support  |
+-------+---------+-----------+


# 3. Right Join
```
SELECT 
    Employee.EmpId,
    Employee.EmpName,
    Department.DeptName
FROM Employee
RIGHT JOIN Department
ON Employee.DeptID = Department.DeptID;
```

## Output:

+-------+---------+-----------+
| EmpId | EmpName | DeptName  |
+-------+---------+-----------+
|   101 | Rahul   | IT        |
|   103 | Karan   | IT        |
|   102 | Priya   | HR        |
|  NULL | NULL    | Finance   |
|  NULL | NULL    | Marketing |
|   105 | Sneha   | Support   |
+-------+---------+-----------+

# 4. FULL OUTER Join (MySQL Alternative)
```
SELECT 
    Employee.EmpName,
    Department.DeptName
FROM Employee
LEFT JOIN Department
ON Employee.DeptID = Department.DeptID

UNION

SELECT 
    Employee.EmpName,
    Department.DeptName
FROM Employee
RIGHT JOIN Department
ON Employee.DeptID = Department.DeptID;

```

## Output:
+---------+-----------+
| EmpName | DeptName  |
+---------+-----------+
| Rahul   | IT        |
| Priya   | HR        |
| Karan   | IT        |
| Amit    | NULL      |
| Sneha   | Support   |
| NULL    | Finance   |
| NULL    | Marketing |
+---------+-----------+

# 5. CROSS JOIN
```
SELECT 
    Employee.EmpName,
    Department.DeptName
FROM Employee
CROSS JOIN Department;
```

## Output
```
5 Employees × 5 Departments = 25 Rows
```

# 6. SELF JOIN
1. Create New Table
```
CREATE TABLE Staff (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    ManagerID INT
);
```
2. Insert Some Data
```
INSERT INTO Staff VALUES
(1, 'Rahul', NULL),
(2, 'Priya', 1),
(3, 'Karan', 1),
(4, 'Sneha', 2);
```
3. SELF JOIN
```
SELECT 
    E.EmpName AS Employee,
    M.EmpName AS Manager
FROM Staff E
LEFT JOIN Staff M
ON E.ManagerID = M.EmpID;

```
## Output:
+----------+---------+
| Employee | Manager |
+----------+---------+
| Rahul    | NULL    |
| Priya    | Rahul   |
| Karan    | Rahul   |
| Sneha    | Priya   |
+----------+---------+ 