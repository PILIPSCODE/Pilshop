"use client";
import React, { useEffect, useRef, useState } from "react";
import AddtoCart from "./AddtoCart";
import { QtySelector } from "@/redux/features/cart-Slice";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
type products = {
  product: any;
};
const BuyNow = (proops: products) => {
  const [qty, setQty] = useState<any>(0);

  const qtys = useAppSelector((state) => QtySelector(state, proops.product.id));
  useEffect(() => {
    setQty(qtys);
  }, [qtys]);
  return (
    <>
      <div className="font-poppin">
        <div className="flex items-start mt-10">
          <div className="relative h-96 w-96 ">
            <Image
              alt="product"
              fill
              style={{ objectFit: "contain" }}
              src={`${proops.product.img}`}
              className="  rounded-2xl  "
            />
          </div>
          <div className="text-start  lg:px-5">
            <div className="mx-2 flex flex-col items-start ">
                <h1>{Number(proops.product.Rate)} ⭐</h1>
              <h1 className="text-xl">{proops.product.Tag}</h1>
              <h1 className="  text-4xl font-bold my-4">
                {proops.product.ProductName}
              </h1>
              <h1 className="text-4xl mb-4 font-bold max-md:text-2xl bg-gradient-to-r   rounded-2xl">
                {qty === undefined
                  ? proops.product.Price
                  : proops.product.Price * Number(qty)}{" "}
                $
              </h1>
              <div className="flex gap-2 items-center mb-4">
                <AddtoCart AddQty={proops.product} />{" "}
              </div>
              <div>
                <span className="text-lg">Description</span>
                <p className="text-lg bg-gradient-to-r  max-md:text-base rounded-2xl">
                  {proops.product.Description}
                </p>
              </div>

              <h1 className=" p-1 ">
                Stock:{" "}
                {qty === undefined
                  ? Number(proops.product.stock)
                  : Number(proops.product.stock) - Number(qty)}
              </h1>
            </div>
          </div>
        </div>

        {/* <ReviewUser /> */}
      </div>
    </>
  );
};

export default BuyNow;

/* y */
