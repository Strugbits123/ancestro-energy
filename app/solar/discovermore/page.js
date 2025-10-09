import CarouselComponent from "@/src/components/shared/Carousel";
import DownloadButton from "@/src/components/shared/DownloadButton";
import SunButton from "@/src/components/ui/SunButton";

export default function DiscoverMore() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/discover-more-bg.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto h-[416px] max-w-[1004px] text-center h-full flex items-start w-[88%] mt-60">
                    <div className="flex flex-col gap-4 w-full">
                        <div className=" w-full items-center mb-5">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-lato font-bold text-white leading-tight text-center tracking-wide uppercase w-full">
                                Learn How solar<br/> can help your<br/> wallet & your planet.
                            </h1>
                            <h3 className="mt-4 text-white/70 text-lg font-medium text-center">Watch the videos in the education library</h3>
                        </div>
                        <div className="flex flex-col md:flex-row gap-7 max-w-6xl items-center justify-center">
                            <SunButton
                                redirect={'/solar/casestudies'}
                                variant="secondary"
                                text="white"
                                className="font-normal uppercase text-[14px] py-4 bg-white/10 to-white/30 border border-white/30 backdrop-blur-lg text-base"
                                textClassName="tracking-[2px] font-normal"
                            >
                                Case Studies
                            </SunButton>
                            <SunButton text="[#FFCD28]"
                                redirect={'/solar/apply'}
                                className="text-[14px] py-4 !px-6 border-yellow-400 text-base text-yellow-400 bg-gradient-to-r from-yellow-100/20 via-white/20 to-white/10"
                                textClassName="tracking-[2px]"
                            >   
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-2xl mx-auto flex flex-col items-center px-[55px] -mt-[553px] z-10">

                <img src={'/images/discover-more-video.png'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full">
                    {
                        ['WHAT IS PPA', 'SOLAR VS UTILITY', 'HOW ANCESTRO WORK?', 'HOW ANCESTRO WORK?'].map((text, i) => (
                            <div key={i} className="flex flex-col max-w-[332px] space-y-4">
                                <div className="border-b-3 border-b-white/10 w-full px-8 py-2" />
                                <h1 className="text-white font-bold text-2xl tracking-[2px]">{text}</h1>
                                <p className="text-white text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        ))
                    }
                </div>
                <div className="border-b-8 border-b-white/10 w-full px-8 py-2 mt-8" />
            </div>
            <div className='w-full items-center justify-center mt-20'>
                <h3 className='text-center text-white font-[700] font-lato text-md'>TRUSTED BY DEALERS ACROSS LATAM</h3>
                <CarouselComponent variant="stats"/>
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-20 mb-30'>
                <div className='max-w-[540px] w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-4xl tracking-[2px]'>SAVE 100 TREES PER YEAR</h2>
                    <p className='my-5 self-center uppercase text-center text-white/80 font-[500] font-lato text-sm'>How to make subtle changes in your home/business that have a big environmental impact</p>
                </div>
                
                <DownloadButton />
            </div>
        </section >
    </>)
}
