import FileInputField from "../../ui/FileInputField";
import SunButton from "../../ui/SunButton";
import TextInputField from "../../ui/TextInputField";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[18px] font-bold font-lato text-white">STEP 01: COMPANY & CONTACT INFO</h3>


        {/* Input Fields */}
        {/* <div className="space-y-5 mb-2 mt-8">
            {['COMPANY NAME', 'EMAIL', 'PRIMARY CONTACT NAME', 'EMAIL', 'PHONE NUMEBR', 'WEBSITE/LINKEDIN'].map((placeholder, i, arr) => (
                <input
                    key={i}
                    type={placeholder === 'EMAIL' ? 'email' : placeholder === 'PHONE NUMBER' ? 'tel' : 'text'}
                    placeholder={placeholder}
                    className={`w-full px-1 py-3 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}
                />
            ))}
        </div> */}
        <div className="space-y-5 mb-2 mt-8">
            {['COMPANY NAME', 'EMAIL', 'PRIMARY CONTACT NAME', 'EMAIL', 'PHONE NUMEBR(Preferred whatsapp)', 'WEBSITE/LINKEDIN(if available)'].map((placeholder, i, arr) => (
                <TextInputField key={i} label={placeholder} arr={arr} i={i} />
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
