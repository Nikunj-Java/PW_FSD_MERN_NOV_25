
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
## Get The Product List
- update the 
- app/page.js
```
import { connectDB } from "@/lib/db";
import {addProduct} from './actions/productAction';
import product from "@/models/product";
```
```
await connectDB();
const products= await product.find();
```

```

<h2>Products List</h2>
      <ul>
        {products.map((p)=>(
          <li key={p._id}>{p.name} - Rs.{p.price} /-</li>
        ))}
      </ul>

```
- Full code:
```
import { connectDB } from "@/lib/db";
import {addProduct} from './actions/productAction';
import product from "@/models/product";

export default async function Home() {
  await connectDB();

  const products= await product.find();

  return (
    <div>
      {/* <h1>MongoDB Connected Successfully!</h1> */}
      <h1>Next.js + MongoDB + Server Action</h1>
      <form action={addProduct}>
        <input type="text" name="name" placeholder="Product Name" required />
        <input type="number" name="price" placeholder="Product Price" required />
        <button type="submit">Add Product</button>
      </form>
      <hr></hr>
      <h2>Products List</h2>
      <ul>
        {products.map((p)=>(
          <li key={p._id}>{p.name} - Rs.{p.price} /-</li>
        ))}
      </ul>

    </div>
  );
}
```
- now visit home page
```
http://localhost:3000
```
- Here You will get the List of ALL Products Available

## Full CRUD Operation
- app/actions/productAction.js
```
"use server";

import { connectDB } from "@/lib/db";
import Product from "@/models/product";
import { revalidatePath } from "next/cache";

// ================= CREATE =================
export async function addProduct(formData) {
  await connectDB();

  const name = formData.get("name");
  const price = Number(formData.get("price"));

  await Product.create({
    name,
    price,
  });

  revalidatePath("/");
}

// ================= UPDATE =================
export async function updateProduct(id, formData) {
  await connectDB();

  const name = formData.get("name");
  const price = Number(formData.get("price"));

  await Product.findByIdAndUpdate(id, {
    name,
    price,
  });

  revalidatePath("/");
}

// ================= DELETE =================
export async function deleteProduct(id) {
  await connectDB();

  await Product.findByIdAndDelete(id);

  revalidatePath("/");
}
```
- app/page.js
```
import { connectDB } from "@/lib/db";
import {addProduct,deleteProduct,updateProduct} from './actions/productAction';
import product from "@/models/product";

export default async function Home() {
  await connectDB();

  const products= await product.find();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Next.js CRUD using Server Actions</h1>

      {/* CREATE */}

      <form action={addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          required
        />

        <button>Add Product</button>
      </form>

      <hr />

      <h2>Products</h2>

      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          {/* UPDATE */}

          <form action={updateProduct.bind(null, p._id)}>
            <input
              name="name"
              defaultValue={p.name}
            />

            <input
              name="price"
              type="number"
              defaultValue={p.price}
            />

            <button type="submit">
              Update
            </button>
          </form>

          <br />

          {/* DELETE */}

          <form action={deleteProduct.bind(null, p._id)}>
            <button
              type="submit"
              style={{
                background: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
```

## MongoDB ATLAS Connectivity
- go to> MongodbAtlas> Create Cluster > Copy the URL & Password > Allow Network access
- MongoDB URI
```
mongodb+srv://<username>:<password>@cluster0.hdejldr.mongodb.net/next-mongo-demo?retryWrites=true&w=majority
```
- update in .env.local file and Run the Application Again
- Now this time the data will be stored in MongoDB Atlas Cluster.
