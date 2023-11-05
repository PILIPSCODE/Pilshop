"use client";
import React, { useEffect, useRef, useState } from "react";
import Bird from "../ecommers/Nothing/Bird";
import Link from "next/link";
import { User } from "@/redux/interface/Cart";
import axios from "axios";
import {signIn, useSession} from 'next-auth/react'
import {toast} from 'react-hot-toast'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Leaves from "@/public/leaves.png"

const SignUp = () => {
  const [wings, setwings] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const [loading, setLoading] = useState(true)
  const [userReq, setuserReq] = useState<User>({name:"",password:"",repeatPassword:"",email:""});
  const session = useSession()
  const router = useRouter();
  const change = useRef<HTMLHeadingElement>(null);
  const handlePassFocus = () => {
    setwings(true);
  };

  useEffect(() => {
    if(session?.status === "authenticated"){
      router.push("/")
    }
  },[session.status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setuserReq({name:`${e.target.value}`,password:`${userReq.password}`,repeatPassword:`${userReq.repeatPassword}`,email:`${userReq.email}`})
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
     
  const handleSumbit = async(e:React.FormEvent) => {
    e.preventDefault()
    try {
      const res =await axios.post('/api/register',userReq)
      res? setLoading(false):setLoading(true);
      res.status === 200? signIn("credentials",{name:userReq.name,email:userReq.email,password:userReq.password}):toast.error("Invalid credentials")
    } catch (error) {
      toast.error("Email Already Esixt")
    }

  }

  const handlePassBlur = () => {
    setwings(false);
  };
  return (
    <div className="h-screen flex justify-center items-center text-white font-poppins">
      <div className="w-10/12 h-5/6  flex  rounded-2xl gap-1  max-lg:flex-col max-lg:max-w-sm max-lg:h-screen max-sm:w-full   ">
        <div className="flex justify-center h-full max-lg:h-auto max-sm:flex-grow  items-center px-20 bg-log rounded-2xl ">
          <Bird wings={wings} change={change} showpasss={showpass}  />
        </div>
        <div className="flex justify-center p-20 items-center  rounded-2xl max-lg:p-4 relative max-sm:flex-grow-0 flex-grow bg-gradient-to-b from-purple-500 to-blue-300  ">
          <form onSubmit={(e) => handleSumbit(e)} className=" flex flex-col  gap-4 max-lg:w-full">
            <Image
            alt="Leaves"
              src={Leaves}
              className="absolute top-0 left-0 -scale-x-100  rounded-2xl pointer-events-none lg:scale-x-100"
            />
            <h1 className="text-4xl font-poppins relative font-bold  mx-3 ">
              Sign Up
            </h1>
            <div >
              <h1 className="relative mx-3">Username</h1>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                required
                placeholder="Type here"
                value={`${String(userReq.name)}`}
                className="input input-bordered input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
              />
            </div>
            <div >
              <h1 className="relative mx-3">Email</h1>
              <input
                type="email"
                placeholder="Type here"
                required
                onChange={(e) => {setuserReq({name:`${userReq.name}`,password:`${userReq.password}`,repeatPassword:`${userReq.repeatPassword}`,email:`${e.target.value}`})}}
                value={`${String(userReq.email)}`}
                className="input input-bordered input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
              />
            </div>
            <div>
              <div className="flex justify-between lg:flex-row-reverse" >
                <h1 className="relative  mx-3">Password</h1>
                <div className="flex">
                <input type="checkbox" name="" id="" onClick={() => {setshowpass(!showpass),setwings(true)}} /> 
                <h2>Show Password</h2>
                </div>
              </div>
              <input
                onFocus={handlePassFocus}
                onBlur={handlePassBlur}
                onChange={(e) => {setuserReq({name:`${userReq.name}`,password:`${e.target.value}`,repeatPassword:`${userReq.repeatPassword}`,email:`${userReq.email}`})}}
                value={`${String(userReq.password)}`}
                type={showpass? "text" :"password"}
                required
                placeholder="Type here"
                className="input input-bordered input-success w-80  max-lg:w-11/12 max-lg:mx-3  relative "
              />
            </div>
            <div>
              <div className="flex justify-between lg:flex-row-reverse" >
                <h1 className="relative  mx-3">Repeat Password</h1>
                <div className="flex">
                <input type="checkbox" name="" id="" onClick={() => {setshowpass(!showpass),setwings(true)}} /> 
                <h2>Show Password</h2>
                </div>
              </div>
              <input
                onFocus={handlePassFocus}
                required
                onBlur={handlePassBlur}
                onChange={(e) => {setuserReq({name:`${userReq.name}`,password:`${userReq.password}`,repeatPassword:`${e.target.value}`,email:`${userReq.email}`})}}
                value={`${String(userReq.repeatPassword)}`}
                type={showpass? "text" :"password"}
                placeholder="Type here"
                className="input input-bordered input-success w-80  max-lg:w-11/12 max-lg:mx-3  relative "
              />
            </div>
            <button type="submit" className="btn relative mt-2 max-lg:mx-3 ">Sign Up</button>
            <h1 className="relative text-center ">
              Have an Account{" "}
              <Link href={"/user/signin"} className="underline">
                {" "}
                SignIn{" "}
              </Link>{" "}
              in Here
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
