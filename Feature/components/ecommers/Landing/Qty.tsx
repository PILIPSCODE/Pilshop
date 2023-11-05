import React from "react";

import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import { increment, decrement } from "@/redux/features/cart-Slice";
import { toast } from "react-hot-toast";

type ProductFilt = {
  product: any;
  qty: Number;
};
const Qty = (props: ProductFilt) => {
  const dispact = useDispatch<Appdispatch>();

  const handleMin = (e: any) => {
    dispact(decrement(e));
    if(props.qty === 1){
      toast.success("Remove product from cart")
    }
  };
  const hanndlePlus = (e: any) => {
    dispact(increment(e));
  };

  return (
    <div className={`opacity-100 border px-1 border-black text-xl max-sm:text-xs  flex rounded-md gap-5 items-center `}>
      <div
        onClick={() => handleMin(props.product)}
        className=""
      >
        -
      </div>
      <h1 className="">
        {String(props.qty)}
      </h1>
      <div
        onClick={() => hanndlePlus(props.product)}
        className=""
      >
        +
      </div>
    </div>
  );
};

export default Qty;
