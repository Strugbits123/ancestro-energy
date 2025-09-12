import FormCalendar from '../../calendar/FormCalendar';
import SunButton from '../../ui/SunButton';

const ScheduleCallForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-10 space-y-1">
        {/* Step Heading */}
        <h3 className="text-[20px] font-bold font-lato text-white">STEP 05: SCHEDULE CALL</h3>

        {/*DATE PICKER CALENDAR*/}
        <FormCalendar />


        <div className="border-b border-b-white/30 w-full px-8 py-2" />
        {/* NEXT Button */}
        <SunButton
            onClick={onNext}
            type="submit"
            className="w-full py-5 px-10 text-sm font-lato mt-6 text-white font-bold rounded-full overflow-hidden transition-all border border-white/30 backdrop-blur-lg"
        >
            SCHEDULE
        </SunButton>
    </form>
);

export default ScheduleCallForm;

