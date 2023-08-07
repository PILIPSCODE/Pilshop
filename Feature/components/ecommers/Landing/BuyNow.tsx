'use client'
import React, { useEffect, useRef, useState } from "react";
import AddtoCart from "./AddtoCart";
import { QtySelector } from "@/redux/features/cart-Slice";
import {  useAppSelector } from "@/redux/store";
import ReviewUser from "./ReviewUser";
type products = {
  product: any;
};
const BuyNow = (proops: products) => {
  const modalref = useRef<HTMLDialogElement>(null);
  const [qty,setQty] = useState<any>(0)
  
  const qtys = useAppSelector((state) => QtySelector(state, proops.product.id))
  useEffect(() => {
     setQty(qtys)
  },[qtys])
  return (
    <div  className="font-poppin" >
      <dialog ref={modalref} className="rounded-2xl  c  bg-slate-900" data-theme="dark">
        <form
          method="dialog"
          className="h-5/6  max-sm:h-screen  w-full  "
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute  right-2 top-2">
            ✕
          </button>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
            <div className="relative max-w-full max-h-full">
              <img
                src={`${proops.product.img}`}
                className="  rounded-2xl w-full h-full lg:p-20 "
              />
              <h1 className="absolute bg-black/50 top-2 left-3 p-1 ">
                {Number(proops.product.Rate)} ⭐
              </h1>
            
            </div>
            <div className="text-start  lg:p-20">
              <div className="mx-2 flex flex-col items-start  gap-3">
                <h1 className=" border-b-2 text-2xl">
                  {proops.product.ProductName}
                </h1>
                <p className="text-lg bg-gradient-to-r  max-md:text-base from-slate-800 to-slate-900  p-2 rounded-2xl">
                 {proops.product.Description}
                </p>
                <h1 className="text-4xl max-md:text-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-2  rounded-2xl">{qty === undefined? proops.product.Price :proops.product.Price * Number(qty) } $</h1>
                <h1 className="bg-black/50  p-1 ">Stock: {qty === undefined? Number(proops.product.stock) : Number(proops.product.stock) - Number(qty)}</h1>
                <div className="flex gap-2 items-center ">
                  <div className="btn btn-success ">
                    <AddtoCart AddQty={proops.product} />{" "}
                  </div>
                  <div className="btn btn-success ">Buy Now</div>
                </div>
              </div>
            </div>
          </div>
          
              <ReviewUser/>
        </form>
      </dialog>
      <button
        onClick={() => modalref.current?.showModal()}
        className=" bg-green-600 text-white p-1 md:text-xl text-xs"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNow;
