import React from "react";

import { useDispatch } from "react-redux";
import { Appdispatch } from "@/redux/store";
import { increment, decrement } from "@/redux/features/cart-Slice";

type ProductFilt = {
  product: any;
  qty: Number;
};
const Qty = (props: ProductFilt) => {
  const dispact = useDispatch<Appdispatch>();

  const handleMin = (e: any) => {
    dispact(decrement(e));
  };
  const hanndlePlus = (e: any) => {
    dispact(increment(e));
  };

  return (
    <div className={`opacity-100  flex rounded-md  `}>
      <div
        onClick={() => handleMin(props.product)}
        className="py-2 px-4 max-lg:px-2 max-lg:py-0 max-sm:px-1 "
      >
        -
      </div>
      <h1 className="px-6 py-2 max-lg:px-4 max-lg:py-0 max-sm:px-2 border  border-x-2">
        {String(props.qty)}
      </h1>
      <div
        onClick={() => hanndlePlus(props.product)}
        className="py-2 max-lg:px-2 max-lg:py-0 px-4  max-sm:px-1"
      >
        +
      </div>
    </div>
  );
};

export default Qty;
