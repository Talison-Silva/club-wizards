"use client";

import PasswdField from "../../../components/fields/passwd";
import Fields from "../../../components/fields";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Form from "next/form";
import SignBttn from "../../../components/bttns/sign";

export default () => {
  const register = async (fields: FormData) => {
    try {
      var body = {
        name: fields.get("name"),
        password: fields.get("password"),
        email: fields.get("email"),
      };

      var response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="relative h-screen flex justify-center items-center">
      <div className="z-20 flex min-w-min min-h-min flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-[32px] font-bold tracking-tight text-white">
            Sign up to your account
          </h2>
          <p className="mt-[12px] text-center text-sm/6 text-[#99a1af]">
            Already have an account?{" "}
            <Link
              href="/sign/in"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              click here.
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form action={register} className="space-y-3">
            <Fields label="Username address" name="name" type="text" required />
            <Fields
              label="Email address"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <PasswdField label="Password" name="password" />

            <SignBttn label="Sign Up" />
          </Form>
        </div>
      </div>
    </section>
  );
};
