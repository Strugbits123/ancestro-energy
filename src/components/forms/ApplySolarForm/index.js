'use client';
import { useState } from 'react';
import STEP1 from './BasicInfoForm';
import STEP2 from './PropertyDetailForm';
import STEP3 from './BusinessInfoForm';
import STEP4 from './Step4Form';
import STEP5 from './ScheduleCallForm';

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
      {/* {currentStep === 1 && <STEP1 onNext={handleNext} />}
      {currentStep === 2 && <STEP2 onNext={handleNext} />}
      {currentStep === 3 && <STEP2 onNext={handleNext} />}
      {currentStep === 4 && <STEP2 onNext={handleNext} />}
      {currentStep === 5 && <STEP5 onNext={handleNext} />} */}
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center relative">
            <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
            <button
              onClick={() => closeModal()}
              className="px-6 py-3 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
