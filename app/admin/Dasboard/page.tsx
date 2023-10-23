import Admin from "@/Feature/components/Profile/Store/admin/Dasboard"
import getUserC from "@/app/actions/getCurrentUser"

const page = async({params}:{params:{userid:string}}) => {
  const YourAcc = await getUserC()

 


  if(YourAcc)
     return (
        <div className="w-full" >
          <Admin user={YourAcc}/>
        </div>
     )
    
    
}

export default page