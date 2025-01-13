"use client";

import { signIn } from "next-auth/react";
import prisma from "../prisma";

export function authGithub() {
  signIn("github", {
    redirectTo: "/",
  });
}

export function auth(fields: FormData) {
  const credentials = {
    username: fields.get("username"),
    password: fields.get("password"),
    email: fields.get("email"),
  };

  signIn("Credentials", {
    redirect: false,
    ...credentials,
  });
}
