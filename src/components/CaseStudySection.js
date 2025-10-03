// "use client";
// import Image from "next/image";

// export default function CaseStudySection() {
//   const caseStudies = [
//     {
//       image: "/case1.png",
//       heading: "COLOMBIA",
//       description: "FACTORY / INDUSTRIAL PLANT.",
//       tag: "IMMEDIATE SAVINGS: 36%",
//       paragraph:
//         "“Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.”",
//       quote: "— Carlos M., Factory Owner, Colombia",
//     },
//     {
//       image: "/case2.png",
//       heading: "MEXICO",
//       description: "WAREHOUSE/ LOGISTICS CENTER",
//       tag: "IMMEDIATE SAVINGS: 28%",
//       paragraph:
//         "“Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.”",
//       quote: "— Carlos M., Factory Owner, Colombia",
//     },
//     {
//       image: "/case3.png",
//       heading: "DOMINICAN REPUBLIC",
//       description: "HOTEL / RESORT",
//       tag: "IMMEDIATE SAVINGS: 32%",
//       paragraph:
//         "“Running a resort means nonstop electricity use—air conditioning, kitchens, laundry, everything. Ancestro's system cut our bills by nearly a third without disrupting guests. Now we save money, and we proudly showcase our commitment to sustainability. Guests notice, and it adds to our reputation.”",
//       quote: "— Miguel P., Resort Manager, Dominican Republic",
//     },
//   ];
//   return (
//     <section className="relative w-full min-h-screen">
//       {/* Background split: 20% black + 80% image */}
//       <div className="absolute top-0 left-0 w-full h-[20%] bg-black z-0"></div>
//       <div
//         className="absolute top-[20%] left-0 w-full h-[80%] bg-cover bg-center z-0"
//         style={{ backgroundImage: "url('/case-bg.png')" }}
//       ></div>

//       {/* Overlay content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-white space-y-16">
//         {/* Section Heading */}
//         <h2 className="text-3xl md:text-[25px] font-bold font-lato text-center">
//           OUR CASE STUDY
//         </h2>

//         {/* Cards Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
//           {caseStudies.map((card, index) => (
//             <div
//               key={index}
//               className="bg-[#FFFFFF1A] backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start space-y-2 border border-[#FFFFFF4D] transition-transform duration-300 hover:-translate-y-10"
//             >
//               {/* Card Image */}
//               <div className="relative w-[421px] h-[281px] max-w-full mx-auto">
//                 <Image
//                   src={card.image}
//                   alt={card.heading}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>

//               {/* Heading */}
//               <h3 className="text-xl font-bold font-lato text-[25px]">{card.heading}</h3>

//               {/* Description */}
//               <p className="text-sm text-white/80 font-lato italic">{card.description}</p>

//               {/* Highlighted Tag */}
//               <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-lato font-bold text-[12px]">
//                 {card.tag}
//               </span>

//               {/* Paragraph */}
//               <p className="text-sm text-white/80 font-lato text-[14px]">{card.paragraph}</p>

//               {/* Quote */}
//               <p className=" text-sm font-lato text-[14px]">{card.quote}</p>
//             </div>
//           ))}
//         </div>

//         {/* Powered by Ancestro */}
//         <div className="w-full text-center space-y-16 mt-20">
//           <h3 className="text-2xl md:text-[28px] font-bold font-lato">
//             POWERED BY ANCESTRO ECOSYSTEM
//           </h3>

//           {/* Ecosystem Images Row */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center w-full">
//             {[1, 2, 3, 4, 5].map((eco) => (
//               <div key={eco} className="flex flex-col items-center space-y-2 w-full">
//                 <div className="relative w-[120px] h-[65px] xs:w-[140px] xs:h-[75px] sm:w-[160px] sm:h-[85px] md:w-[173px] md:h-[91px]">
//                   <Image
//                     src={`/eco${eco}.png`}
//                     alt={`Ecosystem ${eco}`}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Logo + Address */}
//           <div className="flex flex-col items-center space-y-8 mt-12">
//             <div className="relative w-[337px] h-[119px] ">
//               <Image
//                 src="/Logo.png"
//                 alt="Ancestro Logo"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             {/* Address + Divider + Contact */}
//             <div className="flex flex-wrap justify-center items-center gap-4 text-center mt-6">
//               <p className="text-sm md:text-base text-white/80 font-lato font-bold">
//                 ADDRESS: PISO 19, 2G5F+72C, Av PASEO DEL MAR, PANAMÁ, PANAMÁ
//               </p>

//               {/* Divider */}
//               <div className="w-[50px] h-[1px] bg-white/60"></div>

//               <span className="text-sm md:text-base text-white/80 font-lato font-bold">
//                 CONTACT US: +57 300 1726236
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CaseStudySection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen">
      {/* Background split: 20% black + 80% image */}
      <div className="absolute top-0 left-0 w-full h-[20%] bg-black z-0"></div>
      <div
        className="absolute top-[20%] left-0 w-full h-[80%] bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/case-bg.png')" }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-white space-y-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-[25px] font-bold font-lato text-center">
          {t("caseStudySection.title")}
        </h2>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {t("caseStudySection.caseStudies", { returnObjects: true }).map((card, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start space-y-2 border border-[#FFFFFF4D] transition-transform duration-300 hover:-translate-y-10"
            >
              {/* Card Image */}
              <div className="relative w-[421px] h-[281px] max-w-full mx-auto">
                <Image
                  src={`/case${index + 1}.png`}
                  alt={card.heading}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold font-lato text-[25px]">{card.heading}</h3>

              {/* Description */}
              <p className="text-sm text-white/80 font-lato italic">{card.description}</p>

              {/* Highlighted Tag */}
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-lato font-bold text-[12px]">
                {card.tag}
              </span>

              {/* Paragraph */}
              <p className="text-sm text-white/80 font-lato text-[14px]">{card.paragraph}</p>

              {/* Quote */}
              <p className="text-sm font-lato text-[14px]">{card.quote}</p>
            </div>
          ))}
        </div>

        {/* Powered by Ancestro */}
        <div className="w-full text-center space-y-16 mt-20">
          <h3 className="text-2xl md:text-[28px] font-bold font-lato">
            {t("caseStudySection.poweredBy")}
          </h3>

          {/* Ecosystem Images Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center w-full">
            {[1, 2, 3, 4, 5].map((eco) => (
              <div key={eco} className="flex flex-col items-center space-y-2 w-full">
                <div className="relative w-[120px] h-[65px] xs:w-[140px] xs:h-[75px] sm:w-[160px] sm:h-[85px] md:w-[173px] md:h-[91px]">
                  <Image
                    src={`/eco${eco}.png`}
                    alt={`Ecosystem ${eco}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Logo + Address */}
          <div className="flex flex-col items-center space-y-8 mt-12">
            <div className="relative w-[337px] h-[119px]">
              <Image
                src="/Logo.png"
                alt="Ancestro Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* Address + Divider + Contact */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-center mt-6">
              <p className="text-sm md:text-base text-white/80 font-lato font-bold">
                {t("caseStudySection.address")}
              </p>

              {/* Divider */}
              <div className="w-[50px] h-[1px] bg-white/60"></div>

              <span className="text-sm md:text-base text-white/80 font-lato font-bold">
                {t("caseStudySection.contact")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}