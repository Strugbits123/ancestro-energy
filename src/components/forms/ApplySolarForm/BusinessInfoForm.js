import FileInputField from "../../ui/FileInputField";
import SunButton from "../../ui/SunButton";

const BusinessInfoForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg py-10 px-7 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 03: BUSINESS INFO</h3>
        <h3 className="text-[11px] italic font-lato text-white ml-15">{"(ONLY IF APPLICABLE)"}</h3>

        <div className="flex flex-col justify-start my-5">
            <span className="uppercase text-white text-[15px] text-left tracking-[2px]">TYPE OF BUSINESS:</span>
            <input name="business" type="text" placeholder="Describe your business" className="mt-3 placeholder:italic placeholder:text-[11px] placeholder:text-white focus:outline-none" />
            <div className="border-b border-b-white/30 w-full px-8 py-1" />

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

export default BusinessInfoForm;
