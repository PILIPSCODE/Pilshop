"use client"
import {useState} from 'react'
import dynamic from 'next/dynamic'
import Product from './Product'
import {GiClothes,GiLipstick} from 'react-icons/gi'
import {IoFastFoodSharp} from 'react-icons/io5'
import {FcSportsMode} from 'react-icons/fc'
import {FaBabyCarriage,FaMotorcycle} from 'react-icons/fa'
import {BsFan} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import {MdToys,MdRecommend} from 'react-icons/md'
import { IconType } from 'react-icons'
const ProductDy = dynamic(() => import('./Product'))
type props ={
    product:any
}

const Badge = (props:props) => {
const [filterProduct,setFileterProduct] = useState("#Untuk Anda")
  type User = {
    badge:String,
    icons:IconType,
  }
    const badge:User[] = [
        {
            badge:"#Untuk Anda"
            ,
            icons:MdRecommend
            
        },
        {
            badge:"#Fashion dan Pakaian",
            icons:GiClothes
        },
        {
            badge:"#Kecantikan dan Perawatan Pribadi"
            ,
            icons:GiLipstick
        },
        {
            badge:"#Rumah Tangga dan Furnitur"
            ,
            icons:GiClothes
        },
        {
            badge:"#Makanan dan Minuman",
            icons:IoFastFoodSharp
        },
        {
            badge:"#Olahraga dan Aktivitas Luar Ruangan",
            icons:FcSportsMode
        },
        {
            badge:"#Mainan dan Hiburan",
            icons:MdToys
        },
        {
            badge:"#Perlengkapan Bayi dan Anak",
            icons:FaBabyCarriage
        },
        {
            badge:"#Perjalanan dan Aksesoris",
            icons:SiYourtraveldottv
        },
        {
            badge:"#Kendaraan dan Aksesori",
            icons:FaMotorcycle
        },
        {
            badge:"#Barang Elektronik",
            icons:BsFan
        },
    ]

       
  return (
    <>
    <div data-theme="pastel" className='my-4 mx-auto   rounded-xl   w-11/12'>
        <h1 className='mx-4 text-xl border-b-2 border-slate-700'>Category</h1>
    <div className='  gap-9 p-4 grid grid-cols-6 max-md:grid-cols-4    '>
        {badge.map((el,index) => (
        <div key={index} className=" rounded-md flex justify-center  bg-slate-300  text-slate-700 tooltip" data-tip={`${el.badge}`} onClick={() => {setFileterProduct(`${el.badge}`)}}><el.icons className='py-1 text-5xl max-md:text-3xl'/></div>
        ))}
    </div>
    </div>
    <ProductDy filterproduct={filterProduct} product={props.product}/>
    </>
  )
}

export default Badge
