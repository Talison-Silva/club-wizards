"use server";
import prisma from "@/lib/prisma";

export async function register(fields: FormData) {
  await prisma.post("user", {
    username: fields.get("username"),
    password: fields.get("password"),
    email: fields.get("email"),
  });
}
