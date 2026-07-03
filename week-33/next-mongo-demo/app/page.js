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