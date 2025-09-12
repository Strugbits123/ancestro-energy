import CaseStudy from '@/src/components/CaseStudy';
import FlagHover from '@/src/components/FlagHover';
import MultiStepForm from '@/src/components/forms/ApplySolarForm';
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
        </section>

    </>)
}