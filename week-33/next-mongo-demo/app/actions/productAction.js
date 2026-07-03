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