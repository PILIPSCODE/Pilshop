"use client";
import React, { useEffect, useState} from "react";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import { AiFillCaretUp } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import Link from "next/link";
import { FaHouseUser, FaTrash } from "react-icons/fa";
import {  SearchProductCart, unFav } from "@/redux/features/cart-Slice";
import BuyNow from "../Landing/BuyNow";
import AddtoCart from "../Landing/AddtoCart";
import LikesProduct from "../Landing/LikesProduct";
import Drawer from "../Cart/Drawer";
import { Wishlist } from "@/redux/interface/Cart";
import CartQty from "../Landing/CartQty";
const Favorite = () => {
  const [Details, setDetails] = useState("");
  const [Favorite,setFavorite] = useState<Wishlist[]>([])
  const [search, setSearch] = useState('');


  const HandleClick = (e: String) => {
    Details === e ? setDetails("") : setDetails(`${e}`);
  };
  const Favorites = useAppSelector((state) => state.CartReducer.Wishlist);
  useEffect(() => {

    setFavorite(Favorites)
  },[Favorites]);


  const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispact(SearchProductCart({Filter:e.target.value,in:""}))
    setSearch(e.target.value)
  }
  const dispact = useDispatch<Appdispatch>();
 
  return (
    <div className="h-screen flex justify-center font-poppins overflow-y-scroll">
      <div className="w-7/12 bg-base-200 conttainer-cart fixed z-40 flex rounded-lg  h-16 max-lg:w-10/12 max-sm:w-11/12 shadow-md shadow-slate-700">
        <div onClick={() => dispact(unFav())} className="flex items-center gap-3 mx-2">
          <button  className="bg-error p-1 rounded-lg pointer-events-none"><FaTrash size={25}/></button>
          <h1 className=" max-md:hidden bg-error p-1 rounded-lg pointer-events-none">Unfavorite All</h1>
        </div>
        <div className="flex h-full flex-grow items-center">
          <input
            type="text"
            value={search}
            placeholder="Search And Enter"
            className="w-10/12 h-10 max-sm:w-full rounded-lg p-2"
               onChange={HandleChange}
          />
        </div>
        <div className="flex items-center justify-center gap-3 mx-5">
          <Link href="/Cart">
          <CartQty/>
          </Link>
          <Drawer in="Fav"/>
          <Link href="/">
            <FaHouseUser size={25} />
          </Link>
        </div>
      </div>
      <div className="w-7/12  h-auto conttainer-cart mt-20 relative z-0 text-black rounded-lg my-2 max-lg:w-10/12 max-sm:w-11/12 ">
        <div className="grid grid-cols-4 max-xl:grid-cols-3 w-full max-md:grid-cols-2 gap-2">
        {Favorite.map((e, index) => (
             <div
             key={index}
             className="flex flex-col w-full overflow-hidden border border-black  relative font-poppins"
           >
             <div className="w-full h-96 bg-white  max-sm:h-72 relative  ">
               <div
                 className={`duration-150 ${
                   Details === e.product.id ? "h-full" : "h-4/6 max-sm:h-3/5"
                 } relative`}
               >
                 <Image
                   alt={`product${index}`}
                   fill
                   src={`${e.product.img}`}
                   className="w-full h-full object-cover bg-gray-400 "
                 />
               </div>
            
               <div className="absolute top-2 right-3  z-50">
                 <LikesProduct liked={e.product.id} product={e.product} />
               </div>
               <div className=" bg-white relative h-full z-40">
                 <div className="flex flex-col gap-1 justify-end px-2">
                   <h1 className="  md:text-base max-md:text-sm max-sm:text-xs ok">
                     {e.product.ProductName}
                   </h1>
                   <div className="flex gap-3">
                   
                       <AddtoCart AddQty={e.product} />
                   
                     <BuyNow product={e.product} />
                   </div>
                   <div className="flex justify-between items-center">
                     <h1 className=" md:text-base text-xs ok">
                       {Number(e.product.Rate)} ⭐ | Selled 10 k
                     </h1>
                   </div>
                 </div>
               </div>
             </div>

             <div
               onClick={() => HandleClick(e.product.id)}
               className={`w-full text-white flex flex-col ${
                 Details === e.product.id ? "opacity-0" : "opacity-100"
               }  h-full duration-300 absolute bg-black/50 justify-between`}
             >
               <div className="flex mt-3 ">
                 <h1 className="px-2  bg-black md:text-lg text-xs ok">
                   {Number(e.product.Price)} $
                 </h1>
               </div>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
