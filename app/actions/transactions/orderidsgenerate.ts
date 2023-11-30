import prisma from "@/app/libs/prismadb"
import GetCurrentUser from "../getCurrentUser"
export default async function orderIds(){
  const email = await GetCurrentUser()
    try {
        const expired =await prisma.orderids.findFirst({
            where: {
                email:String(email?.email),
                expired:false
            }
        })
        return expired
    } catch (error) {
        return null
    }
   
}