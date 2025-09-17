import SunButton from "../../ui/SunButton";

const BusinessSnapshotForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 02: BUSINESS SNAPSHOT</h3>

        {/* How Long Section */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white tracking-[2px] text-[14px] text-left">How long have you been in business?</div>
            <div className="flex flex-wrap gap-5 items-center pt-5 pr-10">

                {
                    ['Less then 1 year', '1-3 years', '3-10 years', '10 years'].map((label, i) => (
                        <label key={i} className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>
        {/* Business Specialities Section */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white tracking-[2px] text-[14px] text-left">business specialties (Check all that apply)</div>
            <div className="flex flex-wrap gap-5 items-center pt-5 pr-10">

                {
                    ['System design', 'Permitting', 'installation', 'Procurement of equipment', 'Project financing', 'Maintenance/o&M'].map((label, i) => (
                        <label key={i} className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>
        {/* Current Offer Section */}
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white tracking-[2px] text-[14px] text-left">Do you currently offer: (Check all that apply)</div>
            <div className="flex flex-wrap gap-5 items-center pt-5 pr-10">

                {
                    ['Residential', 'commercial', 'industrial', 'off-grid'].map((label, i) => (
                        <label key={i} className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>


        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="submit"
            className="w-full py-5  px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default BusinessSnapshotForm;
