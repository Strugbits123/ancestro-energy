'use client';
import { useState } from 'react';
import STEP1 from './BasicInfoForm';
import STEP2 from './PropertyDetailForm';
import STEP3 from './BusinessInfoForm';
import STEP4 from './Step4Form';
import STEP5 from './ScheduleCallForm';
import Modal from '../../ui/Modal';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 5) {
      setIsModalOpen(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative w-full overflow-hidden h-[800px]">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-out transform ${currentStep === 1 ? 'translate-x-0 opacity-100 z-20' : 'translate-x-full opacity-0 z-10'}`}
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
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="528px" height="528px"> 
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url('/images/schedule-modal.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-6 right-2 p-2 rounded-full hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center justify-center text-center">
            <img src="/icons/party-popper.png" alt="Party Popper" />
            <div className="text-xl font-bold font-lato text-white mt-3">
              CONGRATULATIONS!
            </div>
            <div className="font-[400] font-lato text-2xl text-white px-3 mt-2">
              “You’ve taken the first step towards making your ancestors happy!”
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
