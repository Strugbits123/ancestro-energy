'use client';
import { useState } from 'react';
import STEP1 from './ContactInfoForm';
import STEP2 from './BusinessSnapshotForm';
import STEP3 from './NumbersAndMarketForm';
import STEP4 from './OwnershipAndServiceForm';
import STEP5 from './AlignmentForm';
import STEP6 from './DealerTierForm';
import STEP7 from './ThankyouForm';
import STEP8 from './ScheduleForm';

import Modal from '../../ui/Modal';
import SunButton from '../../ui/SunButton';

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        if (currentStep === 8) {
            setIsModalOpen(true);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };


    return (
        <>
            <SunButton
                onClick={() => setIsFormModalOpen(true)}
                className="max-w-[167px] text-[15px] border-white text-base text-white "
            >
                DEALER APP
            </SunButton>
            <Modal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                width={currentStep === 8? "748px" : "443px"} height="800px"
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
                </div>
            </Modal>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="528px" height="528px">
                <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url('/images/schedule-modal.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={'/icons/party-popper.png'} alt="Party Popper" />
                        <div className="text-xl font-[700] font-lato text-white mt-3">
                            CONGRATULATIONS!
                        </div>
                        <div className="font-[400] font-lato text-xl text-white px-3 mt-2">
                            “You’ve taken the first step towards making your ancestors happy!”
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
