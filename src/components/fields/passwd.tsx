"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default ({ name = "", label = "" }) => {
  const [toggle, sToggle] = useState(true);

  return (
    <div>
      <label
        htmlFor={name}
        className="text-[14px] font-medium text-white flex items-center gap-[6px] "
      >
        <p>{label}</p>
        <img src="/asterisk.svg" className="w-4 h-4" />
      </label>
      <div className="mt-1 input-content">
        <input
          id={name}
          name={name}
          type={toggle ? "password" : "text"}
          required
          autoComplete="current-password"
          className="input"
        />
        <button type="button">
          {toggle && (
            <EyeIcon
              className="w-6 h-6 mx-2 select-none"
              onClick={() => {
                sToggle(false);
              }}
            />
          )}
          {!toggle && (
            <EyeSlashIcon
              className="w-6 h-6 mx-2 select-none"
              onClick={() => {
                sToggle(true);
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};
