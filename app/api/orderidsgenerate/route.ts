import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"



export const POST = async(req:Request) => {
    try {
        
        const body = await req.json()
        const {email} = body;
       
        const expired =await prisma.orderids.findFirst({
            where: {
                email,
                expired:false
            }
        })
        
        if(expired) return  NextResponse.json(expired)
        else{
            const orderids = await prisma.orderids.create({
                data: {
                    email
                },
                include:{
                  OrderItems:true
                }
            })

            
            return NextResponse.json(orderids);
        }
        
    } catch (error) {
        console.log(error);
    }

}
