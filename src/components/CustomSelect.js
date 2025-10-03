// "use client";
// import React, { useState } from "react";

// const CustomSelect = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState("");

//   const options = ["HOTEL", "PARKING LOT", "RESORT", "FARMHOUSE", "HOUSE", "MALL"];

//   return (
//     <div className="relative w-full text-white font-lato">
//       <div className="flex items-center justify-between mb-2">
//         <label className="text-sm font-bold text-[14px]">
//           TYPE OF PROPERTY
//         </label>
//         <svg 
//           width="13" 
//           height="5" 
//           viewBox="0 0 13 5" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="hover:cursor-pointer" 
//           onClick={() => setOpen(!open)}
//         >
//           <path d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z" fill="#D9D9D9"/>
//         </svg>
//       </div>
//       {/* Selected box */}
//       <div
//         className="w-full bg-transparent border-b-1 border-[#FFFFFF4D] outline-none px-2 py-2 cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         {selected || "Select type"}
//       </div>

//       {/* Dropdown */}
//       {open && (
//         <ul
//           className="absolute left-0 mt-1 w-full rounded-md shadow-lg backdrop-blur-lg z-10 bg-[#FFFFFF1A]"
//           style={{
//             borderColor: "#FFFFFF1A",
//           }}
//         >
//           {options.map((opt) => (
//             <li
//               key={opt}
//               onClick={() => {
//                 setSelected(opt);
//                 setOpen(false);
//               }}
//               className="px-4.5 py-2 cursor-pointer hover:bg-white/30 text-white font-lato font-bold"
//             >
//               {opt}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomSelect;
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CustomSelect = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = t("customSelect.options", { returnObjects: true });

  return (
    <div className="relative w-full text-white font-lato">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-bold text-[14px]">
          {t("customSelect.label")}
        </label>
        <svg
          width="13"
          height="5"
          viewBox="0 0 13 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <path d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z" fill="#D9D9D9" />
        </svg>
      </div>
      {/* Selected box */}
      <div
        className="w-full bg-transparent border-b-1 border-[#FFFFFF4D] outline-none px-2 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selected || t("customSelect.placeholder")}
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          className="absolute left-0 mt-1 w-full rounded-md shadow-lg backdrop-blur-lg z-10 bg-[#FFFFFF1A]"
          style={{
            borderColor: "#FFFFFF1A",
          }}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="px-4.5 py-2 cursor-pointer hover:bg-white/30 text-white font-lato font-bold"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;