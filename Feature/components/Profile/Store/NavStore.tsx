import React from 'react'
import { FaHeart,FaBookmark } from "react-icons/fa";
import {VscGraph} from "react-icons/vsc"

const NavStore = () => {
  return (
    <div className="w-11/12 flex justify-around mt-2 p-2 rounded-2xl "data-theme="wireframe">
    <button className=" flex flex-col items-center">
     <VscGraph size={25} />
      <span className="btm-nav-label">Overview</span>
    </button>
    <button className="flex flex-col items-center">
      <FaHeart size={25}/>
      <span className="btm-nav-label">Tshirt</span>
    </button>
    <button className="flex flex-col items-center">
      <FaBookmark size={25}/>
      <span className="btm-nav-label">Clothes</span>
    </button>
    <button className="flex flex-col items-center">
      <FaBookmark size={25}/>
      <span className="btm-nav-label">BagPack</span>
    </button>
  </div>
  )
}

export default NavStore