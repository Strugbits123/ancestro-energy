import SunButton from "../../ui/SunButton";

const Step4Form = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg py-10 px-8 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 04</h3>
        <h3 className="text-[15px] text-left font-lato text-white mt-5 tracking-[2px]">{"(CHECK ALL THAT APPLY)"}</h3>

        <div className="flex flex-wrap gap-4 items-center py-5 mt-2">
            {['Reduce my electricity bills', 'reduce blackout risk', 'Support sustainability', 'All of the above'].map((label, i) => (
                <label key={i} className="flex items-center gap-2 text-white  uppercase tracking-[2px]">
                    <input
                        type="checkbox"
                        name="option"
                        className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                    />
                    {label}
                </label>
            ))}
        </div>
        {/* SUBMIT Button */}
        <SunButton
            onClick={onNext}
            type="submit"
            className="w-full py-5 px-10 text-sm font-lato mt-2 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            NEXT
        </SunButton>
    </form>
);

export default Step4Form;
