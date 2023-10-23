import { NextResponse } from "next/server";
import getSS from "./getSesions";
import prisma from "@/app/libs/prismadb";

export default async function GetCurrentUser() {
  try {
    const sesions = await getSS();
    if(sesions === null) return null
 
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
    return null
  }
}
