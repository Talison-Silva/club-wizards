"use client";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

export default function Session({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
