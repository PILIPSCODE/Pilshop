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
    <div className="h-screen flex justify-center font-poppins">
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
          <CartQty/>
          <Drawer in="Fav"/>
          <Link href="/">
            <FaHouseUser size={25} />
          </Link>
        </div>
      </div>
      <div className="w-7/12  conttainer-cart mt-20 relative z-0 text-black flex rounded-lg my-2 h-28 max-lg:w-10/12 ax-sm:w-11/12 max-[490px]:flex max-[490px]:flex-col max-[490px]:h-auto">
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 gap-2">
        {Favorite.map((e, index) => (
            <div key={index} className="flex flex-col   relative font-poppins">
              <div className="w-full h-full relative rounded-xl bg-white">
                <Image
                  alt={`product${index}`}
                  width={500}
                  height={300}
                  src={`${e.product.img}`}
                  className="w-full h-full  rounded-xl"
                />
                <div
                  onClick={() => HandleClick(e.product.id)}
                  className={`block p-1 rounded-md   bg-gray-900/50 text-white absolute bottom-2 right-2 z-10`}
                >
                  <AiFillCaretUp
                    className={`${
                      Details === e.product.id
                        ? "rotate-180  text-red-600"
                        : "rotate-0 text-blue-500"
                    } duration-300 text-3xl max-lg:text-xl`}
                  />
                </div>
              </div>
              <div
                className={`w-full text-white flex flex-col    backdrop-blur-sm h-full duration-300 absolute ${
                  Details === e.product.id ? "opacity-1 " : "opacity-0 "
                } bg-black/50  rounded-xl`}
              >
                <div className="w-full flex justify-center items-center mt-2 whitespace-normal break-words">
                  <h1 className=" p-2 bg-black rounded-full text-center w-10/12 md:text-xl text-xs ok">
                    {e.product.ProductName}
                  </h1>
                </div>
                <div className="w-full flex justify-between  items-center mt-2 whitespace-normal break-words">
                  <h1 className="ms-2  md:text-lg text-xs ok">
                    {Number(e.product.Price)} $
                  </h1>
                  <h1 className="me-2  md:text-lg text-xs ok">
                    {Number(e.product.Rate)} ⭐
                  </h1>
                </div>

                <div className="flex-grow flex justify-center max-sm:flex-col  items-center gap-2">
                  <div className="border p-1">
                    <AddtoCart AddQty={e.product} />
                  </div>
                </div>
                <div className="w-full h-24 relative rounded-t-full text-center max-sm:h-20 bg-black">
                  <h1 className="md:text-xl mb-3 text-xs">
                    Qty: {Number(e.product.stock)}
                  </h1>
                  <BuyNow product={e.product} />
                  <LikesProduct liked={e.product.id} product={e.product}/>
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
