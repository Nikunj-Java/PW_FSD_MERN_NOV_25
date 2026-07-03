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