# MongoDB Aggregation Tasks and Solutions

# Database
shopDB

# Collection
orders

---

# TASKS

## Task 1
Find only delivered orders.

## Task 2
Find only Electronics products.

## Task 3
Find orders where price is greater than 10000.

## Task 4
Find Mumbai orders.

## Task 5
Calculate total sales category-wise.

## Task 6
Calculate average product price category-wise.

## Task 7
Count total orders city-wise.

## Task 8
Find highest product price category-wise.

## Task 9
Find lowest product price category-wise.

## Task 10
Display only customer and product.

## Task 11
Rename customer field to customerName.

## Task 12
Hide _id field.

## Task 13
Calculate totalAmount using quantity × price.

## Task 14
Create message:
Rahul ordered Laptop

## Task 15
Convert customer names into uppercase.

## Task 16
Add 500 into every product price.

## Task 17
Find delivered orders and calculate category-wise sales.

## Task 18
Find Electronics products and display only customer and product.

## Task 19
Find Mumbai orders and calculate total sales.

## Task 20
Find delivered Fashion products and calculate average price.

---

# SOLUTIONS

## Solution 1

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "Delivered"
    }
  }
])
```

## Solution 2

```javascript
db.orders.aggregate([
  {
    $match: {
      category: "Electronics"
    }
  }
])
```

## Solution 3

```javascript
db.orders.aggregate([
  {
    $match: {
      price: {
        $gt: 10000
      }
    }
  }
])
```

## Solution 4

```javascript
db.orders.aggregate([
  {
    $match: {
      city: "Mumbai"
    }
  }
])
```

## Solution 5

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: {
        $sum: "$price"
      }
    }
  }
])
```

## Solution 6

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: {
        $avg: "$price"
      }
    }
  }
])
```

## Solution 7

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$city",
      totalOrders: {
        $sum: 1
      }
    }
  }
])
```

## Solution 8

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$category",
      highestPrice: {
        $max: "$price"
      }
    }
  }
])
```

## Solution 9

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$category",
      lowestPrice: {
        $min: "$price"
      }
    }
  }
])
```

## Solution 10

```javascript
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      product: 1,
      _id: 0
    }
  }
])
```
