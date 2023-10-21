"use client"
import React, {SetStateAction, useState} from 'react'
import {GiClothes,GiLipstick} from 'react-icons/gi'
import {IoFastFoodSharp} from 'react-icons/io5'
import {FcSportsMode} from 'react-icons/fc'
import {FaBabyCarriage,FaMotorcycle} from 'react-icons/fa'
import {BsFan} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'
import {MdToys,MdRecommend} from 'react-icons/md'
import { IconType } from 'react-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import "swiper/css";
import { Navigation } from 'swiper'
type props ={
    product:any
    setProfile:React.Dispatch<SetStateAction<string>>
}

const Badge = (props:props) => {
  type User = {
    badge:String,
    icons:IconType,
  }
    const badge:User[] = [
        {
            badge:"Untuk Anda"
            ,
            icons:MdRecommend
            
        },
        {
            badge:"Fashion dan Pakaian",
            icons:GiClothes
        },
        {
            badge:"Kecantikan "
            ,
            icons:GiLipstick
        },
        {
            badge:"Rumah Tangga dan Furnitur"
            ,
            icons:GiClothes
        },
        {
            badge:"Makanan dan Minuman",
            icons:IoFastFoodSharp
        },
        {
            badge:"Alat-Alat Olahraga",
            icons:FcSportsMode
        },
        {
            badge:"Mainan dan Hiburan",
            icons:MdToys
        },
        {
            badge:"Bayi dan Anak",
            icons:FaBabyCarriage
        },
        {
            badge:"Perjalanan dan Aksesoris",
            icons:SiYourtraveldottv
        },
        {
            badge:"Kendaraan dan Aksesori",
            icons:FaMotorcycle
        },
        {
            badge:"Barang Elektronik",
            icons:BsFan
        },
    ]

       
  return (
    <>
    <div data-theme="pastel" className='category mx-auto flex items-center  py-4  '>
    <Swiper 
      spaceBetween={10}
      slidesPerView={7}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{    
        100:{
         slidesPerView:4
        },
        700:{
         slidesPerView:8
        },
        1020:{
        slidesPerView:5
        },
        1200:{
            slidesPerView:6
        }
      }}
    className='flex gap-4  justify-between  items-stretch h-12 max-lg:h-auto w-11/12  mx-10 '>
        {badge.map((el,index) => (
        <SwiperSlide key={index} className='text-center h-full '  onClick={() => {props.setProfile(`${el.badge}`)}}>
            <div className="rounded-md flex flex-col h-full  justify-center items-center  mx-auto bg-blue-300  text-slate-700">

            <el.icons className='py-1 lg:hidden text-4xl'/>
            <div className='max-lg:hidden whitespace-nowrap text-sm'>{el.badge}</div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
    </>
  )
}

export default Badge
