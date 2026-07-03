
# What is Server Action ?
- Before Server Action , when a user clicked a button like addProduct, flow will look like
```
Browser
   │
   ▼
Fetch API
   │
   ▼
API Route (/api/products)
   │
   ▼
Database
```
- You had to Create 
    API Routes
    Fetch Calls
    JSON Parsing
    Response Handling
- a Lot of Boilerplate we need to prepare

## Server Action Simplify the process
```
Browser
   │
   ▼
Server Action
   │
   ▼
Database
```
# Step: 1 Create NEXT.js Application
```
npx create-next-app@latest next-mongodb-demo
```
- install mongoose
```
npm install mongoose
```
# Step:2 Project Structure
```
next-mongo-demo
|
|-- app
|     |----page.js
|
|-- lib
|     |---db.js
|
|--models
|     |---product.js
|
|--env.local
|
|package.json

```