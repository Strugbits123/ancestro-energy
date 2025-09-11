const CaseStudy = ({ content }) => {
    return (<>
        <div
            className="group flex flex-col items-center justify-around shadow-lg h-[600px] max-w-[400px] rounded p-4 text-sm w-fit bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-[20px] hover:mt-[-30px]  transition-all duration-500 delay-200"
        >
            <div className="overflow-hidden w-full h-[45%] rounded">

                <img className="h-full w-full transition-transform duration-1500 group-hover:scale-125" src={'/images/solar-panel-case-study.png'} />
            </div>
            <div className="mt-2 flex w-full justify-start items-center gap-2">
                <h1 className="text-white text-2xl font-bold">{`${content.alt.toUpperCase()}`} </h1>
                <p className="text-white text-[10px] mt-2">{`${content.study.category}`} </p>
            </div>
            <div className="flex flex-wrap justify-start gap-[5px]">
                {content.study.investmentData.map((data, i) => (
                    <div key={i} className="text-[8px] text-white p-2 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-full">
                        {data.toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="px-1 pb-2 pt-1 mt-2 text-white text-[12px] text-start">
                {content.study.description}
            </div>
            <div className="flex justify-between w-full mb-3">
                <div className="text-white text-md leading-loose">VIDEO TESTIMONIAL<strong className="ml-2 text-xl">→</strong></div>
                <img className='w-8 h-8' src={'/images/customer-card.png'} />
            </div>
        </div>

    </>)
}

export default CaseStudy;
