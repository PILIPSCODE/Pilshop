
import Badge from '@/Feature/components/ecommers/Landing/Badge'
import Landing from '@/Feature/components/ecommers/Landing/Landing'
import React from 'react'

import Hero from '@/Feature/components/ecommers/Landing/Hero'
import { GetProduct } from '@/prisma/product'
import getSS  from "@/app/actions/getCurrentUser"
import dynamic from 'next/dynamic'




const page = async() => {
  const product = await GetProduct()
  const session = await getSS()

  return (
    <>
    <div  className='overflow-x-hidden  h-screen' data-theme="pastel">
     <Landing session={session} products={product}/>
    
    </div>
    </>
    )

}

export default page