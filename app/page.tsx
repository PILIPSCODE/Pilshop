
import Badge from '@/Feature/components/ecommers/Landing/Badge'
import Navbar from '@/Feature/components/ecommers/Landing/Navbar'
import React from 'react'
import Hero from '@/Feature/components/ecommers/Landing/Hero'
import { GetProduct } from '@/prisma/product'
import getSS  from "@/app/actions/getSesions"




const page = async() => {
  const product = await GetProduct()
  const session = await getSS()

  return (
    <>
    <div  className='overflow-x-hidden h-screen' data-theme="retro">
     <Navbar session={session}/>
     <Hero/>
     <Badge product={product}/>
    </div>
    </>
    )

}

export default page