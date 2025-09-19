'use client';
import { useState } from 'react';
import STEP1 from './CompanyForm';
import STEP2 from './BusinessSnapshotForm';
import STEP3 from './LoanPurposeForm';
import STEP4 from './ProjectMaturityForm';
import STEP5 from './ExitStrategyForm';
import STEP6 from './ProjectDetailsForm';
import STEP7 from './FundForm';
import STEP8 from './ReviewForm';
import STEP9 from './PayNow';
import STEP10 from './Thankyou';

import Modal from '../../ui/Modal';
import SunButton from '../../ui/SunButton';

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentStep((prev) => prev + 1);
    };


    return (
        <>
            <SunButton
                onClick={() => setIsFormModalOpen(true)}
                className="max-w-[167px] text-[15px] border-white text-base text-white "
            >
                LOAN APP
            </SunButton>
            <Modal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                width={"443px"} height="800px"
            >
                <div className='relative h-full w-full'>
                    <div
                        className={` absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 1 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP1 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 2 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP2 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 3 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP3 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 4 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP4 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 5 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP5 onNext={handleNext} />
                    </div>
                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 6 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP6 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 7 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP7 onNext={handleNext} />
                    </div>

                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 8 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP8 onNext={handleNext} />
                    </div>
                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 9 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP9 onNext={handleNext} />
                    </div>
                    <div
                        className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 10 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
                    >
                        <STEP10 onNext={handleNext} />
                    </div>
                </div>
            </Modal>

        </>
    );
}
