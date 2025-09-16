import ClockIcon from '@/public/icons/clock';
import MultiStepForm from '@/src/components/forms/ApplySolarForm';
import SunButton from '@/src/components/ui/SunButton';

export default function Apply() {
    return (<>
        <section className="relative flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)),
                            url('/assets/dealer-apply.gif')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/*Hero section - Main content*/}
            <div className="container-2xl mx-auto w-full text-center relative z-10 p-20">
                <div className="flex items-stretch mt-15 py-5 md:px-15 md:py-10 items-start w-full md:max-w-[50%]">
                    <div className=" flex flex-col items-start gap-4 w-full">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-xl mx-auto">
                            ONE DECISION
                            ETERNAL IMPACT.
                        </h1>
                        <h3 className="text-white/70 text-md font-bold text-center uppercase tracking-[2px]">Apply to join LATAM’s largest dealer network.</h3>

                    </div>

                </div>
                <div className='flex flex-col md:flex-row  md:max-w-[50%] md:px-15 gap-8 items-start'> {/**/}
                    {/*DONATE*/}
                    <div className='flex flex-col gap-4 '>
                        <div className=' h-[224px] w-[341px] flex flex-col justify-around rounded-[25px] py-5 px-6 bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg'>
                            {
                                ['BRONZE', "SILVER", 'GOLD', 'PLATINUM'].map((el, i) => (
                                    <div key={i} className='flex justify-between'>
                                        <div className='text-white text-sm font-bold tracking-[2px]'>{el}</div>
                                        <div className='flex gap-2 flex-col'>
                                            <div className='flex gap-10'>
                                                {
                                                    Array(3).fill('/icons/tick-icon.png').map((image, ind) => (
                                                        <div key={ind} className='flex flex-col'>
                                                            <img src={image} />

                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="border-b border-b-white/30 w-full" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <SunButton
                            redirect={'/'}
                            className="max-w-[167px] text-[15px] border-white text-base text-white "
                        >
                            DEALER APP
                        </SunButton>
                    </div>
                    {/*LOAN*/}
                    <div className='flex flex-col gap-4'>
                        <div className='h-[224px]  w-[341px] rounded-[25px] p-4 bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg'>
                            <h6 className="p-2 uppercase text-left text-sm font-[700] text-white tracking-[2px]">
                                CONSTRUCTION LOAN
                            </h6>
                            <div className='flex flex-col items-start'>
                                {
                                    ['1.75% origination fee', '7-10% interest rate', '$700k min loan'].map((el, i) => (
                                        <div className='flex flex-col p-2 gap-4 w-full'>
                                            <div className="border-b border-b-white/30 w-full" />
                                            <div className="text-left uppercase text-sm font-[700] text-white tracking-[2px]">{el}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <SunButton
                            redirect={'/'}
                            className="max-w-[167px] text-[15px] border-white text-base text-white "
                        >
                            LOAN APP
                        </SunButton>
                    </div>
                </div>
            </div>

        </section>

    </>)
}