"use client";
import React, { useRef, useState } from "react";
import Bird from "../ecommers/Nothing/Bird";
import Leaves from "@/public/leaves.png"
import shopbag from "@/public/shopBag.png"
import Image from "next/image";
import {toast} from 'react-hot-toast'
import { useRouter } from "next/navigation";
import axios from "axios";

const Storeauth = (props:{acc:any}) => {
  const change = useRef<HTMLHeadingElement>(null);
  const [userReq, setuserReq] = useState({name:"",email:props.acc?.email,bio:`Welcome To ${props.acc?.name} Store`,link:`https://${props.acc?.name}.com`});
  const router = useRouter()






  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserReq({email:`${userReq.email}`,name:`${e.target.value}`,link:`${userReq.link}`,bio:`${userReq.bio}`})
    const inputValue = e.target.value;
    const letters = inputValue.split("");
    letters.forEach((letter) => {
      if (change.current) {
        const elements = change.current.querySelectorAll(".eye");
        elements.forEach((element) => {
          
          element.textContent = letter;

        });
      }
    });
  };

  
  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register/Store',userReq)
      res.status === 200?router.push(`/${props.acc.name}/store`): "";
      
      
    } catch (error) {
      toast.error("Store is created")
      router.push(`/${props.acc.name}/store`)
    }

     
  }




  return (
    <div className="h-screen flex justify-center items-center text-white font-poppins">
      <div className="w-10/12 h-5/6  flex  rounded-2xl gap-1  max-lg:flex-col max-lg:max-w-sm max-lg:h-screen max-sm:w-full   ">
        <div className="flex justify-center h-full max-lg:h-auto max-sm:flex-grow relative items-center px-20 bg-log rounded-2xl ">
        <Image src={shopbag} className="absolute z-50 w-64 max-lg:w-24 bottom-3 right-3" alt="oke"/>

          <Bird wings={false} change={change} showpasss={false} />
        </div>
        <div className="flex max-lg:justify-center p-20 items-center  rounded-2xl max-lg:p-4   relative max-sm:flex-grow-0 flex-grow bg-gradient-to-b from-orange-500 to-orange-900  ">
          <form onSubmit={(e) => handleSubmit(e)} className=" flex flex-col gap-4 max-lg:w-full">
            <Image
              alt="daun"
              src={Leaves}
              className="absolute top-0 left-0 -scale-x-100  rounded-2xl pointer-events-none"
            />
            <h1 className="text-4xl font-poppins text-transparent text-white  text-justify relative font-bold  mx-3 ">
              Create Store
            </h1>
            <div>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                required
                value={userReq.name}
                placeholder="Store Name"
                className="input input-bordered input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
              />
            </div>
            <div>
              <textarea
                required
                value={userReq.bio}
                onChange={(e) => {setuserReq({email:`${userReq.email}`,name:`${userReq.name}`,link:`${userReq.link}`,bio:`${e.target.value}`})
              }}
              maxLength={250}
                placeholder="Description"
                className="input input-bordered input-success w-80 h-32 resize-none max-lg:w-11/12 max-lg:mx-3  relative "
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setuserReq({email:`${userReq.email}`,name:`${userReq.name}`,link:`${e.target.value}`,bio:`${userReq.bio}`})}
                required
                value={userReq.link}
                placeholder="link"
                className="input input-bordered input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
              />
            </div>
            <button className="btn relative mt-2 max-lg:mx-3 ">Create Store</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Storeauth;
