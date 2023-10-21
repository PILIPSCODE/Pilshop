import { NextResponse } from "next/server";
import getSS from "./getSesions";
import prisma from "@/app/libs/prismadb";

export default async function GetCurrentUser() {
  try {
    const sesions = await getSS();
    if(sesions === null) return new NextResponse('Unathorize',{status:401})
 
    const userCurrent = await prisma.user.findFirst({
      where: {
        email: sesions?.user?.email,
      },
      include:{
        usersStore:{
          include:{
            products:true,
            ownerTags:true
          }
        }
      }
    });

    return userCurrent;
  } catch (error) {
    console.log(error)
  }
}
