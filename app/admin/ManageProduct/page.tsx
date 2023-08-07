// import ManageProduct from '@/Feature/components/Profile/Store/admin/ManageProduct'
import React from 'react'
import dynamic from 'next/dynamic'
import UseCurr from '@/app/actions/getCurrentUser'
const ManageProduct = dynamic(() => import("@/Feature/components/Profile/Store/admin/ManageProduct"),{ssr:false})
const page = async({params}:{params:{userid:string}}) => {
   const product = await UseCurr()
  return (

    <div className='w-full h-screen p-10 '>
     
        <ManageProduct params={params.userid} products={product?.products}/>
    </div>
  )
}

export default page