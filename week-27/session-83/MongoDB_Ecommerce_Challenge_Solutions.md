# MongoDB E-Commerce Project - Challenge Task Solutions

## Solution 1: Find Products Costing More Than ₹20,000

```javascript
db.products.find({
  price: {
    $gt: 20000
  }
})
```

---

## Solution 2: Find All Customers From Mumbai

```javascript
db.customers.find({
  city: "Mumbai"
})
```

---

## Solution 3: Calculate Total Sales

```javascript
db.orders.aggregate([
{
  $group:{
    _id:null,
    totalSales:{
      $sum:"$totalAmount"
    }
  }
}
])
```

Expected Total:

```text
120000 + 33000 + 3500 = 156500
```

---

## Solution 4: Find Average Order Value

```javascript
db.orders.aggregate([
{
  $group:{
    _id:null,
    averageOrderValue:{
      $avg:"$totalAmount"
    }
  }
}
])
```

Expected Average:

```text
(120000 + 33000 + 3500) / 3
= 52166.67
```

---

## Solution 5: Find Top-Selling Product

```javascript
db.orders.aggregate([
{
  $unwind:"$products"
},
{
  $group:{
    _id:"$products.productId",
    totalQuantity:{
      $sum:"$products.quantity"
    }
  }
},
{
  $sort:{
    totalQuantity:-1
  }
},
{
  $limit:1
}
])
```

---

## Solution 6: Find Total Spending By Each Customer

```javascript
db.orders.aggregate([
{
  $group:{
    _id:"$customerId",
    totalSpent:{
      $sum:"$totalAmount"
    }
  }
}
])
```

---

## Solution 7: Join Products With Categories Using $lookup

```javascript
db.products.aggregate([
{
  $lookup:{
    from:"categories",
    localField:"categoryId",
    foreignField:"_id",
    as:"categoryInfo"
  }
}
])
```

Equivalent SQL:

```sql
SELECT *
FROM products
JOIN categories
ON products.categoryId = categories.id;
```

---

## Solution 8: Create Indexes On Product Name And Price

### Product Name Index

```javascript
db.products.createIndex({
  name:1
})
```

### Product Price Index

```javascript
db.products.createIndex({
  price:1
})
```

### Verify Indexes

```javascript
db.products.getIndexes()
```

---

## Solution 9: Compare Query Execution Before And After Indexing

### Before Index

```javascript
db.products.find({
  price:30000
}).explain("executionStats")
```

Look For:

```text
COLLSCAN
```

Meaning:

```text
Full collection scan.
MongoDB checks every document.
```

---

### Create Index

```javascript
db.products.createIndex({
  price:1
})
```

---

### After Index

```javascript
db.products.find({
  price:30000
}).explain("executionStats")
```

Look For:

```text
IXSCAN
```

Meaning:

```text
MongoDB uses index.
Much faster than COLLSCAN.
```

---

## Solution 10: Build The Same Aggregation Pipeline Using MongoDB Compass

### Step 1

Open:

```text
ecommerceDB
```

### Step 2

Open Collection:

```text
orders
```

### Step 3

Click:

```text
Aggregations
```

### Step 4

Add Stage

```json
{
 "$group":{
   "_id":null,
   "totalSales":{
      "$sum":"$totalAmount"
   }
 }
}
```

### Step 5

Click Run

Output:

```json
{
 "_id": null,
 "totalSales": 156500
}
```

---

# Bonus: Customer Spending Report

```javascript
db.orders.aggregate([
{
  $group:{
    _id:"$customerId",
    totalSpent:{
      $sum:"$totalAmount"
    }
  }
},
{
  $sort:{
    totalSpent:-1
  }
}
])
```

---

# Bonus: Product Wise Sales Report

```javascript
db.orders.aggregate([
{
 $unwind:"$products"
},
{
 $group:{
   _id:"$products.productId",
   sales:{
     $sum:{
       $multiply:[
         "$products.quantity",
         "$products.price"
       ]
     }
   }
 }
}
])
```
