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