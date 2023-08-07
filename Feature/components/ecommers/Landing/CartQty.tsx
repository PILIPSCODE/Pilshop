"use client"
import { useAppSelector } from '@/redux/store'
import {useState,useEffect } from 'react'
import { BsCart } from 'react-icons/bs'
const CartQty = () => {
  const [jmlhCart,Setjmlhcart] = useState(0)
    const jmlhCarto = useAppSelector((state) => state.CartReducer.qty)
    useEffect(() => {
      Setjmlhcart(Number(jmlhCarto))
    },[jmlhCarto])
  return (
    <div className="indicator text-black pointer-events-none mx-1">
         <BsCart size={25}/>
          <span className="badge badge-sm bg-black text-white indicator-item">{String(jmlhCart)}</span>
        </div>
  )
}

export default CartQty