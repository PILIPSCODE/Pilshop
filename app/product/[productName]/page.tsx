import BuyNow from '@/Feature/components/ecommers/Landing/BuyNow'
import Navbar from '@/Feature/components/ecommers/Landing/NavBar'
import GetCurrentUser from '@/app/actions/getCurrentUser'
import Getproductbyid from '@/app/actions/getProductByName'
import React from 'react'

const page = async({params}:{params:{productName:string}}) => {
    const session = await GetCurrentUser()
    const product = await Getproductbyid(params.productName)
  return (
    <>
    <Navbar session={session}/>
    <div className='w-11/12 mx-auto pt-20'>
        <BuyNow product={product}/>
    </div>
    </>
  )
}

export default page