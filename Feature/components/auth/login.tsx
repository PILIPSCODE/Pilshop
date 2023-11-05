"use client";
import React, { useEffect, useRef, useState } from "react";
import Bird from "../ecommers/Nothing/Bird";
import Loginwith from "./loginwith";
import Leaves from "@/public/leaves.png"
import Link from "next/link";
import Image from "next/image";
import {toast} from 'react-hot-toast'
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";

const Login = () => {
  const [wings, setwings] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const change = useRef<HTMLHeadingElement>(null);
  const [userReq, setuserReq] = useState({email:"",password:""});
  const session = useSession()
  const router = useRouter()
 console.log(session)

  useEffect(() => {
    if(session?.status === "authenticated"){
      router.push("/")
    }
  },[session.status])








  const handlePassFocus = () => {
    setwings(true);
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserReq({email:`${e.target.value}`,password:`${userReq.password}`})
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
    const res = await signIn("credentials",{...userReq,redirect:true})
    res?.error === "Invalid credentials"?toast.error("Invalid username or password") :router.push("/")
  }




  const handlePassBlur = () => {
    setwings(false);
  };
  return (
    <div className="h-screen flex justify-center items-center text-white font-poppins">
      <div className="w-10/12 h-5/6  flex  rounded-2xl gap-1  max-lg:flex-col max-lg:max-w-sm max-lg:h-screen max-sm:w-full   ">
        <div className="flex justify-center h-full max-lg:h-auto max-sm:flex-grow  items-center px-20 bg-log rounded-2xl ">
          <Bird wings={wings} change={change} showpasss={showpass} />
        </div>
        <div className="flex justify-center p-20 items-center   rounded-2xl max-lg:p-4   relative max-sm:flex-grow-0 flex-grow bg-gradient-to-b from-blue-300 to-slate-900  ">
          <form onSubmit={(e) => handleSubmit(e)} className=" flex flex-col gap-4 max-lg:w-full">
            <Image
              alt="daun"
              src={Leaves}
              className="absolute top-0 left-0 -scale-x-100  rounded-2xl pointer-events-none"
            />
            <h1 className="text-4xl font-poppins relative font-bold  mx-3 ">
              Sign In
            </h1>
            <div>
              <h1 className="relative mx-3">Email</h1>
              <input
                type="email"
                onChange={(e) => handleChange(e)}
                required
                value={userReq.email}
                placeholder="Type here"
                className="input input-bordered input-success relative max-lg:w-11/12 max-lg:mx-3 w-80 "
              />
            </div>
            <div>
              <div className="flex justify-between" >
                <h1 className="relative  mx-3">Password</h1>
                <div className="flex">
                <input type="checkbox" name="" id="" onClick={() => {setshowpass(!showpass),setwings(true)}} /> 
                <h2>Show Password</h2>
                </div>
              </div>
              <input
                onFocus={handlePassFocus}
                onBlur={handlePassBlur}
                required
                value={userReq.password}
                onChange={(e) => {setuserReq({email:`${userReq.email}`,password:`${e.target.value}`})}}
                type={showpass? "text" :"password"}
                placeholder="Type here"
                className="input input-bordered input-success w-80  max-lg:w-11/12 max-lg:mx-3  relative "
              />
            </div>
            <button className="btn relative mt-2 max-lg:mx-3 ">Sign in</button>
            <h1 className="relative text-center ">
              New in here Lest-go{" "}
              <Link href={"/user/signup"} className="underline">
                {" "}
                SignUp{" "}
              </Link>{" "}
              for Free
            </h1>
            <div className="w-full flex justify-center">
              <Loginwith/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
