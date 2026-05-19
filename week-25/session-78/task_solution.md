# TASKS.md

# Complete SQL Practice Tasks

## Database Creation Tasks

### Task 1
Create a database named `company_db`.

---

### Task 2
Use the `company_db` database.

---

### Task 3
Create a `users` table with the following columns:
- user_id
- full_name
- email
- age
- city
- salary
- created_at

---

# Insert Tasks

### Task 4
Insert 5 user records into the `users` table.

---

### Task 5
Insert another 3 users from different cities.

---

# SELECT Query Tasks

### Task 6
Display all users.

---

### Task 7
Display only user names and salaries.

---

### Task 8
Display users from Mumbai.

---

### Task 9
Display users with salary greater than 60000.

---

### Task 10
Display users whose age is between 25 and 35.

---

### Task 11
Display users whose names start with 'N'.

---

### Task 12
Display users whose names end with 'a'.

---

# DISTINCT Tasks

### Task 13
Display unique cities from the users table.

---

### Task 14
Count unique cities.

---

# ORDER BY Tasks

### Task 15
Display users sorted by salary ascending.

---

### Task 16
Display users sorted by salary descending.

---

# LIMIT Tasks

### Task 17
Display top 3 highest paid users.

---

### Task 18
Display the second highest salary.

---

# Aggregate Function Tasks

### Task 19
Count total users.

---

### Task 20
Find maximum salary.

---

### Task 21
Find minimum salary.

---

### Task 22
Find average salary.

---

### Task 23
Find total salary paid to all users.

---

# GROUP BY Tasks

### Task 24
Count users city-wise.

---

### Task 25
Find average salary city-wise.

---

### Task 26
Find maximum salary city-wise.

---

### Task 27
Find total salary city-wise.

---

# HAVING Clause Tasks

### Task 28
Display cities having more than 2 users.

---

### Task 29
Display cities where average salary is greater than 70000.

---

### Task 30
Display cities where total salary is greater than 150000.

---

# UPDATE Tasks

### Task 31
Update salary of a specific user.

---

### Task 32
Increase all salaries by 5000.

---

# DELETE Tasks

### Task 33
Delete a user by user_id.

---

### Task 34
Delete users whose salary is less than 40000.

---

# Transaction Tasks

### Task 35
Start a transaction.

---

### Task 36
Create a savepoint named `sp1`.

---

### Task 37
Update a user salary.

---

### Task 38
Rollback to savepoint.

---

### Task 39
Commit the transaction.

---

# JOIN Tasks

### Task 40
Create an `orders` table.

---

### Task 41
Add foreign key relationship with users table.

---

### Task 42
Insert order records.

---

### Task 43
Display user names with their ordered products using INNER JOIN.

---

### Task 44
Display all users with their orders using LEFT JOIN.

---

# Foreign Key & Cascade Tasks

### Task 45
Implement `ON DELETE CASCADE` in orders table.

---

### Task 46
Delete a user and verify related orders are deleted automatically.

---

# Index Tasks

### Task 47
Create an index on email column.

---

### Task 48
Display indexes from users table.

---

### Task 49
Drop the created index.

---

# Duplicate Handling Tasks

### Task 50
Insert duplicate records.

---

### Task 51
Find duplicate users using GROUP BY.

---

### Task 52
Delete duplicate records.

---

# Drop Tasks

### Task 53
Drop orders table.

---

### Task 54
Drop users table.

---

### Task 55
Drop company database.

---

# Mini Project Challenge

## User Management System

Features:
- Add users
- Search users
- Filter users
- Group reports city-wise
- Handle transactions
- Manage orders
- Use joins
- Use indexes
- Prevent duplicate records

---------------------------------------------------------------------
# SOLUTIONS
---------------------------------------------------------------------
# Complete SQL Practice Solutions

## Create Database

```sql
CREATE DATABASE company_db;
```

---

## Use Database

```sql
USE company_db;
```

---

## Create Users Table

```sql
CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    city VARCHAR(50),
    salary DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Insert Records

```sql
INSERT INTO users(full_name, email, age, city, salary)
VALUES
('Nikunj Soni', 'nikunj@gmail.com', 26, 'Mumbai', 75000),
('Rahul Shah', 'rahul@gmail.com', 30, 'Ahmedabad', 50000),
('Priya Patel', 'priya@gmail.com', 28, 'Mumbai', 85000),
('Amit Joshi', 'amit@gmail.com', 35, 'Delhi', 65000),
('Meera Shah', 'meera@gmail.com', 29, 'Mumbai', 90000);
```

---

## Display All Users

```sql
SELECT * FROM users;
```

---

## Users from Mumbai

```sql
SELECT * FROM users
WHERE city = 'Mumbai';
```

---

## Users with Salary Greater Than 60000

```sql
SELECT * FROM users
WHERE salary > 60000;
```

---

## Users Age Between 25 and 35

```sql
SELECT * FROM users
WHERE age BETWEEN 25 AND 35;
```

---

## DISTINCT Cities

```sql
SELECT DISTINCT city
FROM users;
```

---

## Count Unique Cities

```sql
SELECT COUNT(DISTINCT city)
FROM users;
```

---

## Sort by Salary Ascending

```sql
SELECT * FROM users
ORDER BY salary ASC;
```

---

## Sort by Salary Descending

```sql
SELECT * FROM users
ORDER BY salary DESC;
```

---

## Top 3 Highest Paid Users

```sql
SELECT * FROM users
ORDER BY salary DESC
LIMIT 3;
```

---

## Second Highest Salary

```sql
SELECT * FROM users
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

---

## Count Total Users

```sql
SELECT COUNT(*)
FROM users;
```

---

## Maximum Salary

```sql
SELECT MAX(salary)
FROM users;
```

---

## Minimum Salary

```sql
SELECT MIN(salary)
FROM users;
```

---

## Average Salary

```sql
SELECT AVG(salary)
FROM users;
```

---

## Total Salary

```sql
SELECT SUM(salary)
FROM users;
```

---

## Count Users City-Wise

```sql
SELECT city,
COUNT(*) AS total_users
FROM users
GROUP BY city;
```

---

## Average Salary City-Wise

```sql
SELECT city,
AVG(salary) AS avg_salary
FROM users
GROUP BY city;
```

---

## Maximum Salary City-Wise

```sql
SELECT city,
MAX(salary) AS highest_salary
FROM users
GROUP BY city;
```

---

## Total Salary City-Wise

```sql
SELECT city,
SUM(salary) AS total_salary
FROM users
GROUP BY city;
```

---

## HAVING Example

```sql
SELECT city,
COUNT(*) AS total_users
FROM users
GROUP BY city
HAVING COUNT(*) > 2;
```

---

## HAVING with AVG

```sql
SELECT city,
AVG(salary) AS avg_salary
FROM users
GROUP BY city
HAVING AVG(salary) > 70000;
```

---

## Update Salary

```sql
UPDATE users
SET salary = 95000
WHERE user_id = 1;
```

---

## Increase All Salaries

```sql
UPDATE users
SET salary = salary + 5000;
```

---

## Delete User

```sql
DELETE FROM users
WHERE user_id = 2;
```

---

## Transaction Example

```sql
START TRANSACTION;

SAVEPOINT sp1;

UPDATE users
SET salary = salary - 5000
WHERE user_id = 1;

ROLLBACK TO sp1;

COMMIT;
```

---

## Create Orders Table

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    user_id BIGINT,

    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);
```

---

## Insert Orders

```sql
INSERT INTO orders(product_name, user_id)
VALUES
('Laptop', 1),
('Mobile', 1),
('Tablet', 3);
```

---

## INNER JOIN Example

```sql
SELECT users.full_name,
orders.product_name
FROM users
INNER JOIN orders
ON users.user_id = orders.user_id;
```

---

## LEFT JOIN Example

```sql
SELECT users.full_name,
orders.product_name
FROM users
LEFT JOIN orders
ON users.user_id = orders.user_id;
```

---

## Create Index

```sql
CREATE INDEX idx_email
ON users(email);
```

---

## Show Indexes

```sql
SHOW INDEX FROM users;
```

---

## Drop Index

```sql
DROP INDEX idx_email
ON users;
```

---

## Find Duplicate Records

```sql
SELECT full_name, city, COUNT(*)
FROM users
GROUP BY full_name, city
HAVING COUNT(*) > 1;
```

---

## Delete Duplicate Records

```sql
DELETE u1
FROM users u1
INNER JOIN users u2
ON u1.full_name = u2.full_name
AND u1.city = u2.city
AND u1.user_id > u2.user_id;
```

---

## Drop Orders Table

```sql
DROP TABLE orders;
```

---

## Drop Users Table

```sql
DROP TABLE users;
```

---

## Drop Database

```sql
DROP DATABASE company_db;
```
----------------------------------------------------------------------------------
By: NIKUNJ SONI
----------------------------------------------------------------------------------
