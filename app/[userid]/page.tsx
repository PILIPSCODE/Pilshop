// "use client";
import Profile from "@/Feature/components/Profile/Profile";
import ProfileLoad from "@/Feature/components/loadingSekeleton/ProfileLoad";
import Nav from "@/Feature/components/Profile/Nav";
import Content from "@/Feature/components/Profile/Content";
import getUserParam from "@/app/actions/getUserParams"
import getUserC from "@/app/actions/getCurrentUser"

const page = async({ params }: { params: { userid: string } }) => {
  const YourAcc = await getUserC()
    const getuserp = await getUserParam(params.userid.replace("%20"," "))
     return (
   
       <div className="h-screen font-poppins text-black overflow-y-scroll " data-theme='cupcake'>
         <div className="flex flex-col w-full items-center ">
          {YourAcc?.name?
           <>
           <Profile YourAcc={YourAcc} params="store"  profileParams={getuserp} />
            <Nav/>
            <Content/>
           </> 
          :  <>
          
            <ProfileLoad/>
          </>
          }
         
         </div>
        
       </div>
     );
};

export default page;
