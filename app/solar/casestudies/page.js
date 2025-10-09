import CarouselComponent from '@/src/components/shared/Carousel';
import CaseStudy from '@/src/components/shared/SolarCaseStudy';
import DownloadButton from '@/src/components/shared/DownloadButton';
import SunButton from '@/src/components/ui/SunButton';
import { SolarCaseStudy } from '@/src/constants/data';

export default function CaseStudies() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-[1364px] bg-center bg-cover"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                        url('/images/solar-panel-case-study.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            REAL PEOPLE, REAL RESULTS
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-2 max-w-6xl items-center">
                            <SunButton
                                redirect={'/solar/apply'}
                                text={'[#FFCD28]'}
                                className="max-w-[385px] w-full px-2 flex justify-around py-2 md:py-4 text-sm md:text-base lg:text-xl border-yellow-400 text-yellow-400 bg-gradient-to-r from-yellow-400/20 to-transparent"
                                textClassName="tracking-[1px] xl:tracking-[2px] text-[10px] whitespace-nowrap sm:text-xs md:text-sm xl:text-sm"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>

                            <button
                                className="rounded-full uppercase tracking-[2px] font-bold py-1 max-h-[90px] md:max-h-fit px-3 text-[9px] bg-white sm:text-[10px] md:text-xs lg:text-sm shadow py-[2px] lg:py-[6px]"
                            >
                                25 YeaRS of warranty + Guarantees Insurance from ancestro protect.
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Grid */}
            <div className="container-2xl mx-auto px-[5px] sm:px-[55px] -mt-[853px] z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
                    {SolarCaseStudy.map((study, i) => (
                        <CaseStudy
                            key={i}
                            content={{
                                alt: `${study.country}`,
                                study: study,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className='w-full items-center justify-center mt-30'>
                <h3 className='text-center text-white font-semibold font-lato text-xl'>TRUSTED BY MANY</h3>
                <CarouselComponent />
            </div>

            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='max-w-[540px] w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-4xl tracking-[2px]'>SAVE 100 TREES PER YEAR</h2>
                    <p className='my-5 self-center uppercase text-center text-white/80 font-[500] font-lato text-sm'>How to make subtle changes in your home/business that have a big environmental impact</p>
                </div>

                <DownloadButton />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-5'>
                    {
                        ['/images/save-trees-1.png', '/images/save-trees-2.png', '/images/save-trees-3.png', '/images/save-trees-4.png'].map((image, i) => (
                            <img key={i} src={image} className='h-[493px] w-auto rounded-xl' />
                        ))
                    }
                </div>
            </div>
        </section>

    </>)
}