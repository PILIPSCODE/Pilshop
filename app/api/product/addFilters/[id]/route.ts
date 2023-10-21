import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { tag } = body;
    const update = await prisma.ownerTags.update({
      where: {
        id: params.id,
      },
      data: {
        tag,
      },
    });
    return NextResponse.json(update);
  } catch (error) {
    console.log(error);
  }
};
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const update = await prisma.ownerTags.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(update);
  } catch (error) {
    console.log(error);
  }
};
