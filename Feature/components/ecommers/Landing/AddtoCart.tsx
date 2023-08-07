"use client";
import React, { useEffect, useState } from "react";
import { Carti } from "@/redux/interface/Cart";

import { increment,QtySelector } from "@/redux/features/cart-Slice";
import { useDispatch } from "react-redux";
import { Appdispatch, useAppSelector } from "@/redux/store";
import Qty from "./Qty";
import { FaCartPlus } from "react-icons/fa";

type ProductFilt = {
  AddQty: Carti;
};
const AddtoCart = (props: ProductFilt) => {
const [qty,setQty] = useState<Number>(0)
  const qtys = useAppSelector((state) => QtySelector(state, props.AddQty.id));
  const HandletoCart = (e: Carti) => {
    dispact(increment(e));
  };
  const dispact = useDispatch<Appdispatch>();
  
  useEffect(() =>{
    setQty(Number(qtys))
  },[qtys])


  if (!qty)
    return (
      <div
      className="flex items-center gap-1"
        onClick={() => HandletoCart(props.AddQty)}
      >
        <FaCartPlus className="text-2xl max-sm:text-sm "/>
        <h1 className="md:text-xl text-xs">Add to Cart</h1>
      </div>
    );
  return (
    <>
     <Qty qty={qty} product={props.AddQty}/>
    </>
  );
};

export default AddtoCart ;
