"use client";

import { Component, useRef, useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default () => {
  const passwdConfirmRef = useRef(null);
  const [learn, sLearn] = useState(false);
  const [check, sCheck] = useState(false);

  let passwd: String = "",
    compare: String = "";
  const analise = () => {
    passwd = document.getElementsByName("password")[0].value;
    compare = passwdConfirmRef.current.value || "";

    if (compare.length > 0) {
      sLearn(true);
    } else {
      sLearn(false);
    }

    if (passwd.indexOf(compare) == 0) {
      sCheck(true);
    } else {
      sCheck(false);
    }
  };
  return (
    <div>
      <label
        htmlFor="passwd-confirm"
        className="block text-[14px] font-medium text-white"
      >
        Confirm password
      </label>
      <div className="mt-1 input-content">
        <input
          id="passwd-confirm"
          ref={passwdConfirmRef}
          type="password"
          className="input"
          onChange={analise}
        />
        <button type="button">
          {!learn && (
            <p className="text-[24px] font-[600] text-white px-[12px]">?</p>
          )}
          {learn && check && (
            <div className="px-[12px]">
              <CheckIcon className="w-6 h-6 text-emerald-500 font-[600]" />
            </div>
          )}
          {learn && !check && (
            <div className="px-[12px]">
              <XMarkIcon className="w-6 h-6 text-red-500 font-[600]" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
