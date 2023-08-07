"use client"

import ProductinCart from "@/Feature/components/ecommers/Cart/ProductinCart"
import { FaCartPlus } from "react-icons/fa"


const Cart = () => {

  
   
  return (
    <div data-theme="cupcake" className="h-screen font-poppins " >
      <div className="max-lg:hidden absolute top-3 left-3 flex gap-2 items-center text-4xl bg-white p-2">
        <FaCartPlus/>
        <h1>Cart</h1>
      </div>
     <ProductinCart/>
    </div>
  )
}

export default Cart