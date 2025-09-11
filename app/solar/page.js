import FlagHoverModal from "@/src/components/FlagModal";
import SunButton from "@/src/components/SunButton";
import { caseStudy } from "@/src/constants/data";


export default function Solar() {


    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                            url('/images/solar-hero-section.png')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                        <div className="flex flex-wrap justify-center items-center gap-5 mb-4">
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
                        <div className="flex justify-start mt-4 w-full xl:w-[35%]"><SunButton className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">Apply Now — Join the Solar Tribe</SunButton></div>
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
