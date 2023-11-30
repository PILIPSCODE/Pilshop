"use client";
import React, { useEffect, useState } from "react";
import Search from "../Search";
import { FaShoppingBag } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { pusherClient } from "@/app/libs/pusher";
import Link from "next/link";
import OrdersModal from "./OrdersModal";

type interfacee = {
  userStoreids: any;
  intialState: any;
};
const Orders = (props: interfacee) => {
  const [items, setItems] = useState(props.intialState);

  useEffect(() => {
    pusherClient.subscribe(props.userStoreids);

    const OrdersNew = (newOrders: any) => {
      setItems((current: any) => {
        return [...current, newOrders];
      });
    };

    pusherClient.bind("Orders:new", OrdersNew);
  }, []);

  return (
    <>
      <Search />
      <div className="py-2 grid grid-cols-4  max-md:grid-cols-2 ">
        <button className="btn rounded-none bg-slate-400">All Orders</button>
        <button className="btn rounded-none btn-info">Ready Send</button>
        <button className="btn rounded-none btn-success">Sucsess</button>
        <button className="btn rounded-none btn-error">Canceled</button>
      </div>
      <div className="font-popins bg-base-300 p-2 h-[80vh]">
        <div
          className={`grid grid-cols-4  max-md:grid-cols-2 gap-1  px-2  text-gray-800`}
        >
          <div className="flex justify-start py-2 mx-3  items-center gap-1  ">
            <h1>Order</h1>
          </div>
          <div className="flex justify-start py-2   items-center gap-1  ">
            <h1>Status</h1>
          </div>
          <div className="flex justify-start py-2  max-md:hidden  items-center gap-1  ">
            <h1>Last Order</h1>
          </div>
          <div className="flex justify-start  max-md:hidden py-2 items-center gap-1 ">
            <h1>Method</h1>
          </div>
        </div>

        {items.map((e: any, index: any) => (
          <div
            key={index}
            className="grid grid-cols-4 relative text-gray-800 font-bold max-md:grid-cols-2 gap-1 bg-base-200 rounded-lg  my-2 "
          >
            <div className="flex justify-start mx-3 py-2 items-center gap-2">
              <div className="bg-base-300 lg:p-4 p-1 rounded-lg">
                <FaShoppingBag size={25} />
              </div>
              <div>
                <h1 className="text-lg max-md:text-base">1900 $</h1>
                <h1 className="max-md:text-sm">{e.email}</h1>
              </div>
            </div>
            <div className="flex justify-start  py-2 items-center gap-1 ">
              <h1 className="bg-green-400 p-2 max-md:p-1 rounded-lg">
                {e.Status}
              </h1>
            </div>
            <div className="flex justify-start max-md:hidden py-2 items-center gap-1">
              <h1>23 minute ago</h1>
            </div>
            <div className="flex justify-start  max-md:hidden py-2 items-center gap-2 ">
              <h1>{e.Method}</h1>
            </div>
            <div  className="absolute right-2 flex items-center h-full">
              <OrdersModal/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
