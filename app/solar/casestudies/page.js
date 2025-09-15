import CarouselComponent from '@/src/components/Carousel';
import CaseStudy from '@/src/components/CaseStudy';
import SunButton from '@/src/components/ui/SunButton';
import { caseStudy } from '@/src/constants/data';

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
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            REAL PEOPLE, REAL RESULTS
                        </h1>

                        <div className="flex flex-col md:flex-row gap-2 max-w-6xl">
                            <SunButton
                                redirect={'/solar/apply'}
                                className="text-[15px] border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                            >
                                APPLY NOW — JOIN THE SOLAR TRIBE
                            </SunButton>

                            <SunButton
                                redirect={'/solar/apply'}
                                text="black"
                                variant="secondary"
                                font="bold"
                                className="uppercase text-[15px] bg-white text-base"
                            >
                                25 YeaRS of warranty + Guarantees Insurance from ancestro protect.
                            </SunButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Grid */}
            <div className="container-2xl mx-auto px-[55px] -mt-[853px] z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
                    {caseStudy.map((study, i) => (
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

            <div className='w-full items-center justify-center mt-20'>
                <h3 className='text-center text-white font-[700] font-lato text-md'>TRUSTED BY MANY</h3>
                <CarouselComponent />
            </div>

            <div className='w-full flex flex-col items-center justify-center mt-20'>
                <div className='max-w-[540px] w-full'>
                    <h2 className='my-2 text-center text-white font-[700] font-lato text-4xl tracking-[2px]'>SAVE 100 TREES PER YEAR</h2>
                    <p className='my-5 self-center uppercase text-center text-white/80 font-[500] font-lato text-sm'>How to make subtle changes in your home/business that have a big environmental impact</p>
                </div>
                <SunButton className="mt-5 mb-10 px-4 py-3 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg">
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/icons/download-btn.png"
                            alt="Download"
                            className="w-5 h-5 object-contain"
                        />
                        <span className="text-lg font-medium text-white tracking-[2px]">
                            DOWNLOAD FREE REPORT
                        </span>
                    </div>
                </SunButton>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {
                        ['/images/save-trees-1.png', '/images/save-trees-2.png', '/images/save-trees-3.png', '/images/save-trees-4.png'].map((image, i) => (
                            <img key={i} src={image} className='h-[493px] w-auto' />
                        ))
                    }
                </div>
            </div>
        </section>

    </>)
}