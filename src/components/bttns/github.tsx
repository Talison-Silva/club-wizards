import { signIn } from "next-auth/react";

export default () => {
  return (
    <div className="mt-[20px]">
      <button
        type="button"
        className="flex gap-[16px] w-full h-[52px] justify-center items-center rounded-md bg-[#141414] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#1c1c1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c1c1c] active:scale-90"
        onClick={() =>
          signIn("github", {
            callbackUrl: "/hub",
          })
        }
      >
        <img src="/github.svg" className="w-7 h-7" />
        <p>Sign in with Github</p>
      </button>
    </div>
  );
};
