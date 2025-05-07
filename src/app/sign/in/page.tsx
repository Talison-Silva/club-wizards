"use client";
import Form from "next/form";

import { auth } from "../../../lib/actions/users";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import { Route } from "next";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/solid";
import PasswordField from "../../../components/fields/passwd";
import Fields from "../../../components/fields";

import GithubBttn from "../../../components/bttns/github";
import SignBttn from "../../../components/bttns/sign";
import PasswdConfirm from "../../../components/fields/passwd-confirm";

export default () => {
  const authenticate = (fields: FormData) => {
    signIn("authenticate", {
      password: fields.get("password"),
      email: fields.get("email"),
      redirect: false,
    });

    //router.push("/hub");
  };
  //const router: Route = useRouter();

  return (
    <section className="h-screen flex justify-center items-center gap-[40px] select-none">
      <div className="min-h-min min-w-min flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <div
            style={{
              background: "url('/club-wizards.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[80px] h-[80px]"
          />

          <h2 className="mt-[24px] text-center text-[36px] font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
          <p className="mt-[12px] text-center text-sm/6 text-[#99a1af]">
            Don't you have an account?{" "}
            <Link
              href="/sign/up"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              click here.
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form action={authenticate} className="space-y-3">
            <Fields
              name="email"
              type="email"
              label="Email address"
              required
              autoComplete="email"
            />
            <PasswordField name="password" label="Password address" />
            <PasswdConfirm />

            <SignBttn label="Sign In" />
            <GithubBttn />
          </Form>
        </div>
      </div>

      <div
        className="w-[480px] h-[96%] rounded-[40px]"
        style={{
          background: "url('/test.svg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
    </section>
  );
};
