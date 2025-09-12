const CaseStudy = ({ content }) => {
    return (<>
        <div
            className="group flex flex-col items-center justify-around shadow-lg h-[652px] max-w-[481px] rounded p-4 text-sm w-fit bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-[20px] hover:mt-[-30px]  transition-all duration-500 delay-200"
        >
            <div className="overflow-hidden w-full h-[45%] rounded">

                <img className="h-full w-full transition-transform duration-1500 group-hover:scale-125" src={'/images/solar-panel-case-study.png'} />
            </div>
            <div className="mt-2 flex w-full justify-start items-center gap-3">
                <h1 className="font-lato text-white text-[25px] font-bold">{`${content.alt.toUpperCase()}`} </h1>
                <p className="font-lato text-white text-[13px] mt-1">{`${content.study.category}`} </p>
            </div>
            <div className="flex flex-wrap gap-[5px] justify-start w-full">
                {content.study.investmentData.map((data, i) => (
                    <div key={i} className="font-lato text-[12px] text-white p-2 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-full">
                        {data.toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="px-1 pb-2 pt-1 mt-2 font-lato text-white text-[14px] text-start">
                {content.study.description}
            </div>
            <div className="flex justify-between w-full mb-2">
                <div className="text-white text-md font-lato leading-loose">VIDEO TESTIMONIAL<strong className="ml-2 text-xl">→</strong></div>
                <img className='w-8 h-8' src={'/images/customer-card.png'} />
            </div>
        </div>

    </>)
}

export default CaseStudy;
