import FileInputField from "../../ui/FileInputField";
import SunButton from "../../ui/SunButton";

const PropertyDetailForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg py-10 px-7 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 02: PROPERTY DETAIL</h3>


        {/* Project Type */}
        <div className="flex flex-col justify-start mt-1 md:mt-6 text-left">
            <span className="uppercase text-white text-sm text-left tracking-[2px]">PROJECT TYPE:</span>
            <div className="flex flex-wrap gap-[7px] items-center pt-5 mb-1 md:mb-5">

                <label className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                    <input
                        type="radio"
                        name="option"
                        className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                    />
                    Residential
                </label>
                <label className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                    <input
                        type="radio"
                        name="option"
                        className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                    />
                    Commercial
                </label>
                <label className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                    <input
                        type="radio"
                        name="option"
                        className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                    />
                    Industrial
                </label>
                <label className="flex items-center gap-2 text-white uppercase tracking-[2px]">
                    <input
                        type="radio"
                        name="option"
                        className="appearance-none h-5 w-5 border border-white rounded-sm bg-transparent checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none"
                    />
                    off-grid/rural
                </label>

            </div>
        </div>
        <FileInputField label={'Average Monthly electric bill'} placeholder="Upload electrical bill (pdf or jpeg)" />

        <>
            <div className="uppercase font-lato text-white text-sm text-left tracking-[2px] mt-1 md:mt-5">Do you need to replace your roof within
                the next 2 years?</div>

            <div className="flex flex-wrap gap-4 items-center py-5 mt-2">
                {['YES', 'No', 'Not Sure'].map((label, i) => (
                    <label key={i} className="flex items-center gap-2 text-white  uppercase tracking-[2px]">
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
        <div className="border-b border-b-white/30 w-full px-8 " />

        <FileInputField label={'Upload roof photo (optional)'}  />
        <FileInputField label={'Upload electric panel photo (optional)'}  />

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

export default PropertyDetailForm;
