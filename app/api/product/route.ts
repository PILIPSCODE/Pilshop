import { AddProduct,  GetProduct } from "@/prisma/product";
import { product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";




export const GET = async (req:Request) => {
  try {
    const data = await GetProduct();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
};
export const POST = async (req:Request) => {
  try {
 const body:product = await req.json()
 
 const dataproduct = await AddProduct(body);

 return NextResponse.json(dataproduct)
 
  } catch (error) {
    console.log(error);
  }
};
