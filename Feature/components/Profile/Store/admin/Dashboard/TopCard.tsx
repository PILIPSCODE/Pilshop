import React from "react";

const TopCard = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="flex  lg:col-span-2 col-span-1 bg-white justify-between p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="font-bold text-2xl">$3090</p>
          <p>Daily Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center rounded-lg  items-center p-2"> 
          <p className="text-lg text-green-700">+17%</p>
        </div>
      </div>
      <div className="flex  lg:col-span-2 col-span-1 bg-white justify-between p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="font-bold text-2xl">$1990</p>
          <p>YTD Revenue</p>
        </div>
        <div className="bg-green-200 flex justify-center rounded-lg  items-center p-2"> 
          <p className="text-lg text-green-700">+17%</p>
        </div>
      </div>
      <div className="flex   bg-white justify-between p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="font-bold text-2xl">11.389</p>
          <p>Customers</p>
        </div>
        <div className="bg-green-200 flex justify-center rounded-lg  items-center p-2"> 
          <p className="text-lg text-green-700">+17%</p>
        </div>
      </div>
    
    </div>
  );
};

export default TopCard;
