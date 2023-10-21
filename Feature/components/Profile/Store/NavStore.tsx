import React from 'react'
import { FaHeart, FaMoneyBill} from "react-icons/fa";
import {VscGraph} from "react-icons/vsc"
import {FaMoneyBillTrendUp} from "react-icons/fa6"

type filter = {
  setfilter:React.Dispatch<React.SetStateAction<string>>,
  filter:String
}
const NavStore = (props:filter) => {

  
  return (
    <div className="w-11/12 flex justify-around mt-2 p-2 rounded-2xl "data-theme="wireframe">
    <button onClick={() => props.setfilter("Overview")} className={`flex flex-col items-center duration-500 ${props.filter === "Overview"? "border-b-4 rounded-lg  border-black " :"border-b-0 "}`}>
     <VscGraph size={25} />
      <span className="btm-nav-label">Overview</span>
    </button>
    <button  onClick={() => props.setfilter("")} className={`flex flex-col items-center duration-500 ${props.filter === ""? "border-b-4 rounded-lg border-black " :"border-b-0"}`}>
      <FaHeart size={25}/>
      <span className="btm-nav-label">Best Sells</span>
    </button>
    <button  onClick={() => props.setfilter('low')} className={`flex flex-col items-center duration-500 ${props.filter === "low"? "border-b-4 rounded-lg border-black " :"border-b-0"}`}>
      <FaMoneyBillTrendUp size={25}/>
      <span className="btm-nav-label">low to high $</span>
    </button>
    <button  onClick={() => props.setfilter("high")} className={`flex flex-col items-center duration-500 ${props.filter === "high"? "border-b-4 rounded-lg border-black " :"border-b-0"}`}>
      <FaMoneyBill size={25}/>
      <span className="btm-nav-label">high to low $</span>
    </button>
  </div>
  )
}

export default NavStore