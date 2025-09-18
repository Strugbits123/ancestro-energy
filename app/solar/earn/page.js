import SunButton from "@/src/components/ui/SunButton";

export default function Earn() {
    return (<>
        <section className="flex flex-col items-center justify-center bg-black">
            {/* Background Image Section */}
            <div
                className="w-full h-full min-h-[1200px] bg-center bg-cover "
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,1)),
                        url('/images/earn-hero.png')
                        `,
                }}
            >
                <div className="container-2xl mx-auto px-[55px] text-center h-full flex flex-col mt-60 w-[88%]">
                    <div className="flex flex-col gap-4 w-full items-center justify-start mt-10">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                            ways to earn with ancestro
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-50 items-center justify-center my-20">
                        {
                            [{
                                img: '/icons/host-ev-charger.png',
                                title: 'HOST AN EV CHARGER'
                            }, {
                                img: '/icons/green-cash.png',
                                title: 'GREEN CASH A.S.'

                            }].map((el, i) => (
                                <div key={i} className="flex flex-col gap-10 items-center">
                                    <div className="h-40 w-40 flex justify-around items-center rounded-[30px] bg-gradient-to-r from-white/20 via-white/10 to-white/5 border border-white/30 backdrop-blur-lg">
                                        <img className="h-20 w-20" src={el.img} />
                                    </div>
                                    <div className="font-bold text-2xl text-white max-w-[160px]">{el.title}</div>
                                    <div className="flex flex-col md:flex-row gap-2 max-w-6xl ">
                                        <SunButton
                                            text="yellow-400"
                                            redirect={'/dealer/apply'}
                                            className="text-base py-4 border-yellow-300 text-base text-yellow-200 bg-gradient-to-b from-yellow-100/20 via-yellow-300/20 to-yellow-500/20"
                                        >
                                            APPLY NOW — JOIN THE SOLAR TRIBE
                                        </SunButton>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Partner Logos */}
                <div className="flex justify-center items-center w-full my-10">
                    <h1 className="flex justify-center text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato font-bold text-white leading-tight text-start tracking-wide uppercase max-w-6xl">
                        Our Companies
                    </h1>
                </div>
                <div className="mx-20 flex flex-wrap justify-center items-center gap-4 md:gap-8 p-6 bg-gradient-to-r from-white/36 to-gray-500/0 border border-white/30 backdrop-blur-sm rounded-lg mb-6">
                    {[
                        "Ancestro-Capital",
                        "Ancestro-Charge",
                        "Ancestro-Foundation",
                        "Ancestro-Sustainability",
                        "AncestroProject",
                    ].map((country, i) => (
                        <img
                            key={i}
                            src={`/images/${country}.png`}
                            alt={`${country} flag`}
                            className="w-70 h-15 rounded-sm  shadow"
                        />
                    ))}
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    ['/images/save-trees-1.png', '/images/save-trees-2.png', '/images/save-trees-3.png', '/images/save-trees-4.png'].map((image, i) => (
                        <img key={i} src={image} className='h-[493px] w-auto' />
                    ))
                }
            </div>

        </section>
    </>)
}