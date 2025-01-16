export default ({
  label = "generic",
  name = "generic",
  type = "text",
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[14px] font-medium text-white flex items-center gap-[6px] "
      >
        <p>{label}</p>
        <img src="/asterisk.svg" className="w-4 h-4" />
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          className="block w-full rounded-md bg-[#1c2433] px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-[#333a48] placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          {...props}
        />
      </div>
    </div>
  );
};
