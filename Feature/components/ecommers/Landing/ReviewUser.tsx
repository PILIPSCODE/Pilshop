import React from "react";

const ReviewUser = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-800 mt-2 text-start p-2 flex justify-between w-full rounded-md items-center">
        <h1 className="text-2xl">Ulasan</h1>
        <select className="select select-primary w-full max-w-xs">
          <option defaultChecked>All</option>
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div className="h-screen bg-slate-800 mt-2 p-2 w-full rounded-md">
        <div className="w-56">
          <progress
            className="progress progress-accent bg-white w-56"
            value={0}
            max="100"
          ></progress>
          <progress
            className="progress progress-accent bg-white  w-56"
            value="10"
            max="100"
          ></progress>
          <progress
            className="progress progress-accent bg-white  w-56"
            value="40"
            max="100"
          ></progress>
          <progress
            className="progress progress-accent bg-white  w-56"
            value="70"
            max="100"
          ></progress>
          <progress
            className="progress progress-accent bg-white  w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default ReviewUser;
