
import Landing from '@/Feature/components/ecommers/Landing/Landing'
import React from 'react'
import { GetProduct } from '@/prisma/product'
import getSS  from "@/app/actions/getCurrentUser"





const page = async() => {
  const product = await GetProduct()
  const session = await getSS()
  console.log(session)

  
  return (
    <>
    <div  className='overflow-x-hidden  h-screen' data-theme="pastel">
     <Landing session={session} products={product}/>
    
    </div>
    </>
    )

}

export default page