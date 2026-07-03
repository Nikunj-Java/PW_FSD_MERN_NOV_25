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