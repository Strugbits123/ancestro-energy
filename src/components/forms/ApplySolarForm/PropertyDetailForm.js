const PropertyDetailForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-10 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 02: PROPERTY DEAL</h3>



        {/* Project Type */}
        <div className="flex flex-col justify-start mt-6">
            <span className="uppercase text-white text-[14px] text-left">PROJECT TYPE:</span>
            <div className="flex flex-wrap gap-5 items-center pt-5 pr-10">

                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="radio"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent`}
                    />
                    {'Residential'}
                </label>
                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="radio"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent"
                                                    }`}
                    />
                    {'Commercial'}
                </label>
                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="radio"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent`}
                    />
                    {'Industrial'}
                </label>
                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="radio"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent`}
                    />
                    {'off-grid/rural'}
                </label>

            </div>
        </div>
        {/* replace roof  */}
        <>
            <span className="uppercase font-lato text-white text-[14px] text-left">Do you need to replace your roof within
                the next 2 years?</span>

            <div className="flex flex-wrap gap-4 items-center py-5 mt-2">
                {['YES', 'No', 'Not Sure'].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 text-[15px] text-white uppercase">
                        <input
                            type="radio"
                            className="rounded-[2px] h-5 w-5 accent-yellow-500 bg-transparent border border-white rounded-sm"
                        />
                        {label}
                    </label>
                ))}
            </div>
        </>
        <div className="border-b border-b-white/30 w-full px-8 py-2" />
        {/* SUBMIT Button */}
        <button
            onClick={onNext}
            type="submit"
            className="w-full py-5 px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </button>
    </form>
);

export default PropertyDetailForm;
