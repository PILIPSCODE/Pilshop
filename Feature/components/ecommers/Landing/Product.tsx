"use client";
import React, { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import AddtoCart from "@/Feature/components/ecommers/Landing/AddtoCart";
import Image from "next/image";
import dynamic from "next/dynamic";
const BuyNow = dynamic(() => import("./BuyNow"), { ssr: false });
// import BuyNow from "./BuyNow";

import LikesProduct from "./LikesProduct";
import Drawer from "../Cart/Drawer";
type ProductFilt = {
  filterproduct: String;
  product: any;
};
const Product = (props: ProductFilt) => {
  const [Details, setDetails] = useState("");
  const HandleClick = (e: String) => {
    Details === e ? setDetails("") : setDetails(`${e}`);
  };

  const limitProduct15 = props.product.slice(0, 15);

  return (
    <div className="w-11/12 mx-auto gap-6 font-poppins mt-3 mb-6 ">
      <div className="bg-blue-300 relative px-4 flex gap-3 items-center justify-between">
        <h1 className=" py-4 text-2xl max-md:text-base rounded-t-lg w-full  font-bold ">
          Product Recommend For You
        </h1>
        <Drawer in={""} />
      </div>
      <div className="grid-cols-3 w-full p-3 grid max-[583px]:grid-cols-2 md:grid-cols-3   max-lg:grid-cols-3 min-[1415px]:grid-cols-5 min-[1155px]:grid-cols-4 gap-3 md:gap-5 ">
        {limitProduct15
          .filter((e: any) => {
            console.log(e);
            if (e.Tag === props.filterproduct) {
              return e;
            } else if (props.filterproduct === "Untuk Anda") {
              return e;
            }
          })
          .map((e: any, index: any) => (
            <div
              key={index}
             
              className="flex flex-col w-full overflow-hidden border  border-black  relative font-poppins"
            >
              <div className="w-full h-96 bg-white  max-sm:h-72 relative max-[400px]:h-64 ">
                <div
                  className={`duration-150 ${
                    Details === e.id ? "h-full" : "h-4/6 max-sm:h-3/5"
                  } relative`}
                >
                  <Image
                    alt={`product${index}`}
                    fill
                    src={`${e.img}`}
                    className="w-full h-full object-cover bg-gray-400 "
                  />
                </div>
             
                <div className="absolute top-2 right-3  z-50">
                  <LikesProduct liked={e.id} product={e} />
                </div>
                <div className=" bg-white relative h-full z-40">
                  <div className="flex flex-col gap-1 justify-end px-2">
                    <h1 className="  md:text-base max-md:text-sm max-sm:text-xs  ok">
                      {e.ProductName}
                    </h1>
                    <div className="flex gap-3">
                    
                        <AddtoCart AddQty={e} />
                    
                      <BuyNow product={e} />
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className=" md:text-base text-xs ok">
                        {Number(e.Rate)} ⭐ | Selled 10 k
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div
               onClick={() => HandleClick(e.id)}
                className={`w-full text-white flex flex-col ${
                  Details === e.id ? "opacity-0" : "opacity-100"
                }  h-full duration-300 absolute bg-black/50 justify-between`}
              >
                <div className="flex mt-3 ">
                  <h1 className="px-2  bg-black md:text-lg text-xs ok">
                    {Number(e.Price)} $
                  </h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
{
  /* <div className="w-full flex justify-center items-center mt-2 whitespace-normal break-words">
<h1 className=" p-2 bg-black rounded-full text-center w-10/12 md:text-base text-xs ok">
  {e.ProductName}
</h1>
</div>
<div className="w-full flex justify-between  items-center mt-2 whitespace-normal break-words">
<h1 className="ms-2  md:text-lg text-xs ok">
  {Number(e.Price)} $
</h1>
<h1 className="me-2  md:text-lg text-xs ok">
  {Number(e.Rate)} ⭐
</h1>
</div>

<div className="flex-grow flex justify-center max-sm:flex-col  items-center gap-2">

</div>
<div className="w-full h-24 relative  text-center max-sm:h-14 ">

<BuyNow product={e} />
</div> */
}

// <h1 className="md:text-base   text-xs">
// Qty: {Number(e.stock)}
// </h1>
