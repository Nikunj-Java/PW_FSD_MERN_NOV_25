
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
- lib/db.js
```
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

export async function connectDB() {
  try {
    // Reuse existing connection
    if (mongoose.connection.readyState === 1) {
      console.log("Using existing MongoDB connection");
      return;
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}
```
- models/product.js
```
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
```
- app/page.js
```
import { connectDB } from "@/lib/db";

export default async function Home() {
  await connectDB();

  return (
    <div>
      <h1>MongoDB Connected Successfully!</h1>
    </div>
  );
}
```
## React Way for fetching and Updating Data
```
Form

↓

fetch()

↓

API

↓

Database
```
## Server Action Way
```
Form

↓

Server action
↓

Database
```
- app/actions/productAction.js
```
"use server";

import { connectDB } from '@/lib/db';
import product from '@/models/product';



export async function addProduct(formData){

    await connectDB();

    const name= formData.get('name');
    const price= formData.get('price');

    await product.create({name,price});

    //alert('Product Added Successfully');

    console.log('Product Added Successfully');
    
}
```

- update the page.js file
- page.js
```
import { connectDB } from "@/lib/db";
import {addProduct} from './actions/productAction';

export default async function Home() {
  //await connectDB();

  return (
    <div>
      {/* <h1>MongoDB Connected Successfully!</h1> */}
      <h1>Next.js + MongoDB + Server Action</h1>
      <form action={addProduct}>
        <input type="text" name="name" placeholder="Product Name" required />
        <input type="number" name="price" placeholder="Product Price" required />
        <button type="submit">Add Product</button>
      </form>

    </div>
  );
}
```
- now visit 
```
http://localhost:3000
```
## what is the benifit ?
```
Next.js intercepts the form submission.

Instead of sending the form to a URL,

it sends it directly to this function:
```