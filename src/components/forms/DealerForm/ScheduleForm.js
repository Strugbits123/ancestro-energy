import FormCalendar from "../../calendar/FormCalendar";
import SunButton from "../../ui/SunButton";

const ScheduleForm = ({ onNext }) => (
    <div className="overflow-y-auto flex flex-col md:flex-row w-full rounded-[14px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg">
        <form className="py-8 px-6">
            <h6 className="text-[12px] font-lato text-white">OPTION 01:</h6>
            <h3 className="text-[25px] font-bold font-lato text-white mb-4">PAY NOW</h3>
            <div className="flex flex-col gap-3 items-center mb-4">
                <button className="w-[193px] py-2 px-4 text-white border border-white/30 text-[15px] font-bold rounded-full">PSE COLOMBIA</button>
                <button className="w-[193px] py-2 px-4 text-white border border-white/30 text-[15px] font-bold rounded-full">STRIPE</button>
            </div>
            <p className="text-[15px] text-white">“Secure your dealer spot and get early access to training and tools”</p>
        </form>
        <div className="hidden md:block border-r border-white/10 mx-1 my-12" />

        <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative  p-10 space-y-[5px]">
            {/* Step Heading */}

            <h6 className="text-[12px] font-lato text-white">OPTION 02:</h6>
            <h3 className="text-[25px] font-bold font-lato text-white">SPEAK WITH A REP</h3>

            {/*DATE PICKER CALENDAR*/}
            <FormCalendar />

            {/* NEXT Button */}
            <SunButton
                onClick={onNext}
                type="submit"
                className="w-full py-3 px-10 text-sm font-lato mt-2 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
            >
                SCHEDULE
            </SunButton>
            <p className='py-1 text-[13px] font-lato text-white/90'>“Schedule your intro call with a Dealer Manager to explore your fit.”</p>
        </form>
    </div>
);

export default ScheduleForm;
