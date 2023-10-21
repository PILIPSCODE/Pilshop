
import Sosials from "@/Feature/components/Profile/Sosials";

import { FaEdit, FaMobile, FaPhone, FaStore } from "react-icons/fa";
import { User } from '@prisma/client';
import Link from "next/link";




type params = {
  YourAcc:any,
  params:String,
  content:String,
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
          {params.YourAcc?.email === params.profileParams?.email
          ?
          <div className="flex items-center justify-center bg-stone-200 p-2 rounded-2xl">
            <FaEdit size={25} />
            <h1 className="max-md:hidden">Edit Profile</h1>
          </div>
          :<button className='btn btn-info'>Follow</button>
          }
        </div>
        <p className="max-sm:text-center">
          {params.profileParams?.bio}
        </p>
        <a href={`${params.profileParams?.link}`} className="underline mt-2 flex max-sm:justify-center w-full">
         {params.profileParams?.link}
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center max-md:flex-col">
      <Sosials />
   
      <div className="tooltip mx-2 tooltip-bottom"  data-tip={`${params.profileParams?params.profileParams?.name || params?.content :"haven't"} ${params.params === "store"? "store":"content"}`}>
        {params.params === 'store'?
        params.profileParams?.name === params.YourAcc.name
        ? <Link href={`${params.YourAcc.usersStore?`/${params.YourAcc?.name}/store`:"/auth/store"}`} className="btn"> <FaStore size={25} /></Link> 
        :<Link href={`${params.profileParams.usersStore?`/${params.profileParams?.name}/store`:""}`} className="btn"> <FaStore size={25} /></Link> 
      :
      <Link href={`/${params.content}`} className="btn"> <FaMobile size={25} /></Link>
        }
      </div>
    
     
    </div>
  </div>
  )
    }
}

export default Profile