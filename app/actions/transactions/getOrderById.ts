import prisma from "@/app/libs/prismadb"

export default async function GetOrdersByID(id:string){
    try {
        const res  =await prisma.orderids.findFirst({
            where: {
                id:id
            }
        })
        return res
    } catch (error) {
        return null
    }
   
}