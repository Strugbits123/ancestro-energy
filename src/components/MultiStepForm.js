// "use client";
// import React, { useState } from "react";
// import CustomSelect from "./CustomSelect";
// import CustomSelectWithCheckbox from "./CustomSelectWithCheckbox";
// import Image from "next/image";
// import CustomCheckbox from "./CustomCheckbox";
// import CheckboxList from "./CheckboxList";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   // State for checkboxes in each step
//   const [checkboxState, setCheckboxState] = useState({
//     step1: [],
//     step2: [],
//     step3: [],
//     step4: [],
//   });

//   // Handle checkbox changes
//   const handleCheckboxChange = (stepKey, option) => (event) => {
//     setCheckboxState((prev) => {
//       const current = prev[stepKey];
//       if (event.target.checked) {
//         return { ...prev, [stepKey]: [...current, option] };
//       } else {
//         return { ...prev, [stepKey]: current.filter((item) => item !== option) };
//       }
//     });
//   };

//   // Handle next
//   const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   return (
//     <section className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 py-20 px-6">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-[30px] font-bold text-white text-center max-w-4xl font-helvetica">
//         APPLY TODAY TO JOIN THE CLEAN ENERGY MOVEMENT IN YOUR COMPANY
//       </h2>

//       {/* Card */}
//       <div
//         className="w-full max-w-4xl rounded-2xl border p-8 md:p-12 space-y-8 backdrop-blur-lg"
//         style={{
//           background: "rgba(255, 255, 255, 0.1)",
//           borderColor: step === 5 ? "#F5DC7B" : "#FFFFFF1A",
//           borderWidth: step === 5 ? "1px" : undefined,
//         }}
//       >
//         {/* Thank You Screen */}
//         {step === 5 ? (
//           <div className="text-center space-y-8 ">
//             <h3 className="text-4xl font-bold text-white font-lato">THANK YOU!</h3>
//             <p className="text-white font-lato text-2xl text-center">
//               YOUR CUSTOM PROPOSAL WILL BE GENERATED AND SENT WITHIN 24 HOURS.
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* Step Heading Row */}
//             <div className="flex items-center justify-center relative ">
//               {step > 1 && (
//                 <div
//                   className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer  "
//                   onClick={prevStep}
//                 >
//                   <Image
//                     src="/back.png"
//                     alt="Back"
//                     width={28}
//                     height={28}
//                     className="md:w-8 md:h-8 w-6 h-6 "
//                   />
//                 </div>
//               )}
//               <h3 className="text-md md:text-[27px] font-lato font-bold text-white text-center pl-10 md:pl-0">
//                 {step === 1 && "STEP 01: BASIC INFO"}
//                 {step === 2 && "STEP 02: PROPERTY DETAILS"}
//                 {step === 3 && "STEP 03: BUSINESS INFO"}
//                 {step === 4 && "STEP 04: ADDITIONAL QUESTIONS"}
//               </h3>
//             </div>

//             {/* STEP 1 */}
//             {step === 1 && (
//               <>
//                 {/* Checkboxes Row */}
//                 <CheckboxList />

//                 {/* First Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-lato font-bold text-[14px]">
//                       FULL NAME
//                     </label>
//                     <input
//                       type="text"
//                       placeholder=" "
//                       className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-lato font-bold text-[14px]">
//                       EMAIL
//                     </label>
//                     <input
//                       type="email"
//                       placeholder=" "
//                       className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
//                     />
//                   </div>
//                 </div>

//                 {/* Second Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-lato font-bold text-[14px]">
//                       PHONE NUMBER
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder=" "
//                       className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-lato font-bold text-[14px]">
//                       CITY
//                     </label>
//                     <input
//                       type="text"
//                       placeholder=" "
//                       className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
//                     />
//                   </div>
//                 </div>

//                 {/* Country & Dropdown */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-lato font-bold text-[14px]">
//                       COUNTRY
//                     </label>
//                     <input
//                       type="text"
//                       placeholder=" "
//                       className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 mt-4"
//                     />
//                   </div>
//                   <CustomSelect />
//                 </div>

//                 {/* Owner */}
//                 <div className="space-y-3 text-white">
//                   <label className="block text-sm font-lato font-bold text-[14px]">
//                     ARE YOU THE PROPERTY OWNER?
//                   </label>
//                   <div className="flex gap-6">
//                     {["YES", "NO"].map((o) => (
//                       <label
//                         key={o}
//                         className="flex items-center gap-2 cursor-pointer"
//                       >
//                         <CustomCheckbox
//                           checked={checkboxState.step1.includes(o)}
//                           onChange={handleCheckboxChange("step1", o)}
//                         />
//                         <span>{o}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* STEP 2 */}
//             {step === 2 && (
//               <>
//                 {/* Dropdown Property Type */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <CustomSelectWithCheckbox
//                       label="PROJECT TYPE"
//                       options={["Business", "House", "Solar Farm"]}
//                     />
//                   </div>

//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-bold font-lato">
//                       DO YOU NEED TO REPLACE YOUR ROOF WITHIN 2 YEARS?
//                     </label>
//                     <div className="flex gap-6">
//                       {["Yes", "No", "Not Sure"].map((o) => (
//                         <label
//                           key={o}
//                           className="flex items-center gap-2 cursor-pointer"
//                         >
//                           <CustomCheckbox
//                             checked={checkboxState.step2.includes(o)}
//                             onChange={handleCheckboxChange("step2", o)}
//                           />
//                           <span>{o}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Upload Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <div className="flex gap-2 items-center">
//                       <label className="text-sm font-bold font-lato">
//                         UPLOAD ROOF PHOTO
//                       </label>
//                       <span className="text-xs font-bold font-lato">
//                         (OPTIONAL)
//                       </span>
//                     </div>
//                     <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
//                       UPLOAD
//                       <input
//                         type="file"
//                         accept="image/*"
//                         className="hidden"
//                         onChange={(e) => console.log(e.target.files)}
//                       />
//                     </label>
//                     <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <div className="flex gap-2 items-center">
//                       <label className="text-sm font-bold font-lato">
//                         UPLOAD ELECTRIC PANEL PHOTO
//                       </label>
//                       <span className="text-xs font-lato">(OPTIONAL)</span>
//                     </div>
//                     <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
//                       UPLOAD
//                       <input
//                         type="file"
//                         accept="image/*"
//                         className="hidden"
//                         onChange={(e) => console.log(e.target.files)}
//                       />
//                     </label>
//                     <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
//                   </div>
//                 </div>

//                 {/* Bill Section */}
//                 <div className="flex flex-col space-y-4 text-white">
//                   <label className="text-sm md:text-[14px] font-bold font-lato uppercase">
//                     AVERAGE MONTHLY ELECTRICITY BILL
//                   </label>
//                   <div className="flex items-center gap-3 flex-wrap">
//                     <div className="flex items-center gap-1">
//                       <input
//                         type="number"
//                         className="flex w-24 bg-transparent border-b border-[#FFFFFF4D] text-white text-sm font-lato px-2 py-1 focus:outline-none focus:border-[#F8B03B]"
//                       />
//                       <span className="text-white text-sm tracking-widest font-lato text-[12px] font-bold">
//                         $/MO TYPE ESTIMATED VALUE OF ELECTRIC BILL
//                       </span>
//                     </div>
//                     <label className="bg-[#FFFFFF33] px-2 py-2 rounded-xl font-lato text-[12px] text-center cursor-pointer">
//                       UPLOAD
//                       <input
//                         type="file"
//                         accept="application/pdf, image/jpeg"
//                         className="hidden"
//                         onChange={(e) => console.log(e.target.files)}
//                       />
//                     </label>
//                     <span className="text-xs md:text-sm font-lato text-[#FFFFFFCC] text-[11px]">
//                       Upload electric bill (PDF OR JPEG)
//                     </span>
//                   </div>
//                   <div className="border-b border-[#FFFFFF4D] mt-2"></div>
//                 </div>
//               </>
//             )}

//             {/* STEP 3 */}
//             {step === 3 && (
//               <div className="space-y-4 text-white">
//                 {[
//                   "SOLAR SUBSCRIPTION BASED ON CURRENT NEEDS",
//                   "SOLAR SUBSCRIPTION TO PROVIDE A SURPLUS OF ENERGY BEYOND CURRENT NEEDS",
//                   "BATTERY SUBSCRIPTION (PARTIAL BACKUP ESSENTIAL LOADS)",
//                   "BATTERY SUBSCRIPTION (FULL BACKUP FOR TOTAL INDEPENDENCE)",
//                   "EV CHARGING ON SITE",
//                 ].map((item) => (
//                   <label
//                     key={item}
//                     className="flex items-center gap-2 md:gap-4 cursor-pointer w-full"
//                   >
//                     <CustomCheckbox
//                       checked={checkboxState.step3.includes(item)}
//                       onChange={handleCheckboxChange("step3", item)}
//                     />
//                     <span className="font-lato text-[12px] sm:text-[15px] leading flex-1">
//                       {item}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* STEP 4 */}
//             {step === 4 && (
//               <div className="space-y-4 text-white">
//                 <p>(CHECK ALL THAT APPLY)</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {[
//                     "REDUCE MY ELECTRICITY BILLS",
//                     "REDUCE BLACKOUT RISK",
//                     "SUPPORT SUSTAINAINABILITY",
//                     "ALL OF ABOVE",
//                   ].map((item) => (
//                     <label
//                       key={item}
//                       className="flex items-center gap-2 cursor-pointer"
//                     >
//                       <CustomCheckbox
//                         checked={checkboxState.step4.includes(item)}
//                         onChange={handleCheckboxChange("step4", item)}
//                       />
//                       <span>{item}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Navigation */}
//             <button
//               onClick={nextStep}
//               className="w-full px-8 py-3 rounded-full font-bold text-sm md:text-[18px] font-lato"
//               style={{
//                 backgroundColor: "#F8B03B",
//                 color: "#000000",
//               }}
//             >
//               {step === 4 ? "SUBMIT APPLICATION" : "NEXT"}
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MultiStepForm;
"use client";
import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomSelectWithCheckbox from "./CustomSelectWithCheckbox";
import Image from "next/image";
import CustomCheckbox from "./CustomCheckbox";
import CheckboxList from "./CheckboxList";
import { useTranslation } from "react-i18next";

const MultiStepForm = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [checkboxState, setCheckboxState] = useState({
    step1: [],
    step2: [],
    step3: [],
    step4: [],
  });

  const handleCheckboxChange = (stepKey, option) => (event) => {
    setCheckboxState((prev) => {
      const current = prev[stepKey];
      if (event.target.checked) {
        return { ...prev, [stepKey]: [...current, option] };
      } else {
        return { ...prev, [stepKey]: current.filter((item) => item !== option) };
      }
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 py-20 px-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-[30px] font-bold text-white text-center max-w-4xl font-helvetica">
        {t("multiStepForm.title")}
      </h2>

      {/* Card */}
      <div
        className="w-full max-w-4xl rounded-2xl border p-8 md:p-12 space-y-8 backdrop-blur-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderColor: step === 5 ? "#F5DC7B" : "#FFFFFF1A",
          borderWidth: step === 5 ? "1px" : undefined,
        }}
      >
        {/* Thank You Screen */}
        {step === 5 ? (
          <div className="text-center space-y-8">
            <h3 className="text-4xl font-bold text-white font-lato">{t("multiStepForm.thankYou")}</h3>
            <p className="text-white font-lato text-2xl text-center">
              {t("multiStepForm.thankYouSubtitle")}
            </p>
          </div>
        ) : (
          <>
            {/* Step Heading Row */}
            <div className="flex items-center justify-center relative">
              {step > 1 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={prevStep}
                >
                  <Image
                    src="/back.png"
                    alt="Back"
                    width={28}
                    height={28}
                    className="md:w-8 md:h-8 w-6 h-6"
                  />
                </div>
              )}
              <h3 className="text-md md:text-[27px] font-lato font-bold text-white text-center pl-10 md:pl-0">
                {t('multiStepForm.stepTitles', { returnObjects: true })[step - 1]}
              </h3>
                    {/* <h3 className="text-md md:text-[27px] font-lato font-bold text-white text-center pl-10 md:pl-0">
                 {step === 1 && "STEP 01: BASIC INFO"}
                {step === 2 && "STEP 02: PROPERTY DETAILS"}
                {step === 3 && "STEP 03: BUSINESS INFO"}
                {step === 4 && "STEP 04: ADDITIONAL QUESTIONS"}
              </h3> */}
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                {/* Checkboxes Row */}
                <CheckboxList />

                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.fullName")}
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.email")}
                    </label>
                    <input
                      type="email"
                      placeholder=" "
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder=" "
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.city")}
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300"
                    />
                  </div>
                </div>

                {/* Country & Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-lato font-bold text-[14px]">
                      {t("multiStepForm.country")}
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 mt-4"
                    />
                  </div>
                  <CustomSelect />
                </div>

                {/* Owner */}
                <div className="space-y-3 text-white">
                  <label className="block text-sm font-lato font-bold text-[14px]">
                    {t("multiStepForm.propertyOwner")}
                  </label>
                  <div className="flex gap-6">
                    {t("multiStepForm.propertyOwnerOptions", { returnObjects: true }).map((o) => (
                      <label
                        key={o}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <CustomCheckbox
                          checked={checkboxState.step1.includes(o)}
                          onChange={handleCheckboxChange("step1", o)}
                        />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                {/* Dropdown Property Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <CustomSelectWithCheckbox
                      label={t("multiStepForm.projectType")}
                      options={t("multiStepForm.projectTypeOptions", { returnObjects: true })}
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold font-lato">
                      {t("multiStepForm.roofReplacement")}
                    </label>
                    <div className="flex gap-6">
                      {t("multiStepForm.roofReplacementOptions", { returnObjects: true }).map((o) => (
                        <label
                          key={o}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <CustomCheckbox
                            checked={checkboxState.step2.includes(o)}
                            onChange={handleCheckboxChange("step2", o)}
                          />
                          <span>{o}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Upload Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.uploadRoofPhoto")}
                      </label>
                      <span className="text-xs font-bold font-lato">
                        {t("multiStepForm.uploadRoofOptional")}
                      </span>
                    </div>
                    <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
                      {t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => console.log(e.target.files)}
                      />
                    </label>
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <label className="text-sm font-bold font-lato">
                        {t("multiStepForm.uploadElectricPanel")}
                      </label>
                      <span className="text-xs font-lato">
                        {t("multiStepForm.uploadElectricPanelOptional")}
                      </span>
                    </div>
                    <label className="w-1/4 bg-[#FFFFFF33] px-2 py-2 rounded-xl mt-2 font-lato text-[12px] text-center cursor-pointer">
                      {t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => console.log(e.target.files)}
                      />
                    </label>
                    <div className="bg-transparent border-b-1 border-[#FFFFFF4D] outline-none mt-2"></div>
                  </div>
                </div>

                {/* Bill Section */}
                <div className="flex flex-col space-y-4 text-white">
                  <label className="text-sm md:text-[14px] font-bold font-lato uppercase">
                    {t("multiStepForm.averageBill")}
                  </label>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        className="flex w-24 bg-transparent border-b border-[#FFFFFF4D] text-white text-sm font-lato px-2 py-1 focus:outline-none focus:border-[#F8B03B]"
                      />
                      <span className="text-white text-sm tracking-widest font-lato text-[12px] font-bold">
                        {t("multiStepForm.billValueLabel")}
                      </span>
                    </div>
                    <label className="bg-[#FFFFFF33] px-2 py-2 rounded-xl font-lato text-[12px] text-center cursor-pointer">
                      {t("multiStepForm.uploadBill")}
                      <input
                        type="file"
                        accept="application/pdf, image/jpeg"
                        className="hidden"
                        onChange={(e) => console.log(e.target.files)}
                      />
                    </label>
                    <span className="text-xs md:text-sm font-lato text-[#FFFFFFCC] text-[11px]">
                      {t("multiStepForm.uploadBillHint")}
                    </span>
                  </div>
                  <div className="border-b border-[#FFFFFF4D] mt-2"></div>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4 text-white">
                {t("multiStepForm.step3Options", { returnObjects: true }).map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 md:gap-4 cursor-pointer w-full"
                  >
                    <CustomCheckbox
                      checked={checkboxState.step3.includes(item)}
                      onChange={handleCheckboxChange("step3", item)}
                    />
                    <span className="font-lato text-[12px] sm:text-[15px] leading flex-1">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-4 text-white">
                <p>{t("multiStepForm.step4Intro")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t("multiStepForm.step4Options", { returnObjects: true }).map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <CustomCheckbox
                        checked={checkboxState.step4.includes(item)}
                        onChange={handleCheckboxChange("step4", item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <button
              onClick={nextStep}
              className="w-full px-8 py-3 rounded-full font-bold text-sm md:text-[18px] font-lato"
              style={{
                backgroundColor: "#F8B03B",
                color: "#000000",
              }}
            >
              {step === 4 ? t("multiStepForm.submitButton") : t("multiStepForm.nextButton")}
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default MultiStepForm;