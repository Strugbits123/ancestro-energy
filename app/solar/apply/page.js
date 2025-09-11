import MultiStepForm from '@/src/components/forms/ApplySolarForm';

export default function Apply() {
    return (<>
        <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            url('/images/solar-apply-hero.png')
                            `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>

            {/*Hero section - Main content*/}
            <div className="container-2xl mx-auto px-[55px] text-center relative z-10 py-20">
                <div className="flex flex-col xl:flex-row gap-10 items-stretch p-5 md:p-20">
                    {/* Left Side: Heading */}
                    <div className="flex-3 flex flex-col items-start justify-center gap-4 w-full xl:w-[45%]">
                        <div className="px-4 py-3 bg-yellow-400 flex gap-2 rounded-lg">
                            <img src={'/icons/clock.png'} />
                            <div className="font-lato text-xl font-bold">IT WILL TAKE ONLY 5 MINUTES</div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl mx-auto">
                            FIND OUT IF YOUR PROPERTY QUALIFIES.
                        </h1>

                    </div>

                    {/* Right Side: Form*/}
                    <div className="flex-2">
                        <MultiStepForm />
                    </div>
                </div>
            </div>

        </section>

    </>)
}