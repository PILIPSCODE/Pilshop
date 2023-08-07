import React from "react";
import { FaHeart,FaBookmark } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="w-11/12 flex justify-around mt-2 p-2 rounded-2xl "data-theme="wireframe">
    <button className=" flex flex-col items-center">
     <AiOutlineAppstore size={25} />
      <span className="btm-nav-label">Postingan</span>
    </button>
    <button className="flex flex-col items-center">
      <FaHeart size={25}/>
      <span className="btm-nav-label">Liked</span>
    </button>
    <button className="flex flex-col items-center">
      <FaBookmark size={25}/>
      <span className="btm-nav-label">Tersimpan</span>
    </button>
  </div>
  );
};

export default Nav;
