import { NextResponse } from "next/server";
import {  DeleteProduct, UpdateProduct } from "@/prisma/product";
import { product } from "@prisma/client";


export const DELETE = async (req:Request,{params}:{params:{id:string}}) => {
  try {
  
 const dataproduct = await DeleteProduct(String(params.id))

 return NextResponse.json({msg:"Product Deleted"}) 
 
  } catch (error) {
    console.log(error);
  }
};
export const PUT = async (req:Request,{params}:{params:{id:string}}) => {
  
  try {
 const body:product = await req.json()
 const dataproduct = await UpdateProduct(String(params.id),body)

 return NextResponse.json(dataproduct) 
 
  } catch (error) {
    console.log(error);
  }
};
