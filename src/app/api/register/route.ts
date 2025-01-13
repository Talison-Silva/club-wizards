import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "next-auth";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, name, password } = await request.json();

  if (!email || !name || !password) {
    return new NextResponse("Missing name, password or email", { status: 400 });
  }

  var ifExist: any = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (ifExist) {
    return new NextResponse("User already exits", { status: 400 });
  }

  var hashedPassword: string = await bcrypt.hash(password, 10);

  var user = await prisma.user.create({
    data: {
      hashedPassword,
      name: name,
      email,
    },
  });

  return new NextResponse("created", { status: 201 });
}
