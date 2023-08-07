import {NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";


export const GET = async (req: Request,{params}:{params:{name:string}}) => {
    try {
      const findUser = await prisma.user.findFirst({
        where: {
          name:params.name,
        },
        include:{
          products:true
        }
      });
  
      if(findUser){
          return NextResponse.json(findUser)
      }
      return new NextResponse("User Not Found", { status: 200 });
    } catch (error) {}
  };
  