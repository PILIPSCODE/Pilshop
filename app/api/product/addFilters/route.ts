import { NextResponse } from "next/server";
import prisma from  "@/app/libs/prismadb"



export const POST = async(req:Request) => {
    try {
        const body = await req.json();
        const {tag,email,UserStoreids} = body
        const userstore = await prisma.ownerTags.findMany({
            where:{
                email,
            }
        })

        if(userstore.length >= 5){
            return new NextResponse('limit reached',{status:403})
        }
        const ownerTags = await prisma.ownerTags.create({
            data: {
                email,
                tag,
                UserStoreids
            }
        })
        return NextResponse.json(ownerTags)
    } catch (error) {
        console.log(error)
    }
}