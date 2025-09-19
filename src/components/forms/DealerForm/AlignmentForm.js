import FileInputField from "../../ui/FileInputField";
import SunButton from "../../ui/SunButton";

const AlignmentForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 05: ALIGNMENT</h3>


        {/* Input Fields */}
        <div className="space-y-3 mb-2 mt-3">
            {[
                'why do you believe you’re a good fit for the ancestro energy dealer network?'
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

        <FileInputField label={'Upload your project portfolio'} placeholder="(pdf, jpeg/png gallery)" />

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

export default AlignmentForm;
