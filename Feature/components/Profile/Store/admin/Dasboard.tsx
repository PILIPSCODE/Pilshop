"use client";

import React, { useState } from "react";
import TopCard from "./Dashboard/TopCard";
import BarChart from "./Dashboard/Chart";
import { RxDashboard } from "react-icons/rx";
import RencentOrders from "./Dashboard/RencentOrders";

const Admin = (params:{user:any}) => {
 console.log(params.user)
  return (
    <>
      <div className="w-full px-4 text-4xl max-md:text-xl mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <RxDashboard />
          <p>DashBoard</p>
        </div>
        <div className="text-xl max-md:text-base">
          <h1>Welcome {params.user.name}</h1>
        </div>
      </div>
      <TopCard />
      <div className="p-4 grid lg:grid-cols-3 grid-cols-1 gap-4">
      <BarChart />
      <RencentOrders/>
      </div>
    </>
  );
};

export default Admin;
