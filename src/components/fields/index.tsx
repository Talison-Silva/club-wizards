import { useRef } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default ({
  label = "generic",
  name = "generic",
  type = "text",
  ...props
}) => {
  const onchange = (e) => {
    if (e.target.value.length > 0) {
      labelRef.current.classList.add("input-not-empty");
    } else {
      labelRef.current.classList.remove("input-not-empty");
    }
  };
  const labelRef = useRef(null);

  return (
    <div className="field-container">
      <label ref={labelRef} htmlFor={name} className="field-container-label">
        <p>{label}</p>
      </label>
      <div className="flex">
        <input
          id={name}
          name={name}
          type={type}
          className="field-container-input"
          placeholder={name}
          onChange={onchange}
          required
          {...props}
        />
        <button>
          <EnvelopeIcon className="w-6 h-6 mx-2 select-none" />
        </button>
      </div>
    </div>
  );
};
