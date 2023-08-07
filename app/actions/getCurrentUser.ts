import getSS from "./getSesions";
import prisma from "@/app/libs/prismadb";

export default async function GetCurrentUser() {
  try {
    const sesions = await getSS();

    const userCurrent = await prisma.user.findFirst({
      where: {
        email: sesions?.user?.email,
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
