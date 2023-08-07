import React from 'react'

type Price = {
    PricePay:Number | String,
    SubTotal:Number
}
const Rincian = (props:Price) => {
  return (
    <div className='flex justify-center mt-5'>

    <div className='w-11/12'>

    <div className=' bg-slate-600 rounded-md flex flex-col gap-3 p-3  '>
        <h1 className='font-bold'>Pesanan</h1>
        <div className='flex font-semibold'>
            <div className='w-1/2 flex flex-col gap-2'>
            <h1>SubTotal</h1>
            <h1>Diskon</h1>
            <h1>Ongkir</h1>
            <h1 className='font-bold mt-1 border-t-2'>Total</h1>
            </div>
            <div className='border-l-2 w-1/2 text-end flex flex-col gap-2'>
            <h1>{String(props.SubTotal)}</h1>
            <h1 className='text-red-400'>-{String(Number(props.SubTotal) - Number(props.PricePay))}</h1>
            <h1>0</h1>
            <h1 className='font-bold mt-1 border-t-2'>{String(props.PricePay)}</h1>
            </div>
        </div>
    </div>



    </div>
    </div>
  )
}

export default Rincian