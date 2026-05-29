# MongoDB Aggregation Tasks and Solutions

# Database
shopDB

# Collection
orders

---

# Insert Sample Data

```javascript
use shopDB

db.orders.insertMany([
  {
    customer: "Rahul",
    city: "Mumbai",
    product: "Laptop",
    category: "Electronics",
    quantity: 2,
    price: 50000,
    status: "Delivered"
  },
  {
    customer: "Amit",
    city: "Delhi",
    product: "Mobile",
    category: "Electronics",
    quantity: 1,
    price: 30000,
    status: "Pending"
  },
  {
    customer: "Neha",
    city: "Mumbai",
    product: "Shoes",
    category: "Fashion",
    quantity: 3,
    price: 2000,
    status: "Delivered"
  },
  {
    customer: "Priya",
    city: "Pune",
    product: "Watch",
    category: "Fashion",
    quantity: 2,
    price: 5000,
    status: "Delivered"
  },
  {
    customer: "Karan",
    city: "Delhi",
    product: "Tablet",
    category: "Electronics",
    quantity: 1,
    price: 25000,
    status: "Cancelled"
  }
])
```

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
Find Pending orders.

## Task 6
Calculate total sales category-wise.

## Task 7
Calculate average product price category-wise.

## Task 8
Count total orders city-wise.

## Task 9
Find highest product price category-wise.

## Task 10
Find lowest product price category-wise.

## Task 11
Display only customer and product.

## Task 12
Rename customer field to customerName.

## Task 13
Hide _id field.

## Task 14
Display customer, city and price only.

## Task 15
Calculate totalAmount using quantity × price.

## Task 16
Create message:
Rahul ordered Laptop

## Task 17
Convert customer names into uppercase.

## Task 18
Add 500 into every product price.

## Task 19
Find delivered orders and calculate category-wise sales.

## Task 20
Find Electronics products and display only customer and product.

## Task 21
Find Mumbai orders and calculate total sales.

## Task 22
Find delivered Fashion products and calculate average price.

## Task 23
Sort orders by price ascending.

## Task 24
Sort orders by price descending.

## Task 25
Display top 2 expensive products.

## Task 26
Skip first 2 records.

## Task 27
Calculate total company sales.

## Task 28
Find customer with highest-priced product.

## Task 29
Find total quantity sold category-wise.

## Task 30
Find total delivered orders.

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
    $match: {
      status: "Pending"
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
      totalSales: {
        $sum: "$price"
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
      _id: "$category",
      averagePrice: {
        $avg: "$price"
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
      _id: "$city",
      totalOrders: {
        $sum: 1
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
      highestPrice: {
        $max: "$price"
      }
    }
  }
])
```

## Solution 10

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

## Solution 11

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

## Solution 12

```javascript
db.orders.aggregate([
  {
    $project: {
      customerName: "$customer"
    }
  }
])
```

## Solution 13

```javascript
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      _id: 0
    }
  }
])
```

## Solution 14

```javascript
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      city: 1,
      price: 1,
      _id: 0
    }
  }
])
```

## Solution 15

```javascript
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      totalAmount: {
        $multiply: [
          "$quantity",
          "$price"
        ]
      }
    }
  }
])
```

## Solution 16

```javascript
db.orders.aggregate([
  {
    $project: {
      message: {
        $concat: [
          "$customer",
          " ordered ",
          "$product"
        ]
      }
    }
  }
])
```

## Solution 17

```javascript
db.orders.aggregate([
  {
    $project: {
      customerUpper: {
        $toUpper: "$customer"
      }
    }
  }
])
```

## Solution 18

```javascript
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      updatedPrice: {
        $add: [
          "$price",
          500
        ]
      }
    }
  }
])
```

## Solution 19

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "Delivered"
    }
  },
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

## Solution 20

```javascript
db.orders.aggregate([
  {
    $match: {
      category: "Electronics"
    }
  },
  {
    $project: {
      customer: 1,
      product: 1,
      _id: 0
    }
  }
])
```

## Solution 21

```javascript
db.orders.aggregate([
  {
    $match: {
      city: "Mumbai"
    }
  },
  {
    $group: {
      _id: "$city",
      totalSales: {
        $sum: "$price"
      }
    }
  }
])
```

## Solution 22

```javascript
db.orders.aggregate([
  {
    $match: {
      category: "Fashion",
      status: "Delivered"
    }
  },
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

## Solution 23

```javascript
db.orders.aggregate([
  {
    $sort: {
      price: 1
    }
  }
])
```

## Solution 24

```javascript
db.orders.aggregate([
  {
    $sort: {
      price: -1
    }
  }
])
```

## Solution 25

```javascript
db.orders.aggregate([
  {
    $sort: {
      price: -1
    }
  },
  {
    $limit: 2
  }
])
```

## Solution 26

```javascript
db.orders.aggregate([
  {
    $skip: 2
  }
])
```

## Solution 27

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: null,
      companySales: {
        $sum: "$price"
      }
    }
  }
])
```

## Solution 28

```javascript
db.orders.aggregate([
  {
    $sort: {
      price: -1
    }
  },
  {
    $limit: 1
  }
])
```

## Solution 29

```javascript
db.orders.aggregate([
  {
    $group: {
      _id: "$category",
      totalQuantity: {
        $sum: "$quantity"
      }
    }
  }
])
```

## Solution 30

```javascript
db.orders.aggregate([
  {
    $match: {
      status: "Delivered"
    }
  },
  {
    $group: {
      _id: "$status",
      totalDelivered: {
        $sum: 1
      }
    }
  }
])
```
