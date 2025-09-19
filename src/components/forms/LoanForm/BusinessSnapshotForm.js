import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[18px] font-bold font-lato text-white">STEP 02: BUSINESS SNAPSHOT</h3>

        <>
            <div className="uppercase font-lato text-white/90 text-[14px] text-left tracking-[2px] mt-5">TIME IN BUSINESS</div>

            <div className="flex flex-wrap gap-2 items-center py-3 mt-2">
                {['LESS THAN 1 YEAR', '1-3 YEARS', '3-10 YEARS', '10+ YEARS'].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 text-[12px] text-white  uppercase tracking-[2px]">
                        <input
                            type="radio"
                            name="option"
                            className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                        />
                        {label}
                    </label>
                ))}
            </div>
        </>
        <div className="border-b border-b-white/30 w-full px-8 py-1" />

        <div className="space-y-3 mb-2 mt-3">
            {[
                'Total number of projects constructed:'
            ].map((label, i, arr) => (
                <div key={i} className="flex flex-col justify-start gap-[1px]">
                    <label className="text-white/90 text-left text-[14px] uppercase">{label} </label>
                    <input
                        key={i}
                        className={`w-full px-1 py-2 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}
                    />
                </div>
            ))}
        </div>

        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="button"
            className="w-full py-5  px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default CompanyForm;
