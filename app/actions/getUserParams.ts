
import prisma from "@/app/libs/prismadb";

export default async function GetCurrentUser(name:string) {
  try {

    const userCurrent = await prisma.user.findFirst({
      where: {
        name: name,
      },
      include:{
        products:true
      }
    });

    return userCurrent;
  } catch (error) {
    console.log(error)
  }
}
