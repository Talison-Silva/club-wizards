export default ({ label = "Sign in" }) => {
  return (
    <div>
      <button
        type="submit"
        className="mt-[40px] flex w-full h-[52px] justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-90"
      >
        {label}
      </button>
    </div>
  );
};
