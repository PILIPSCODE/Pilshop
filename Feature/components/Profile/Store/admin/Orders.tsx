import React from 'react'
import Search from './Search'
import { FaShoppingBag } from 'react-icons/fa'
import {  BsThreeDotsVertical } from 'react-icons/bs'

const Orders = () => {
  return (
    <>
      <Search/>
    <div className="font-popins bg-base-300 p-2 h-[80vh] rounded-lg">
      <div className={`grid grid-cols-4  max-md:grid-cols-2 gap-1  px-2  text-gray-800`}>
        <div className="flex justify-start py-2 mx-3  items-center gap-1  ">
          <h1>Order</h1>
        </div>
        <div className="flex justify-start py-2   items-center gap-1  ">

          <h1>Status</h1>
        </div>
        <div className="flex justify-start py-2  max-md:hidden  items-center gap-1  ">

          <h1>Last Order</h1>
        </div>
        <div className="flex justify-start  max-md:hidden py-2 items-center gap-1 ">
        
          <h1>Method</h1>
        </div>
      </div> 

      
            <div
              className="grid grid-cols-4 relative text-gray-800 font-bold max-md:grid-cols-2 gap-1 bg-base-200 rounded-lg  my-2 "
            >
              <div className="flex justify-start mx-3 py-2 items-center gap-2">
                <div className='bg-base-300 lg:p-4 p-1 rounded-lg'>
                <FaShoppingBag size={25} />
                </div>
                <div>
                  <h1 className='text-lg max-md:text-base'>400 $</h1>
                  <h1 className='max-md:text-sm'>Anie hurjansui</h1>
                </div>
              </div>
              <div className="flex justify-start  py-2 items-center gap-1 ">
                <h1 className='bg-green-400 p-2 max-md:p-1 rounded-lg'>Completed</h1>
              </div>
              <div className="flex justify-start max-md:hidden py-2 items-center gap-1">
                <h1>23 minute ago</h1>
              </div>
              <div className="flex justify-start  max-md:hidden py-2 items-center gap-2 ">
                <h1>Bca Sejahtera</h1>
              </div>
                <div className='absolute right-2 flex items-center h-full'>
                  <BsThreeDotsVertical/>
                </div>
            </div>
      
           
      
      
           
      
         

    </div>
    </>
  )
}

export default Orders