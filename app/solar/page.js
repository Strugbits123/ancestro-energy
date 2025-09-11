import CaseStudy from "@/src/components/CaseStudy";
import FlagHover from "@/src/components/FlagHover";
import SunButton from "@/src/components/ui/SunButton";
import { caseStudy } from "@/src/constants/data";


export default function Solar() {


    return (<>

        {/*Hero Section*/}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
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

            {/*Hero section - Main content*/}
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
                                <FlagHover
                                    key={i}
                                    content={{
                                        src: `/images/${study.country.toLowerCase()}.png`,
                                        alt: `${study.country}`,
                                        study: study
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-start mt-4 w-full xl:w-[35%]"><SunButton className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton></div>
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

        {/*OUR CASE STUDY*/}
        <section className="flex flex-col bg-black  py-10 items-center">
            <h2 className="text-center font-bold text-[25px] font-lato leading-relaxed text-white p-5">OUR CASE STUDY</h2>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    caseStudy.map((study, i) => i < 3 && (
                        <CaseStudy
                            key={i}
                            content={{
                                alt: `${study.country}`,
                                study: study
                            }} />
                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton>SEE MORE CASE STUDIES.</SunButton>
                <SunButton className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>
            </div>
        </section>

        {/*LEARN MORE ABOUT ANCESTRO*/}
        <section className="flex flex-col bg-black  py-10 items-center">
            <h2 className="text-center font-bold text-[25px] font-lato leading-relaxed text-white p-5">LERAN MORE ABOUT ANCESTRO</h2>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    [
                        { img: '/images/learn-more-1.png', title: 'How $0 Down Works', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-2.png', title: 'Why Solar Is Inevitable in LATAM', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                        { img: '/images/learn-more-3.png', title: 'Why Customers Trust Ancestro', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                    ].map((card, i) => (
                        <div key={i} className="relative w-full h-[423px] overflow-hidden">
                            <img
                                className="w-auto h-full object-cover transition-transform duration-1000 hover:scale-125"
                                src={card.img}
                            />
                            <div className="gap-1 absolute bottom-0 p-5">
                                <h2 className="text-[22px] font-bold font-lato text-white">{card.title}</h2>
                                <span className="text-white font-lato text-[12px]">{card.desc}</span>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
                <SunButton>DISCOVER MORE.</SunButton>
                <SunButton className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20">APPLY NOW — JOIN THE SOLAR TRIBE</SunButton>
            </div>
        </section>
    </>);
}
