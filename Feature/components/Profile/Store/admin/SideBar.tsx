import Link from "next/link";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { FaProductHunt, FaShoppingBag } from "react-icons/fa";
import { RxDashboard, RxPerson } from "react-icons/rx";

const SideBar = (params: { params: string }) => {
  return (
    <div className="h-screen w-20 flex flex-col gap-8 bg-base-200 items-center z-50 fixed font-poppins max-md:hidden">
      <div className="mt-3">
        <Link href={"/"}><h1 className="bg-black text-white p-1 rounded-md">Wism</h1></Link>
      </div>
      <div
        className="bg-base-300 p-2 rounded-lg tooltip mx-2 tooltip-right"
        data-tip="Dashboard"
      >
        <Link href={`/admin/Dasboard`}>
          <RxDashboard size={25} />
        </Link>
      </div>
      <div
        className="bg-base-300 p-2 rounded-lg tooltip mx-2 tooltip-right"
        data-tip="Customer"
      >
         <Link href={`/admin/Customer`}>
        <RxPerson size={25} />
        </Link>
        
      </div>
      <div
        className="bg-base-300 p-2 rounded-lg tooltip mx-2 tooltip-right"
        data-tip="Orders"
      >
        <Link href={`/admin/Orders`}>
        <FaShoppingBag size={25} />
        </Link>
      </div>
      <div
        className="bg-base-300 p-2 rounded-lg tooltip mx-2 tooltip-right"
        data-tip="Manage Product"
      >
         <Link href={`/admin/ManageProduct`}>
    
        <FaProductHunt size={25} />
        </Link>
      </div>
      <div
        className="bg-base-300 p-2 rounded-lg tooltip mx-2 tooltip-right"
        data-tip="Settings"
      >
         <Link href={`/admin/Settings`}>
        <AiFillSetting size={25} />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
