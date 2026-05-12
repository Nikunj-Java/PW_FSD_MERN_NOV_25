# SQL Practice Solutions - eproduct Table

## Database Setup

### Create Database

```sql
CREATE DATABASE ecommerce_db;
```

### Use Database

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

# Insert Records

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

# Beginner Task Solutions

## Task 1: Display All Products

```sql
SELECT * FROM eproduct;
```

---

## Task 2: Display Only Product Names

```sql
SELECT name FROM eproduct;
```

---

## Task 3: Products Greater Than 70000

```sql
SELECT * FROM eproduct
WHERE price > 70000;
```

---

## Task 4: Products Less Than 50000

```sql
SELECT * FROM eproduct
WHERE price < 50000;
```

---

## Task 5: Display Samsung Product

```sql
SELECT * FROM eproduct
WHERE name = "Samsung";
```

---

# Intermediate Task Solutions

## Task 6: Products Containing "Laptop"

```sql
SELECT * FROM eproduct
WHERE name LIKE "%Laptop%";
```

---

## Task 7: Products Between 60000 and 90000

```sql
SELECT * FROM eproduct
WHERE price BETWEEN 60000 AND 90000;
```

---

## Task 8: Sort Products by Ascending Price

```sql
SELECT * FROM eproduct
ORDER BY price ASC;
```

---

## Task 9: Sort Products by Descending Price

```sql
SELECT * FROM eproduct
ORDER BY price DESC;
```

---

## Task 10: Top 2 Expensive Products

```sql
SELECT * FROM eproduct
ORDER BY price DESC
LIMIT 2;
```

---

# Advanced Task Solutions

## Task 11: Price Greater Than 50000 and Name Contains Laptop

```sql
SELECT * FROM eproduct
WHERE price > 50000
AND name LIKE "%Laptop%";
```

---

## Task 12: Name is Apple OR Price Greater Than 100000

```sql
SELECT * FROM eproduct
WHERE name = "Apple"
OR price > 100000;
```

---

## Task 13: Exclude Samsung Product

```sql
SELECT * FROM eproduct
WHERE name != "Samsung";
```

---

## Task 14: Use IN Operator

```sql
SELECT * FROM eproduct
WHERE name IN ("Apple", "Samsung", "Acer Laptop");
```

---

## Task 15: Find Second Highest Priced Product

```sql
SELECT * FROM eproduct
ORDER BY price DESC
LIMIT 1 OFFSET 1;
```

---

# Aggregate Function Solutions

## Maximum Product Price

```sql
SELECT MAX(price) FROM eproduct;
```

---

## Minimum Product Price

```sql
SELECT MIN(price) FROM eproduct;
```

---

## Average Product Price

```sql
SELECT AVG(price) FROM eproduct;
```

---

## Total Sum of Prices

```sql
SELECT SUM(price) FROM eproduct;
```

---

## Count Total Products

```sql
SELECT COUNT(*) FROM eproduct;
```

---

# Update Query Solutions

## Update Samsung Price to 40000

```sql
UPDATE eproduct
SET price = 40000
WHERE name = "Samsung";
```

---

## Increase All Product Prices by 5000

```sql
UPDATE eproduct
SET price = price + 5000;
```

---

# Delete Query Solutions

## Delete Vio Laptop

```sql
DELETE FROM eproduct
WHERE name = "Vio Laptop";
```

---

# Bonus Task Solutions

## Insert 5 More Products

```sql
INSERT INTO eproduct(name, price)
VALUES
("HP Pavilion", 65000),
("Dell Inspiron", 72000),
("Asus ROG", 150000),
("MacBook Air", 110000),
("Realme Tablet", 25000);
```

---

## Products Starting with A

```sql
SELECT * FROM eproduct
WHERE name LIKE 'A%';
```

---

## Products Ending with Laptop

```sql
SELECT * FROM eproduct
WHERE name LIKE '%Laptop';
```

---

## Even Priced Products

```sql
SELECT * FROM eproduct
WHERE price % 2 = 0;
```

---

## Create Backup Table

```sql
CREATE TABLE eproduct_backup AS
SELECT * FROM eproduct;
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

# Mini Project Solution Ideas

## Electronic Product Management System

Possible Features:

* Add new products
* Search products
* Update product prices
* Delete products
* Filter products
* Generate reports

---

# Learning Outcome

After completing these solutions, you will understand:

* CRUD operations
* SQL filtering
* Aggregate functions
* Sorting and limiting
* Database management
* Query optimization basics

---

# Technologies Used

* SQL
* MySQL

---

# Author

SQL learning and practice project for beginners.
