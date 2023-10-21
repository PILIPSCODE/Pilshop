// import Favorite from '@/Feature/components/ecommers/favorite/Favorite'
import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import dynamic from 'next/dynamic'
const Favorite = dynamic(() => import('@/Feature/components/ecommers/favorite/Favorite'))

const page = async() => {

  return (
    <div>
       <div className="max-xl:hidden absolute top-3 left-3 flex gap-2 items-center font-poppins text-4xl bg-white p-2">
        <FaBookmark/>
        <h1 >Favorite</h1>
      </div>
        <Favorite/>
    </div>
  )
}

export default page