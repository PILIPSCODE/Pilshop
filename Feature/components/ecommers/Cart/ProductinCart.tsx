"use client";
import Qty from "@/Feature/components/ecommers/Landing/Qty";
import { ifCek } from "@/redux/features/cart-Slice";
import { Carti, CartItems } from "@/redux/interface/Cart";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavbarCart from "./NavbarCart";
import CartEmpty from "../Nothing/CartEmpty";

const ProductinCart = () => {
  const [selectall, setSellectAll] = useState(false);
  const [inCart, setincart] = useState<CartItems[]>([]);

  const inCarto = useAppSelector((state) => state.CartReducer.cartItems);

  useEffect(() => {
    setincart(inCarto);
  }, [inCarto]);
  const dispact = useDispatch<Appdispatch>();
  const handelclick = (e: Carti) => {
    let cek = {
      id: e.id,
      iscek: selectall,
    };
    dispact(ifCek(cek));
  };
  return (
    <div >
      <NavbarCart select={selectall} setSelect={setSellectAll} />
      <div className="flex flex-col items-center pt-10  py-32">
        {inCart.length === 0 ? (
          <CartEmpty text={'Cart Empty no items in here'}/>
        ) : (
          inCart.map((el, index) => (
            <div
              data-theme="light"
              className="w-7/12 bg-base-200 conttainer-cart relative z-0 text-black shadow-md flex rounded-lg my-2 h-28 max-lg:w-10/12 ax-sm:w-11/12 max-[490px]:flex max-[490px]:flex-col max-[490px]:h-auto"
              key={index}
            >
              <div className="flex items-center ">
                <div
                  onClick={() => handelclick(el.product)}
                  className={`w-3 h-3 mx-1 border-black border ${
                    el.product.isChecked ? "bg-slate-500" : ""
                  }`}
                ></div>
              </div>
              <div className="w-28 h-full flex items-center justify-center  mx-1 max-[490px]:w-full  ">
                <Image
                  alt={`Product${index}`}
                  width={90}
                  height={500}
                  className=" max-h-24 max-[490px]:max-h-full object-cover rounded-md max-[490px]:w-1/2"
                  src={`${el.product.img}`}
                ></Image>
              </div>

              <div className="flex flex-grow  justify-around items-center">
                <div className="flex flex-col justify-center  my-2 max-[490px]:text-start w-40 max-[490px]:w-auto">
                  <h1 className=" max-xl:text-lg max-md:text-base max-[567px]:text-base  text-xl">
                    {el.product.ProductName}
                  </h1>
                  <h2>
                    Stock:{String(Number(el.product.stock) - Number(el.jmlh))}
                  </h2>
                </div>
                <div className="flex items-center   max-[567px]:text-sm ">
                  <Qty product={el.product} qty={el.jmlh} />
                </div>
                <h1 className="mx-2 w-20 max-[490px]:w-auto">
                  {String(Number(el.product.Price) * Number(el.jmlh))} $
                </h1>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductinCart;
