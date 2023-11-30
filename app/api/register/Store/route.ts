import {NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";


export const POST = async (req:Request) => {
    try {
        
        const body = await req.json()
        const { name, bio, link,email,Adress} = body;
        
        const emailcheck = await prisma.userStore.findUnique({where: {email}})
        if(emailcheck){
            return new NextResponse('Email already exists',{status: 403})
        }
        const user = await prisma.userStore.create({
            data:{
                name,
                bio,
                link,
                email,
                Adress,
            }
        }
        )
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }
}
