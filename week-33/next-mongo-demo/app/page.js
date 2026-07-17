import { connectDB } from "@/lib/db";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "./actions/productAction";
import Product from "@/models/product";

export default async function Home() {
  await connectDB();

  const products = await Product.find().lean();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto py-10 px-6">
          <h1 className="text-4xl font-bold">
            Next.js CRUD
          </h1>

          <p className="mt-2 text-indigo-100">
            Server Actions + MongoDB + Tailwind CSS
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Add Product */}

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">

          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Add New Product
          </h2>

          <form
            action={addProduct}
            className="grid md:grid-cols-3 gap-4"
          >

            <input
              type="text"
              name="name"
              required
              placeholder="Product Name"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="number"
              name="price"
              required
              placeholder="Price"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
            >
              Add Product
            </button>

          </form>

        </div>

        {/* Product Count */}

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Products
          </h2>

          <span className="bg-indigo-600 text-white px-4 py-2 rounded-full">
            {products.length} Items
          </span>

        </div>

        {/* Product Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((p) => (

            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6"
            >

              <div className="flex justify-between items-center mb-5">

                <div>

                  <h3 className="text-2xl font-bold text-gray-800">
                    {p.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Product Details
                  </p>

                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                  ₹ {p.price}
                </div>

              </div>

              {/* Update */}

              <form
                action={updateProduct.bind(null, p._id.toString())}
                className="space-y-4"
              >

                <input
                  type="text"
                  name="name"
                  defaultValue={p.name}
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="number"
                  name="price"
                  defaultValue={p.price}
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Update Product
                </button>

              </form>

              {/* Delete */}

              <form
                action={deleteProduct.bind(null, p._id)}
                className="mt-4"
              >

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Delete Product
                </button>

              </form>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}