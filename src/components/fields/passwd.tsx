"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";

export default ({ name = "", label = "" }) => {
  const [toggle, sToggle] = useState(true);
  const labelRef = useRef(null);

  const onchange = (e) => {
    if (e.target.value.length > 0) {
      labelRef.current.classList.add("input-not-empty");
    } else {
      labelRef.current.classList.remove("input-not-empty");
    }
  };

  return (
    <div className="field-container">
      <label ref={labelRef} htmlFor={name} className="field-container-label">
        <p>{label}</p>
      </label>
      <div className="flex">
        <input
          id={name}
          name={name}
          type={toggle ? "password" : "text"}
          required
          onChange={onchange}
          autoComplete="current-password"
          className="field-container-input"
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
