import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const PUT = async (req: Request,{ params }: { params: { id: string } }) => {

    const body = await req.json()
    const {Method,Status,expired} = body
    try {
    const transaction = await prisma.orderids.update({
        where: {
            id: params.id,
        },
        data:{
            Status,
            Method,
            expired
        }
    })
    return NextResponse.json(transaction)
  } catch (error) {
    console.log(error);
  }

};
