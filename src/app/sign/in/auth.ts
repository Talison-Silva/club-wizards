"use server";
import prisma from "@/lib/prisma";

export async function authenticate(fields: FormData) {
  let response: any = [];

  response = await prisma.get("user", {
    email: fields.get("email"),
  });

  if (fields.get("password") === response.password) {
    console.log("authenticate");
  } else {
    console.log("no authenticate");
  }
}
