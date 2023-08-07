import {  NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";


export const POST = async (req: Request, res: NextResponse) => {
  try {
    const body = await req.json();
    const { name, email, password, repeatPassword } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }
    if (password !== repeatPassword) {
      return new NextResponse("Passwords do not match", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server", { status: 500 });
  }
};

