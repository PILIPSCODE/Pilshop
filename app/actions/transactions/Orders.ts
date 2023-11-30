import prisma from "@/app/libs/prismadb"


export default async function Orders(){
    try {
        const Orders = await prisma.orderids.findMany({
            include:{
                OrderItems:true,
            }
        })
        return Orders
    } catch (error) {
        return null
    }
}