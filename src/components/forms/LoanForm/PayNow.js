import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">PAY NOW</h3>


        <div className="flex  w-full gap-3 items-center mb-1 mt-6">
            <button className=" w-full py-2 px-4 text-white border border-white/30 text-[15px] font-bold rounded-full">PSE COLOMBIA</button>
            <button className=" w-full py-2 px-4 text-white border border-white/30 text-[15px] font-bold rounded-full">STRIPE</button>
        </div>

        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="button"
            className="w-full py-5  px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            SUBMIT & PAY
        </SunButton>
    </form>
);

export default CompanyForm;
