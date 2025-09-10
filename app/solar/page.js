import SunButton from "@/src/components/SunButton";

export default function Solar() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url('/images/solar-hero-section.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    }}
                />
            </div>

            <div className="container-2xl mx-auto px-[55px] text-center relative z-10 py-20">
                <div className="flex flex-col xl:flex-row gap-10 items-stretch p-20">
                    {/* Left Side: Heading + Flags */}
                    <div className="flex-3 flex flex-col items-start justify-center gap-4 w-[45%]">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            Join LATAM’s Fastest-Growing Solar Subscription Network.
                        </h1>
                        <span className="text-2xl text-left text-white font-lato">$0 upfront. Day-one savings. Long-term stability. Available now in 14 countries.</span>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {[
                                "chile",
                                "colombia",
                                "costa-rica",
                                "dominican",
                                "ecuador",
                                "guatemala",
                                "honduras",
                                "mexico",
                                "nicaragua",
                                "panama",
                                "paraguay",
                                "peru",
                                "salvador",
                                "uruguay",
                            ].map((country, i) => (
                                <img
                                    key={i}
                                    src={`/images/${country}.png`}
                                    alt={`${country} flag`}
                                    className="w-28 h-16 rounded-sm object-cover shadow"
                                />
                            ))}
                        </div>

                        <div className="flex justify-start w-full xl:w-[35%]"><SunButton className="border-yellow-300 text-yellow-200">Apply Now — Join the Solar Tribe</SunButton></div>

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
