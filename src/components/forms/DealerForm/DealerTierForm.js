import SunButton from "../../ui/SunButton";

const ContactInfoForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 06: SELECT YOUR DEALER TIER</h3>


        {/* Input Fields */}
        <>
            <div className="uppercase font-lato text-white/90 text-[12px] text-left tracking-[2px] mt-5">which plan are you most interested in joining?</div>

            <div className="flex flex-wrap gap-2 items-center pt-3 pb-0 mt-2">
                {['bronze', 'silver', 'gold', 'platinum'].map((label, i) => (
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

export default ContactInfoForm;
