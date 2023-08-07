
import Sosials from "@/Feature/components/Profile/Sosials";

import { FaEdit, FaMobile, FaPhone, FaStore } from "react-icons/fa";
import { User } from '@prisma/client';
import Link from "next/link";




type params = {
  YourAcc:User,
  params:String,
  profileParams:any
}
const Profile = (params:params) => {
 

if(params.profileParams !== null){

  return (
    <div
    className="grid grid-cols-2 p-2 rounded-2xl mt-2 max-[1078px]:grid-cols-1   w-11/12"
    data-theme="wireframe"
  >

    <div className="flex items-center  justify-around max-sm:flex-col">
      <div className=" w-40 h-40 flex justify-center items-center">
        <img
          src={`${params.profileParams?.image !== null ? params.profileParams?.image : "/profile-no-log.png"}`}
          className="w-28 h-28 border-2 rounded-full border-black"
        ></img>
       
      </div>
      <div className="break-words flex-grow w-min max-sm:w-11/12 ">
        <div className="flex items-center gap-2 max-sm:justify-center ">
          <h1 className="font-bold text-2xl">{params.profileParams?.name}</h1>
          {params.YourAcc?.name === params.profileParams?.name 
          ?
          <div className="flex items-center justify-center bg-stone-200 p-2 rounded-2xl">
            <FaEdit size={25} />
            <h1 className="max-md:hidden">Edit Profile</h1>
          </div>
          :<button className='btn btn-info'>Follow</button>
          }
        </div>
        <p className="max-sm:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus sed, perspiciatis cum eos voluptas ipsum dolores
        </p>
        <a href="https://google.com" className="underline mt-2 flex max-sm:justify-center w-full">
          Link Here
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center max-md:flex-col">
      <Sosials />
   
      <div className="tooltip mx-2 tooltip-bottom"  data-tip={`${params.profileParams?.name} ${params.params === "store"?"store":"content"}`}>
        {params.params === 'store'?
      <Link href={`/${params.profileParams?.name}/store`} className="btn"> <FaStore size={25} /></Link>
      :
      <Link href={`/${params.profileParams?.name}`} className="btn"> <FaMobile size={25} /></Link>
        }
      </div>
    
     
    </div>
  </div>
  )
}else{
  return (
      <div><h1>404 User Not Found</h1></div>
  )
}
}

export default Profile