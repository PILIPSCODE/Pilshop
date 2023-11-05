import CategoryBillbboard from '@/Feature/components/ecommers/category/CategoryBillbboard'
import React from 'react'
import { GetProduct } from '@/prisma/product'
import Product from '@/Feature/components/ecommers/Landing/Product'

export default async function page({params}:{params:{id:string}}) {
const product = await GetProduct()
  return (
    <div className='w-11/12 m-auto'>
      <CategoryBillbboard/>
      <Product title={params.id} filterproduct={`${params.id}`} product={product}/>
    </div>
  )
}
