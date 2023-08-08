import React from "react";
import Search from "./Search";
import {  BsChatFill, BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

const Customer = () => {
  return (
    <>
      <Search />
      
      <div className="font-popins bg-base-300 p-2 h-[80vh] rounded-lg">
      <div className={`grid grid-cols-3  max-md:grid-cols-2 gap-1  px-2  text-gray-800`}>
        <div className="flex justify-start py-2 mx-3  items-center gap-1  ">
          <h1>Customer</h1>
        </div>
        <div className="flex justify-start py-2  max-md:hidden  items-center gap-1  ">

          <h1>Last Order</h1>
        </div>
        <div className="flex justify-start  max-md:hidden py-2 items-center gap-1 ">
        
          <h1>Chat</h1>
        </div>
      </div> 

        <div className="grid grid-cols-3 relative text-gray-800 font-bold max-md:grid-cols-2 gap-1 bg-base-200 rounded-lg  my-2 ">
          <div className="flex justify-start mx-3 py-2 items-center gap-2">
            <div className="bg-base-300 w-10 h-10 relative rounded-lg">
              <Image fill src={"/profile-no-log.png"} alt="Profile-Image" className="rounded-full"/>
            </div>
            <div>
              <h1 className="text-lg max-md:text-base">Anie hurnansui</h1>
              <h1 className="max-md:text-sm">Anie@gmail.com</h1>
            </div>
          </div>
          <div className="flex justify-start max-md:hidden py-2 items-center gap-1">
            <h1>23 minute ago</h1>
          </div>
          <div className="flex justify-start  max-md:hidden py-2 items-center gap-2 ">
            <BsChatFill size={25}/>
          </div>
          <div className="absolute right-2 flex items-center h-full">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
