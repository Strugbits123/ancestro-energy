// import Header from '../src/components/Header';
// import Footer from '../src/components/Footer';
// import SunButton from '../src/components/ui/SunButton';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 md:py-1">
//         <div className="absolute inset-0 overflow-hidden z-0">
//           {/* Background Video */}
//           <video
//             className="w-full h-full object-cover"
//             src="/assets/hero-section.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />

//         </div>

//         <div className="container-2xl mx-auto px-[55px] text-center relative z-10 py-20"

//         >
//           {/* Main Heading */}
//           <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white mt-4 md:mt-16 mb-8 md:mb-12 leading-tight tracking-wide uppercase max-w-6xl mx-auto">
//             Where Solar Power meets ancestral Wisdom
//           </h1>

//           {/* CTA Cards Container */}
//           <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-8 md:mt-16 max-w-4xl mx-auto">
//             {/* Left Card - Customer */}
//             <div className="flex flex-col justify-between items-center h-[313px] p-6  md:p-8 gap-8 w-full max-w-sm bg-gradient-to-r from-white/30 via-white/20 to-white/10 border border-white/30 backdrop-blur-lg rounded-3xl shadow-2xl">
//               {/* Features List */}
//               <div className="flex flex-col items-start gap-4 w-full">
//                 {/* $0 Investment */}
//                 <div className="flex items-center gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0">
//                     <img src={'/icons/zero-investment.png'} className='h-full w-full' />
//                   </div>
//                   <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
//                     $0 investment
//                   </span>
//                 </div>

//                 {/* Lower Monthly Bill */}
//                 <div className="flex items-center gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0">
//                     <img src={'/icons/lower-bill.png'} className='h-full w-full' />
//                   </div>
//                   <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
//                     Lower Monthly bill
//                   </span>
//                 </div>

//                 {/* Energy Independence */}
//                 <div className="flex items-center gap-3 w-full">
//                   <div className="w-5 h-5  rounded-sm flex-shrink-0">
//                     <img src={'/icons/energy-independence.png'} className='h-full w-full' />
//                   </div>
//                   <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
//                     Energy independence
//                   </span>
//                 </div>

//                 {/* Sustainable Solution */}
//                 <div className="flex items-center gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0">
//                     <img src={'/icons/sustainable-solutions.png'} className='h-full w-full' />
//                   </div>
//                   <span className="font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
//                     Sustainable Solution
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <SunButton redirect={"/solar"} className="w-full" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>I WANT SOLAR</SunButton>
//             </div>

//             {/* Right Card - Dealer */}
//             <div className="flex flex-col justify-between items-center h-[313px] p-6 md:p-8 gap-8 w-full max-w-sm bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-3xl shadow-2xl">
//               {/* Features List */}
//               <div className="flex flex-col items-start gap-4 w-full">
//                 {/* Grow Your Business */}
//                 <div className="flex items-center gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0">
//                     <img src={'/icons/grow-your-business.png'} className='h-full w-full' />
//                   </div>
//                   <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white">
//                     Grow your business
//                   </span>
//                 </div>

//                 {/* Join #1 Solar Network */}
//                 <div className="flex items-start gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0 mt-1">
//                     <img src={'/icons/join-solar.png'} className='h-full w-full' />

//                   </div>
//                   <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white leading-tight">
//                     join #1 Solar network in Latin America
//                   </span>
//                 </div>

//                 {/* Get Funding */}
//                 <div className="flex items-start gap-3 w-full">
//                   <div className="w-5 h-5 rounded-sm flex-shrink-0 mt-1">
//                     <img src={'/icons/get-funding.png'} className='h-full w-full' />
//                   </div>
//                   <span className="text-left font-lato font-bold text-sm md:text-lg tracking-wider uppercase text-white leading-tight">
//                     Get funding for your projects
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <SunButton redirect={'/dealer'} className="w-full" textClassName='whitespace-nowrap text-sm md:text-base lg:text-lg '>I WANT TO BECOME A DEALER</SunButton>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
// "use client";
// import Image from "next/image";
// import Button from "../src/components/Button";
// import MultiStepForm from "../src/components/MultiStepForm";
// import CaseStudySection from "../src/components/CaseStudySection";
// import { useState } from "react";
// import CustomCheckbox from "../src/components/CustomCheckbox";

// export default function Home() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [checkboxState, setCheckboxState] = useState([]);

//   const handleCheckboxChange = (option) => (event) => {
//     if (event.target.checked) {
//       setCheckboxState((prev) => [...prev, option]);
//     } else {
//       setCheckboxState((prev) => prev.filter((item) => item !== option));
//     }
//   };

//   const handleApplyNow = () => {
//     console.log("Form submitted:", { checkboxState });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col w-full bg-black">
//       {/* Custom Animation for Top-to-Bottom Hopping */}
//       <style>{`
//         @keyframes top-to-bottom-hop {
//           0% { transform: translateY(0) rotate(360deg); }
//           50% { transform: translateX(20px) rotate(360deg); }
//           100% { transform: translateY(0) rotate(360deg); }
//         }
//         .animate-top-to-bottom-hop {
//           animation: top-to-bottom-hop 1s infinite ease-in-out;
//         }
//       `}</style>

//       {/* Fixed Hopping Button */}
//       <Button
//         variant="yellow"
//         onClick={() => setIsModalOpen(true)}
//         className="fixed right-1 bottom-[35%] rotate-90 animate-top-to-bottom-hop z-50 
//                    tracking-[2px] font-lato font-bold text-[16px] px-8 py-2 
//                    shadow-[0_10px_30px_rgba(248,176,59,0.8)] text-white"
//         style={{ backgroundColor: "rgba(248,176,59,0.5)" }}
//       >
//         GET A PROPOSAL
//       </Button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-y-auto"
//           onClick={() => setIsModalOpen(false)}
//         >
//           <div
//             className="w-full max-w-[95vw] sm:w-5xl flex flex-col h-[85vh] sm:h-[80vh] min-h-[500px] rounded-2xl overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Top Section: Background and Foreground Image with Heading */}
//             <div
//               className="relative flex-1 bg-cover bg-center flex flex-col items-center justify-center p-3 sm:p-6"
//               style={{ backgroundImage: "url('/ModalBg.png')" }}
//             >
//               <div className="relative w-[120px] h-[120px] sm:w-[173px] sm:h-[91px]">
//                 <Image
//                   src="/eco1.png"
//                   alt="Modal Foreground"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-helvetica mt-3 sm:mt-4 text-center text-[20px] sm:text-[32px] md:text-[50px]">
//                 YOUR BATTERY <br className="sm:hidden" />SUBSCRIPTION PROPOSAL
//               </h3>
//             </div>

//             {/* Bottom Section: Card with Form */}
//             <div className="bg-[#FFFFFF1A] backdrop-blur-lg p-3 sm:p-6 md:p-8 flex-1 flex items-center justify-center">
//               <div className="w-full max-w-[95%] sm:max-w-2xl space-y-5 sm:space-y-8 bg-[#0000004D] p-3 sm:p-5 md:p-8 rounded-2xl">
//                 {/* Heading */}
//                 <h4 className="text-base sm:text-lg md:text-xl font-bold text-white font-lato text-center">
//                   Secure Your Spot in the Ancestro Energy Network
//                 </h4>

//                 {/* First Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
//                       FULL NAME
//                     </label>
//                     <input
//                       type="text"
//                       placeholder=" "
//                       className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
//                       EMAIL
//                     </label>
//                     <input
//                       type="email"
//                       placeholder=" "
//                       className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
//                     />
//                   </div>
//                 </div>

//                 {/* Second Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-white">
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
//                       PHONE / WHATSAPP
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder=" "
//                       className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
//                       ADDRESS / BUSINESS NAME
//                     </label>
//                     <input
//                       type="text"
//                       placeholder=" "
//                       className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
//                     />
//                   </div>
//                 </div>

//                 {/* Checkbox Options */}
//                 <div className="flex flex-wrap gap-2 sm:gap-4 text-white items-start">
//                   {[
//                     "JOIN FREE WAITLIST",
//                     "PRIORITY ACCESS (PAY DEPOSIT VIA STRIPE/PAYPAL)",
//                   ].map((item) => (
//                     <label
//                       key={item}
//                       className="flex items-start gap-1 cursor-pointer min-w-[140px] sm:min-w-[180px]"
//                     >
//                       <CustomCheckbox
//                         checked={checkboxState.includes(item)}
//                         onChange={handleCheckboxChange(item)}
//                       />
//                       <span className="font-lato text-[10px] sm:text-[12px] md:text-[14px]">
//                         {item}
//                       </span>
//                     </label>
//                   ))}
//                 </div>

//                 {/* Apply Now Button */}
//                 <button
//                   onClick={handleApplyNow}
//                   className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-[18px] font-lato"
//                   style={{
//                     backgroundColor: "#F8B03B",
//                     color: "#000000",
//                   }}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ========= HERO SECTION (with bg image) ========= */}
//       <section className="relative min-h-screen flex flex-col justify-center">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('/HeroBg.png')" }}
//         />
//         <div className="absolute inset-0 bg-black/70" />
//         <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6 relative z-10">
//           <div className="md:w-[60%] text-white space-y-10">
//             <h1 className="text-3xl md:text-[45px] font-lato font-bold leading-tight">
//               JOIN LATAM’S FASTEST-GROWING <br />
//               SOLAR + BATTERY <br />
//               SUBSCRIPTION NETWORK
//             </h1>
//             <p className="text-base font-lato md:text-xl max-w-3xl">
//               $0 upfront. Day-one savings. Long-term stability. Available now in
//               18 countries.
//             </p>
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] md:grid-cols-9 gap-3 w-full">
//               {Array.from({ length: 18 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="relative w-full aspect-[3/2] max-w-[60px] md:w-[40px] md:h-[27px]"
//                 >
//                   <Image
//                     src={`/flags/flag${i}.png`}
//                     alt={`Flag ${i}`}
//                     fill
//                     sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
//                     className="object-cover rounded-sm"
//                   />
//                 </div>
//               ))}
//             </div>
//             <Button>Apply Now – Go Solar for $0 Down</Button>
//           </div>
//           <div className="md:w-[40%] flex justify-center mt-10 md:mt-0">
//             <div className="relative w-[267px] h-[347px] md:w-[534px] md:h-[694px] translate-y-6">
//               <Image
//                 src="/HeroImage.png"
//                 alt="Solar illustration"
//                 fill
//                 priority
//                 className="object-contain object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========= SOLAR SUBSCRIPTION SECTION ========= */}
//       <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
//         <div className="md:w-[48%] flex justify-center">
//           <div className="relative w-[315px] h-[276px] md:w-[631px] md:h-[552px]">
//             <Image
//               src="/SolarSubscription.png"
//               alt="Solar Subscription"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>
//         </div>
//         <div className="md:w-[52%] text-white space-y-3 items-center">
//           <div
//             className="inline-block border px-6 py-2 rounded-md font-helvetica text-[14px] font-bold"
//             style={{
//               borderColor: "#F8B03B",
//               backgroundColor: "#F8B03B4D",
//               color: "#F8B03B",
//             }}
//           >
//             SOLAR SUBSCRIPTION
//           </div>
//           <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
//             What is Solar Subscription?
//           </h2>
//           <p className="text-base md:text-lg font-helvetica">
//             It’s the easiest way to switch to clean energy. With zero upfront
//             cost, you don’t buy the panels — Ancestro does. You simply switch
//             your monthly payment from the utility to Ancestro.
//           </p>
//           <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
//             <li>Zero upfront cost — no big investment required.</li>
//             <li>Stable rates that protect you from utility price hikes.</li>
//             <li>Ancestro owns + maintains the equipment.</li>
//             <li>Pay directly through the Ancestro app.</li>
//           </ul>
//           <Button>Apply Now – Go Solar for $0 Down</Button>
//         </div>
//       </section>

//       {/* ========= BATTERY SUBSCRIPTION SECTION ========= */}
//       <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
//         <div className="md:w-[52%] text-white space-y-3">
//           <div
//             className="inline-block border px-6 py-2 rounded-md font-bold font-helvetica text-[14px]"
//             style={{
//               borderColor: "#F8B03B",
//               backgroundColor: "#F8B03B4D",
//               color: "#F8B03B",
//             }}
//           >
//             BATTERY SUBSCRIPTION
//           </div>
//           <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
//             Never Be Left in the Dark.
//           </h2>
//           <p className="text-base md:text-lg font-helvetica">
//             Ancestro’s Battery Subscription gives you backup power during outages — all with zero upfront cost.
//           </p>
//           <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
//             <li>Protection from blackouts at home or work.</li>
//             <li>Peace of mind for families + businesses.</li>
//             <li>Ancestro owns + maintains the battery.</li>
//             <li>Controlled and monitored through the Ancestro app.</li>
//           </ul>
//           <Button>Apply Now</Button>
//         </div>
//         <div className="md:w-[48%] flex justify-center mt-10 md:mt-0">
//           <div className="relative w-[315px] h-[276px] md:w-[631px] md:h-[552px]">
//             <Image
//               src="/BatterySubscription.png"
//               alt="Battery Subscription"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ========= ALL IN ONE APP SECTION ========= */}
//       <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
//         <div className="md:w-[60%] flex justify-center">
//           <div className="relative w-[320px] h-[280px] md:w-[720px] md:h-[480px]">
//             <Image
//               src="/AllInOneApp.png"
//               alt="All in One App"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>
//         </div>
//         <div className="md:w-[40%] text-white space-y-3">
//           <div
//             className="inline-block border px-6 py-2 rounded-md font-helvetica text-[14px]"
//             style={{
//               borderColor: "#F5DC7B",
//               backgroundColor: "#F5DC7B1A",
//               color: "#F5DC7B",
//             }}
//           >
//             ALL IN ONE APP
//           </div>
//           <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
//             Switching is simple
//           </h2>
//           <p className="text-base md:text-lg font-helvetica">
//             With zero upfront cost, you just sign up and manage everything from the Ancestro Energy app.
//           </p>
//           <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
//             <li>Track your energy use.</li>
//             <li>See billing + payments in real-time.</li>
//             <li>Simple, secure, and mobile-friendly.</li>
//           </ul>
//           <Button variant="white" className="mt-2">
//             Apply Now – Go Solar for $0 Down
//           </Button>
//         </div>
//       </section>

//       {/* ========= ENERGY TRANSITION SECTION ========= */}
//       <section className="w-full max-w-7xl mx-auto py-20 px-6">
//         <div
//           className="w-full rounded-4xl border px-8 py-12 text-center space-y-6"
//           style={{
//             backgroundColor: "#F5DC7B33",
//             borderColor: "#F5DC7B",
//           }}
//         >
//           <h2 className="text-2xl md:text-[70px] font-bold font-helvetica text-white">
//             Be Part of the Energy Transition.
//           </h2>
//           <p className="text-base md:text-[30px] font-helvetica text-white max-w-3xl mx-auto">
//             Join millions of homes and businesses switching to clean, reliable power — with zero upfront cost.
//           </p>
//           <Button variant="white">
//             Apply Now – Join the $0 Down Energy Revolution
//           </Button>
//         </div>
//       </section>

//       <MultiStepForm />
//       <CaseStudySection />
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Button from "../src/components/Button";
import MultiStepForm from "../src/components/MultiStepForm";
import CaseStudySection from "../src/components/CaseStudySection";
import { useState } from "react";
import CustomCheckbox from "../src/components/CustomCheckbox";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState([]);

  const handleCheckboxChange = (option) => (event) => {
    if (event.target.checked) {
      setCheckboxState((prev) => [...prev, option]);
    } else {
      setCheckboxState((prev) => prev.filter((item) => item !== option));
    }
  };

  const handleApplyNow = () => {
    console.log("Form submitted:", { checkboxState });
    setIsModalOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-black">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 bg-[#F8B03B] text-black font-lato font-bold px-4 py-2 rounded-full text-sm shadow-[0_4px_10px_rgba(248,176,59,0.5)]"
      >
        {i18n.language === "en" ? "Español" : "English"}
      </button>

      {/* Custom Animation for Top-to-Bottom Hopping */}
      <style>{`
        @keyframes top-to-bottom-hop {
          0% { transform: translateY(0) rotate(360deg); }
          50% { transform: translateX(20px) rotate(360deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        .animate-top-to-bottom-hop {
          animation: top-to-bottom-hop 1s infinite ease-in-out;
        }
      `}</style>

      {/* Fixed Hopping Button */}
      <Button
        variant="yellow"
        onClick={() => setIsModalOpen(true)}
        className="fixed right-1 bottom-[35%] rotate-90 animate-top-to-bottom-hop z-50 
                   tracking-[2px] font-lato font-bold text-[16px] px-8 py-2 
                   shadow-[0_10px_30px_rgba(248,176,59,0.8)] text-white"
        style={{ backgroundColor: "rgba(248,176,59,0.5)" }}
      >
        {t("fixedButton.applyButton").toUpperCase()}
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-[95vw] sm:w-5xl flex flex-col h-[85vh] sm:h-[80vh] min-h-[500px] rounded-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Section: Background and Foreground Image with Heading */}
            <div
              className="relative flex-1 bg-cover bg-center flex flex-col items-center justify-center p-3 sm:p-6"
              style={{ backgroundImage: "url('/ModalBg.png')" }}
            >
              <div className="relative w-[120px] h-[120px] sm:w-[173px] sm:h-[91px]">
                <Image
                  src="/eco1.png"
                  alt="Modal Foreground"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-helvetica mt-3 sm:mt-4 text-center text-[20px] sm:text-[32px] md:text-[50px]">
                {t("modal.title").split("<br>").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className="sm:hidden" />
                  </span>
                ))}
              </h3>
            </div>

            {/* Bottom Section: Card with Form */}
            <div className="bg-[#FFFFFF1A] backdrop-blur-lg p-3 sm:p-6 md:p-8 flex-1 flex items-center justify-center">
              <div className="w-full max-w-[95%] sm:max-w-2xl space-y-5 sm:space-y-8 bg-[#0000004D] p-3 sm:p-5 md:p-8 rounded-2xl">
                {/* Heading */}
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white font-lato text-center">
                  {t("modal.subtitle")}
                </h4>

                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
                      {t("modal.fullName")}
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
                      {t("modal.email")}
                    </label>
                    <input
                      type="email"
                      placeholder=" "
                      className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-white">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
                      {t("modal.phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder=" "
                      className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs sm:text-sm font-lato font-bold text-[12px] sm:text-[14px]">
                      {t("modal.address")}
                    </label>
                    <input
                      type="text"
                      placeholder=" "
                      className="bg-transparent border-b border-[#FFFFFF4D] outline-none text-white placeholder-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Checkbox Options */}
                <div className="flex flex-wrap gap-2 sm:gap-4 text-white items-start">
                  {t("modal.checkboxOptions", { returnObjects: true }).map((item, index) => (
                    <label
                      key={item}
                      className="flex items-start gap-1 cursor-pointer min-w-[140px] sm:min-w-[180px]"
                    >
                      <CustomCheckbox
                        checked={checkboxState.includes(item)}
                        onChange={handleCheckboxChange(item)}
                      />
                      <span className="font-lato text-[10px] sm:text-[12px] md:text-[14px]">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Apply Now Button */}
                <button
                  onClick={handleApplyNow}
                  className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm md:text-[18px] font-lato"
                  style={{
                    backgroundColor: "#F8B03B",
                    color: "#000000",
                  }}
                >
                  {t("modal.applyButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========= HERO SECTION (with bg image) ========= */}
      <section className="relative min-h-screen flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroBg.png')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6 relative z-10">
          <div className="md:w-[60%] text-white space-y-10">
            <h1 className="text-3xl md:text-[45px] font-lato font-bold leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base font-lato md:text-xl max-w-3xl">
              {t("hero.subtitle")}
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] md:grid-cols-9 gap-3 w-full">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[3/2] max-w-[60px] md:w-[40px] md:h-[27px]"
                >
                  <Image
                    src={`/flags/flag${i}.png`}
                    alt={`Flag ${i}`}
                    fill
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                    className="object-cover rounded-sm"
                  />
                </div>
              ))}
            </div>
            <Button className={"font-sans"}>{t("hero.button")}</Button>
          </div>
          <div className="md:w-[40%] flex justify-center mt-10 md:mt-0">
            <div className="relative w-[267px] h-[347px] md:w-[534px] md:h-[694px] translate-y-6">
              <Image
                src="/HeroImage.png"
                alt="Solar illustration"
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========= SOLAR SUBSCRIPTION SECTION ========= */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
        <div className="md:w-[48%] flex justify-center">
          <div className="relative w-[315px] h-[276px] md:w-[631px] md:h-[552px]">
            <Image
              src="/SolarSubscription.png"
              alt="Solar Subscription"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:w-[52%] text-white space-y-3 items-center">
          <div
            className="inline-block border px-6 py-2 rounded-md font-helvetica text-[14px] font-bold"
            style={{
              borderColor: "#F8B03B",
              backgroundColor: "#F8B03B4D",
              color: "#F8B03B",
            }}
          >
            {t("solarSubscription.label")}
          </div>
          <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
            {t("solarSubscription.title")}
          </h2>
          <p className="text-base md:text-lg font-helvetica">
            {t("solarSubscription.description")}
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
            {t("solarSubscription.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button>{t("solarSubscription.button")}</Button>
        </div>
      </section>

      {/* ========= BATTERY SUBSCRIPTION SECTION ========= */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
        <div className="md:w-[52%] text-white space-y-3">
          <div
            className="inline-block border px-6 py-2 rounded-md font-bold font-helvetica text-[14px]"
            style={{
              borderColor: "#F8B03B",
              backgroundColor: "#F8B03B4D",
              color: "#F8B03B",
            }}
          >
            {t("batterySubscription.label")}
          </div>
          <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
            {t("batterySubscription.title")}
          </h2>
          <p className="text-base md:text-lg font-helvetica">
            {t("batterySubscription.description")}
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
            {t("batterySubscription.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button>{t("batterySubscription.button")}</Button>
        </div>
        <div className="md:w-[48%] flex justify-center mt-10 md:mt-0">
          <div className="relative w-[315px] h-[276px] md:w-[631px] md:h-[552px]">
            <Image
              src="/BatterySubscription.png"
              alt="Battery Subscription"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========= ALL IN ONE APP SECTION ========= */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 py-20 px-6">
        <div className="md:w-[60%] flex justify-center">
          <div className="relative w-[320px] h-[280px] md:w-[720px] md:h-[480px]">
            <Image
              src="/AllInOneApp.png"
              alt="All in One App"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:w-[40%] text-white space-y-3">
          <div
            className="inline-block border px-6 py-2 rounded-md font-helvetica text-[14px]"
            style={{
              borderColor: "#F5DC7B",
              backgroundColor: "#F5DC7B1A",
              color: "#F5DC7B",
            }}
          >
            {t("allInOneApp.label")}
          </div>
          <h2 className="text-2xl md:text-[40px] font-bold font-helvetica">
            {t("allInOneApp.title")}
          </h2>
          <p className="text-base md:text-lg font-helvetica">
            {t("allInOneApp.description")}
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-helvetica">
            {t("allInOneApp.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button variant="white" className="mt-2">
            {t("allInOneApp.button")}
          </Button>
        </div>
      </section>

      {/* ========= ENERGY TRANSITION SECTION ========= */}
      <section className="w-full max-w-7xl mx-auto py-20 px-6">
        <div
          className="w-full rounded-4xl border px-8 py-12 text-center space-y-6"
          style={{
            backgroundColor: "#F5DC7B33",
            borderColor: "#F5DC7B",
          }}
        >
          <h2 className="text-2xl md:text-[70px] font-bold font-helvetica text-white">
            {t("energyTransition.title")}
          </h2>
          <p className="text-base md:text-[30px] font-helvetica text-white max-w-3xl mx-auto">
            {t("energyTransition.description")}
          </p>
          <Button variant="white">
            {t("energyTransition.button")}
          </Button>
        </div>
      </section>

      <MultiStepForm />
      <CaseStudySection />
    </div>
  );
}