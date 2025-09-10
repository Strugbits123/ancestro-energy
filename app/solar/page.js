import FlagHoverModal from "@/src/components/FlagModal";
import SunButton from "@/src/components/SunButton";

const caseStudy = [
    {
        country: 'COLOMBIA', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'MEXICO', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'CHILE', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'COSTA-RICA', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'COLOMBIA', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'MEXICO', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'DOMINICAN', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'ECUADOR', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'GUATEMALA', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'HONDURAS', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'NICARAGUA', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'PANAMA', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'PARAGUAY', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'PERU', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'SALVADOR', category: 'FACTORY/INDUSTRIAL PLANT', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
    {
        country: 'URUGUAY', category: 'WAREHOUSE/LOGISTICS CENTRE', investmentData: ['TIME TO COMPLETE PROJECT:150 DAYS', 'IMMEDIATE SAVINGS: 12% O&M COST', 'LONG TERM SAVINGS: $150,000+'], description: "Our factory's energy bills were suffocating us. With Ancestro, we started saving from day one—no upfront costs. In just two months, the system was running, and we now project hundreds of thousands in lifetime savings. It has given us financial stability, room to expand production, and the confidence to plan long-term.\n— Carlos M., Factory Owner, Colombia"
    },
]

export default function Solar() {


    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-black/50"
                    style={{
                        backgroundImage: `url('/images/solar-hero-section.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                // className="w-full h-full bg-black/50 bg-[url('/images/solar-hero-section.png')] bg-no-repeat bg-cover bg-center"

                />
            </div>

            <div className="container-2xl mx-auto px-[55px] text-center relative z-10 py-20">
                <div className="flex flex-col xl:flex-row gap-10 items-stretch p-20">
                    {/* Left Side: Heading + Flags */}
                    <div className="flex-3 flex flex-col items-start justify-center gap-4 w-full xl:w-[45%]">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            Join LATAM’s Fastest-Growing Solar Subscription Network.
                        </h1>
                        <span className="text-2xl text-left text-white font-lato">$0 upfront. Day-one savings. Long-term stability. Available now in 14 countries.</span>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {caseStudy.map((study, i) => (
                                <FlagHoverModal
                                    key={i}
                                    content={{
                                        src: `/images/${study.country.toLowerCase()}.png`,
                                        alt: `${study.country}`,
                                        study: study
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-start w-full xl:w-[35%]"><SunButton className="border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">Apply Now — Join the Solar Tribe</SunButton></div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-2">
                        <div className="w-[100%] overflow-hidden relative max-w-2xl rounded-[5%]">
                            <img
                                src="/images/solar-video.png"
                                alt="solar"
                                className="w-full object-cover object-center scale-[1.35]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
