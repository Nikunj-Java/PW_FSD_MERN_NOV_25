# Electronic Product SQL Practice

## Overview

This project is designed to help beginners practice SQL queries using an `eproduct` table.

You will learn:

* Creating databases and tables
* Inserting records
* Filtering data using `WHERE`
* Sorting records
* Using aggregate functions
* Updating and deleting records
* Writing real-world SQL queries

---

# Database Setup

## Create Database

```sql
CREATE DATABASE ecommerce_db;
```

## Use Database

```sql
USE ecommerce_db;
```

---

# Create Table

```sql
CREATE TABLE eproduct (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT
);
```

---

# Insert Multiple Records

```sql
INSERT INTO eproduct(name, price)
VALUES
("Apple", 80000),
("Lenovo ThinkPad", 120000),
("Acer Laptop", 75000),
("Vio Laptop", 69000),
("Samsung", 34000);
```

---

# Display Records

## Show All Products

```sql
SELECT * FROM eproduct;
```

---

# Filter Queries

## Products Greater Than 70000

```sql
SELECT * FROM eproduct
WHERE price > 70000;
```

---

## Products Less Than 50000

```sql
SELECT * FROM eproduct
WHERE price < 50000;
```

---

## Find Samsung Product

```sql
SELECT * FROM eproduct
WHERE name = "Samsung";
```

---

## Products Containing "Laptop"

```sql
SELECT * FROM eproduct
WHERE name LIKE "%Laptop%";
```

---

## Products Between Price Range

```sql
SELECT * FROM eproduct
WHERE price BETWEEN 60000 AND 90000;
```

---

# Sorting Queries

## Sort by Price Ascending

```sql
SELECT * FROM eproduct
ORDER BY price ASC;
```

---

## Sort by Price Descending

```sql
SELECT * FROM eproduct
ORDER BY price DESC;
```

---

# Limit Records

## Top 2 Expensive Products

```sql
SELECT * FROM eproduct
ORDER BY price DESC
LIMIT 2;
```

---

# Aggregate Functions

## Maximum Price

```sql
SELECT MAX(price) FROM eproduct;
```

---

## Minimum Price

```sql
SELECT MIN(price) FROM eproduct;
```

---

## Average Price

```sql
SELECT AVG(price) FROM eproduct;
```

---

## Total Price

```sql
SELECT SUM(price) FROM eproduct;
```

---

## Count Products

```sql
SELECT COUNT(*) FROM eproduct;
```

---

# Update Queries

## Update Samsung Price

```sql
UPDATE eproduct
SET price = 40000
WHERE name = "Samsung";
```

---

## Increase All Prices by 5000

```sql
UPDATE eproduct
SET price = price + 5000;
```

---

# Delete Queries

## Delete Vio Laptop

```sql
DELETE FROM eproduct
WHERE name = "Vio Laptop";
```

---

# Drop Queries

## Drop Table

```sql
DROP TABLE eproduct;
```

---

## Drop Database

```sql
DROP DATABASE ecommerce_db;
```

---

# Practice Tasks

## Beginner Tasks

1. Display all products.
2. Display only product names.
3. Find products above 70000.
4. Find products below 50000.
5. Find Samsung product.

---

## Intermediate Tasks

6. Find products containing "Laptop".
7. Find products between 60000 and 90000.
8. Sort products by ascending price.
9. Sort products by descending price.
10. Display top 2 expensive products.

---

## Advanced Tasks

11. Find products with price > 50000 and name containing "Laptop".
12. Find products where name is Apple or price > 100000.
13. Exclude Samsung from result.
14. Use IN operator to display multiple products.
15. Find second highest priced product.

---

# Mini Project

## Electronic Product Management System

Features:

* Add products
* Search products
* Filter by price
* Sort products
* Update prices
* Delete products
* Generate reports

---

# Technologies Used

* SQL
* MySQL

---

# Learning Outcome

After completing this practice, you will understand:

* SQL basics
* CRUD operations
* Filtering and sorting
* Aggregate functions
* Database management
* Real-world query writing

---

# Author

Practice project for learning SQL and Database Management Systems.
