import SunButton from "../../ui/SunButton";

const CompanyForm = ({ onNext }) => (
    <form className="w-full py-8 max-w-[400px] mx-auto overflow-hidden relative rounded-[20px] bg-gradient-to-r from-white/5 via-white/10 to-white/20 border border-white/30 backdrop-blur-lg p-6 md:p-10 md:space-y-1">
        {/* Step Heading */}
        <h3 className="text-[16px] font-bold font-lato text-white text-center">{"THANK YOU!"}</h3>

        <h4 className="text-[12px] text-white/90 mb-3 mt-3">Thank you for your application. Your payment has been received. Please check your email for access to the Ancestro Capital Loan Portal to continue the next phase of review.</h4>
        
    </form>
);

export default CompanyForm;
