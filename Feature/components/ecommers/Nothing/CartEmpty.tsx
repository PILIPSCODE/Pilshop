import React from 'react'

const CartEmpty = (props:{text:string}) => {
  return (
    <div className='absolute top-1/3 flex flex-col items-center   justify-center font-poppins'> 
      

        <img className='w-44 border rounded-full bg-black py-3 ' src="/empty (2).gif"/>
        <h1 className='text-xl z-0 block mt-3 max-lg:hidden'>{props.text}</h1>
        
      
    </div>
  )
}

export default CartEmpty



