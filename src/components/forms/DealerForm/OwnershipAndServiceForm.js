import SunButton from "../../ui/SunButton";

const OwnershipAndServiceForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[16px] font-bold font-lato text-white uppercase">STEP 04: ownership & service, goals</h3>


        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">Do you offer ongoing operations & maintenance (O&M)?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    ['Yes', 'No'].map((label, i) => (
                        <label key={i} className="text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>

        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">Do you directly own or operate solar projects?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    [ 'Yes', 'No'].map((label, i) => (
                        <label key={i} className="text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>

        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">Do you need to insure any of your project?</div>
            <div className="flex flex-wrap gap-4 items-center pt-3 pr-10">

                {
                    [ 'Yes', 'No'].map((label, i) => (
                        <label key={i} className="text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                            />
                            {label}
                        </label>
                    ))
                }

            </div>
        </div>
        <div className="flex flex-col justify-start mt-6">
            <div className="uppercase text-white/90 text-[14px] text-left">what are you looking to gain with ancestro energy? (check all that apply)</div>
            <div className="flex flex-wrap gap-4 items-center pt-5 pr-10">

                {
                    [ 'build more projects', 'sell ppa projects', 'Access construction loan','scale beyond your current loans','All of the above'].map((label, i) => (
                        <label key={i} className="text-left text-[12px] flex items-center gap-2 text-white uppercase tracking-[2px]">
                            <input
                                type="radio"
                                name="option"
                                className="appearance-none h-4 w-4 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
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

export default OwnershipAndServiceForm;
