"use client";

import { Component, useRef, useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default () => {
  const passwdConfirmRef = useRef(null);
  const [learn, sLearn] = useState(false);
  const [check, sCheck] = useState(false);
  const labelRef = useRef(null);

  let passwd: String = "",
    compare: String = "";
  const analise = (e) => {
    if (e.target.value.length > 0) {
      labelRef.current.classList.add("input-not-empty");
    } else {
      labelRef.current.classList.remove("input-not-empty");
    }

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
    <div className="field-container">
      <label
        ref={labelRef}
        htmlFor="passwd-confirm"
        className="field-container-label"
      >
        Confirm password
      </label>
      <div className="flex">
        <input
          id="passwd-confirm"
          ref={passwdConfirmRef}
          type="password"
          className="field-container-input"
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
