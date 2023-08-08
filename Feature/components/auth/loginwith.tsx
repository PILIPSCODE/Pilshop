'use client'
import React, { useEffect, useState } from "react";
import {signIn} from 'next-auth/react'
import {toast} from 'react-hot-toast'
import { useRouter } from "next/navigation";






const Loginwith = () => {
  

  const router = useRouter();
  const [loading,setLoading] = useState(false)
  

  const setloginwith = async(action:string) => {
  
    signIn(action, { redirect: true })
    .then((callback) => {
      setLoading(true)
      if (callback?.error) {
        toast.error('Invalid credentials!');
      }
  
      if (callback?.ok) {
         router.push('/') 
          setLoading(false)
        
      }
    })
    
  }
  

  return (
    <div>
      <div className={`absolute left-1/2 top-3 bg-black text-white p-3 ${loading?"" : "hidden"}`}>Loading</div>
      <ul className="menu menu-horizontal max-sm:mb-2  bg-base-200 rounded-box ">
        <li>
          <a className="tooltip" data-tip="Google">
           <img src="/google.png" onClick={() => setloginwith('google')} className="h-6 w-6"/>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Instagram">
          <img src="/instagram.png" className="h-6 w-6"/>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Github">
          <img src="/github.png" onClick={() => setloginwith('github')} className="h-6 w-6"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Loginwith;
