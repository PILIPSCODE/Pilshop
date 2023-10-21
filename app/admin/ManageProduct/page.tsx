// import ManageProduct from '@/Feature/components/Profile/Store/admin/ManageProduct'
import React from 'react'
import dynamic from 'next/dynamic'
import UseCurr from '@/app/actions/getCurrentUser'
const ManageProduct = dynamic(() => import("@/Feature/components/Profile/Store/admin/ManageProduct"),{ssr:false})
const page = async({params}:{params:{userid:string}}) => {
   const product = await UseCurr()
  return (

    <div className='w-full h-screen p-10 max-sm:p-3 max-sm:pt-7 '>
     
        <ManageProduct params={params.userid} products={product?.usersStore}/>
    </div>
  )
}

export default page