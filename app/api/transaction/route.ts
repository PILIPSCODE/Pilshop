import prisma from "@/app/libs/prismadb"
import { pusherServer } from "@/app/libs/pusher"
import { NextResponse } from "next/server"

export const POST = async(req:Request) => {
    try {
        const body = await req.json()
        const {data,orderId} = await body
    
        const OrderItems = await prisma.orderItem.createMany({
            data:data.map((e:any) => {
                return{
                   orderId,
                   UserStoreids:e.product.userStoreIds,
                   productId:e.product.id,
                   quantity:e.jmlh
                }
            })
        })
        const RealTimeOrders = await prisma.orderids.findFirst({
            where: {
                id:orderId
            },
            include:{
                OrderItems:true
            }
        })

        data.filter((obj:any,index:any,self:any) => {
            return self.findIndex((item:any) => item.product.userStoreIds === obj.product.userStoreIds) === index;
        }).map((e:any) => {
            pusherServer.trigger(e.product.userStoreIds,"Orders:new",RealTimeOrders)
        })



        return NextResponse.json(OrderItems)
    } catch (error) {
        console.log(error)
    }
}
export const DELETE = async(req:Request) => {
    try {
        const body = await req.json()
        const {orderId} = await body
    
        const OrderItems = await prisma.orderItem.deleteMany({
           where:{
            orderId
           }
        })
        return NextResponse.json(OrderItems)
    } catch (error) {
        console.log(error)
    }
}