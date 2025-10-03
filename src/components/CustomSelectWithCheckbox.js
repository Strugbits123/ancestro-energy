"use client";
import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";

const CustomSelectWithCheckbox = ({
  label = "TYPE OF PROPERTY",
  options,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (opt) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  return (
    <div className="relative w-full text-white font-lato">
      {label && (
        <div className="flex items-center justify-between mb-2 relative z-30">
          <label className="text-sm font-bold text-[14px]">{label}</label>
          <svg
            width="13"
            height="5"
            viewBox="0 0 13 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <path
              d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      )}

      {/* Selected box */}
      <div
        className="w-full bg-transparent border-b border-[#FFFFFF4D] outline-none px-2 py-2 cursor-pointer relative z-30"
        onClick={() => setOpen(!open)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select type"}
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          className="absolute left-0 mt-1 w-full rounded-md shadow-lg bg-black/50 backdrop-blur-sm z-40 bg-[#FFFFFF1A]"
          style={{ borderColor: "#FFFFFF1A" }}
        >
          {options.map((opt) => (
            <li
              key={opt}
              className="px-4 py-2 cursor-pointer hover:bg-white/30 text-white font-lato font-bold flex items-center gap-2"
              onClick={() => toggleOption(opt)}
            >
              <CustomCheckbox
                checked={selectedOptions.includes(opt)}
                onChange={() => toggleOption(opt)}
              />
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectWithCheckbox;