"use client";
import React, { useEffect, useState } from "react";
import { Carti } from "@/redux/interface/Cart";

import { increment,QtySelector } from "@/redux/features/cart-Slice";
import { useDispatch } from "react-redux";
import { Appdispatch, useAppSelector } from "@/redux/store";
import Qty from "./Qty";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-hot-toast";

type ProductFilt = {
  AddQty: Carti;
};
const AddtoCart = (props: ProductFilt) => {
const [qty,setQty] = useState<Number>(0)
  const qtys = useAppSelector((state) => QtySelector(state, props.AddQty.id));
  const HandletoCart = (e: Carti) => {
    dispact(increment(e));
    toast.success('Added to card')
  };
  const dispact = useDispatch<Appdispatch>();
  
  useEffect(() =>{
    setQty(Number(qtys))
  },[qtys])


  if (!qty)
    return (
      <div
      className="flex items-center gap-1 border  border-black px-1"
        onClick={() => HandletoCart(props.AddQty)}
      >
        <FaCartPlus className="text-2xl   max-sm:text-base "/>
      </div>
    );
  return (
    <>
     <Qty  qty={qty} product={props.AddQty}/>
    </>
  );
};

export default AddtoCart ;
