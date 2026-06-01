# MongoDB E-Commerce Project

## Learning Objectives

- Understand MongoDB data modeling for e-commerce systems
- Design collections for products, categories, customers, and orders
- Execute complex queries and aggregations
- Optimize query performance using indexes
- Use Mongo Shell and MongoDB Compass

---

# Step 1: Create Database

```javascript
use ecommerceDB
```

# Collections

- categories
- products
- customers
- orders

---

# Categories

```javascript
db.categories.insertMany([
{ _id:1, name:"Electronics" },
{ _id:2, name:"Fashion" },
{ _id:3, name:"Books" }
])
```

# Products

```javascript
db.products.insertMany([
{ _id:101, name:"Laptop", price:60000, stock:50, categoryId:1 },
{ _id:102, name:"Mobile", price:30000, stock:100, categoryId:1 },
{ _id:103, name:"T-Shirt", price:1000, stock:200, categoryId:2 },
{ _id:104, name:"MongoDB Book", price:700, stock:150, categoryId:3 }
])
```

# Customers

```javascript
db.customers.insertMany([
{ _id:1001, name:"Rahul", email:"rahul@gmail.com", city:"Mumbai" },
{ _id:1002, name:"Neha", email:"neha@gmail.com", city:"Delhi" },
{ _id:1003, name:"Amit", email:"amit@gmail.com", city:"Pune" }
])
```

# Orders

```javascript
db.orders.insertMany([
{
 _id:5001,
 customerId:1001,
 totalAmount:120000
},
{
 _id:5002,
 customerId:1002,
 totalAmount:33000
},
{
 _id:5003,
 customerId:1003,
 totalAmount:3500
}
])
```

# Queries

```javascript
db.products.find({ categoryId:1 })
db.products.find({ price:{ $gt:10000 }})
db.customers.find({ city:"Mumbai" })
```

# Aggregations

## Total Sales

```javascript
db.orders.aggregate([
{
 $group:{
  _id:null,
  totalSales:{ $sum:"$totalAmount" }
 }
}
])
```

## Average Order Value

```javascript
db.orders.aggregate([
{
 $group:{
  _id:null,
  avgOrder:{ $avg:"$totalAmount" }
 }
}
])
```

## Top Selling Product

```javascript
db.orders.aggregate([
{ $unwind:"$products" },
{
 $group:{
  _id:"$products.productId",
  totalQty:{ $sum:"$products.quantity" }
 }
},
{ $sort:{ totalQty:-1 }},
{ $limit:1 }
])
```

# Indexing

```javascript
db.products.createIndex({ name:1 })
db.products.createIndex({ price:1 })
db.products.createIndex({ categoryId:1, price:1 })
db.products.getIndexes()
```

# MongoDB Compass

Connection:

mongodb://localhost:27017

Filter Example:

```json
{
 "price": {
  "$gt":10000
 }
}
```

# Challenge Tasks

1. Find products costing more than ₹20,000.
2. Find all customers from Mumbai.
3. Calculate total sales.
4. Find average order value.
5. Find top-selling product.
6. Find total spending by each customer.
7. Join products with categories using $lookup.
8. Create indexes on product name and price.
9. Compare query execution before and after indexing.
10. Build the aggregation pipeline in Compass.
