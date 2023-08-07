import React from 'react'
import { FaUserPlus, FaUserFriends, FaEdit, FaHeart } from "react-icons/fa";

const Sosials = () => {
  return (
    <div className="flex gap-4 p-3 items-center shadow-md rounded-xl">
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 max-[404px]:flex-col max-[404px]:justify-between">
      <FaHeart size={25}/>
      <div className="">Likes</div> 
      </div>
      <div className="">300</div>
    </div>

    <div className="flex flex-col items-center justify-center border-x-2 p-2">
      <div className="flex max-[404px]:flex-col items-center gap-2 max-[404px]:justify-between">
        <FaUserFriends size={25} />
      <div className="">Followers</div>
      </div>
      <div className="">2.6M</div>
    </div>

    <div className="flex flex-col items-center justify-center">
      <div className="flex max-[404px]:flex-col items-center gap-2 max-[404px]:justify-between">
        <FaUserPlus size={25} />
      <div className="">Following</div>
      </div>
      <div className=" ">200</div>
    </div>
  </div>
  )
}

export default Sosials