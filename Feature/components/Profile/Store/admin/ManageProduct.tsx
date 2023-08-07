"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import {  BsTrash } from "react-icons/bs";
import {
  FaClipboardList,
  FaDollarSign,
  FaPencilAlt,
} from "react-icons/fa";
import { PiBeerBottle } from "react-icons/pi";
import EditProduct from "./EditProduct";
import CartEmpty from "@/Feature/components/ecommers/Nothing/CartEmpty";
import Search from "./Search";
const ManageProduct = (params: { params: string; products: any }) => {


  const router = useRouter();
  const handleDelete = async (id: string) => {
    const res = await axios.delete(`/api/product/${id}`);
    if (res.status === 200) {
      router.refresh();
      toast.success("Deleted");
    } else {
      toast.error(res.data);
    }
  };

  return (
    <>
      <Search/>
    <div className="font-popins bg-base-300 p-2 h-[80vh] rounded-lg">
      <div className={`grid grid-cols-4  max-md:grid-cols-2 gap-1  px-2  text-gray-800  ${params.products?.length >= 1? "" : "hidden"}`}>
        <div className="flex justify-start py-2 mx-3  items-center gap-1  ">
          <PiBeerBottle size={25} />
          <h1>Product</h1>
        </div>
        <div className="flex justify-center py-2  max-md:hidden  items-center gap-1  ">
          <FaDollarSign size={25} />
          <h1>Price</h1>
        </div>
        <div className="flex justify-center py-2 max-md:hidden  items-center gap-1 ">
          <FaClipboardList size={25} />
          <h1>Stock</h1>
        </div>
        <div className="flex justify-end py-2 items-center gap-1  ">
          <FaPencilAlt size={25} />
          <h1>Actions</h1>
        </div>
      </div> 

        {params.products?.length > 0 ?
      params.products.map((product: any, index: any) => (
            <div
              key={index}
              className="grid grid-cols-4 relative text-gray-800 font-bold max-md:grid-cols-2 gap-1 bg-base-200 rounded-lg  my-2 "
            >
              <div className="flex justify-start mx-3 py-2 items-center gap-1">
               
                <Image width={40} height={58} alt="product" src={product.img} />
                <h1>{product.ProductName}</h1>
                
              </div>
              <div className="flex justify-center max-md:hidden py-2 items-center gap-1 ">
                <h1>{product.Price} $</h1>
              </div>
              <div className="flex justify-center max-md:hidden py-2 items-center gap-1">
                <h1>{product.stock}</h1>
              </div>
              <div className="flex justify-end py-2 items-center gap-2 ">
                <EditProduct product={product} />
                <div
                  className="bg-base-300 p-2 rounded-lg"
                  onClick={() => handleDelete(product.id)}
                >
                  <BsTrash className="text-red-600" />
                </div>
              </div>
            </div>
      
          )
        
      ) : <div className="w-full h-full items-center flex justify-center"><CartEmpty text={'no product in here, Add and Sells Your Product'}/></div>
      }
      <div className="fixed bottom-7 right-7">
        <Link href={`/admin/ManageProduct/actions/addProduct`}>
          <div className="text-white bg-black px-3 py-1 text-2xl rounded-md">
            +
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default ManageProduct;
