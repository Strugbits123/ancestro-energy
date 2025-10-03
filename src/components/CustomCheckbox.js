import React from 'react';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <>
      <style>{`
        .custom-checkbox {
          position: relative; /* Ensure relative positioning for ::after */
        }
        .custom-checkbox:checked::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 10px;
          border: solid #F8B03B; /* Yellow tick color */
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          top: 3px;
          left: 6px;
        }
      `}</style>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[19px] h-[19px] rounded-[5px] border border-white bg-[#FFFFFF33] 
        appearance-none cursor-pointer custom-checkbox"
      />
    </>
  );
};

export default CustomCheckbox;