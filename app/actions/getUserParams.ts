
import prisma from "@/app/libs/prismadb";

export default async function GetCurrentUser(name:string) {
  try {

    //  const user = await prisma.user.findMany({
    //   include:{
    //     usersStore:{
    //             include:{
    //               products:true,
    //               ownerTags:true
    //             }
    //           }
    //   }
    //  })
    //  const userCurrent = user.filter(e => e.name?.replace(" ","") === name)
  
      
    const userCurrent = await prisma.user.findFirst({
      where: {
        name: name,
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
