const ScheduleCallForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-10 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 05: SCHEDULE CALL</h3>

        {/* Property Type Checkboxes */}
        <div className="flex flex-wrap gap-4 items-center py-5 mt-2">
            {['Business', 'House', 'Solar Farm'].map((label, i) => (
                <label key={i} className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="checkbox"
                        className="rounded-[2px] h-5 w-5 accent-yellow-500 bg-transparent border border-white rounded-sm"
                    />
                    {label}
                </label>
            ))}
        </div>

        {/* Input Fields */}
        <div className="space-y-5 mb-2">
            {['FULL NAME', 'EMAIL', 'PHONE NUMBER', 'CITY', 'COUNTRY'].map((placeholder, i, arr) => (
                <input
                    key={i}
                    type={placeholder === 'EMAIL' ? 'email' : placeholder === 'PHONE NUMBER' ? 'tel' : 'text'}
                    placeholder={placeholder}
                    className={`w-full px-1 py-2 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}
                />
            ))}
        </div>


        {/* Property Owner Section */}
        <div className="flex flex-col justify-start mt-6">
            <span className="uppercase text-white text-[14px] text-left">Are you the property owner?</span>
            <div className="flex flex-wrap gap-5 items-center pt-5 pr-10">

                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="checkbox"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent`}
                    />
                    {'Owner'}
                </label>
                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="checkbox"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent"
                                                    }`}
                    />
                    {'Renter'}
                </label>
                <label className="flex items-center gap-2 text-[15px] text-white uppercase">
                    <input
                        type="checkbox"
                        className={`rounded-[2px] h-5 w-5 accent-yellow-500 border border-white rounded-sm  bg-transparent`}
                    />
                    {'Other'}
                </label>

            </div>
        </div>

        <div className="border-b border-b-white/30 w-full px-8 py-2" />
        {/* NEXT Button */}
        <button
            onClick={onNext}
            type="submit"
            className="w-full py-5 px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </button>
    </form>
);

export default ScheduleCallForm;

