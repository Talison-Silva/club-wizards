"use client";
import Form from "next/form";

import { auth } from "../../../lib/actions/users";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import { Route } from "next";

export default () => {
  const authenticate = (fields: FormData) => {
    signIn("authenticate", {
      password: fields.get("password"),
      email: fields.get("email"),
      redirect: false,
    });

    router.push("/hub");
  };
  const router: Route = useRouter();

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-[36px] font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
          <p className="mt-[12px] text-center text-sm/6 text-[#99a1af]">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form action={authenticate} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-[#1c2433] px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-[#333a48] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-[#1c2433] px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-[#333a48] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-[40px] flex w-full h-[52px] justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </Form>

          <div className="mt-[20px]">
            <button
              type="button"
              className="flex gap-[16px] w-full h-[52px] justify-center items-center rounded-md bg-[#141414] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#1c1c1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1c1c]"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "/hub",
                })
              }
            >
              <img src="/github.svg" className="w-7 h-7" />
              <p>Login with Github</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
