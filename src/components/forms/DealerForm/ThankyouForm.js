import SunButton from "../../ui/SunButton";

const ThankyouForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[16px] font-bold font-lato text-white text-center">{"THANK YOU!"}</h3>
        <h3 className="text-[16px] font-bold font-lato text-white text-center">{"YOUR APPLICATION HAS BEEN RECIEVED."}</h3>

        <h4 className="text-[12px] text-white/90 mb-3 mt-3">Now choose how you'd like to proceed.</h4>
        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="submit"
            className="w-full py-5  px-10 text-sm font-lato mt-3 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            SUBMIT NOW
        </SunButton>
    </form>
);

export default ThankyouForm;
