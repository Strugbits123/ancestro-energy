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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100 "
          onClick={() => setIsModalOpen(false) }
        >

      <div className='rounded-lg w-auto h-[528px] max-w-[528px] overflow-hidden flex items-center justify-center' style={{
        backgroundImage: `
                            url('/images/schedule-modal.png')
                            `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='flex flex-col items-center justify-center'>
          <img src={'/icons/party-popper.png'} />
          <div className='text-xl font-[700] font-lato text-white'>CONGRATULATIONS!</div>
          <div className='font-[400] font-lato text-xl text-white px-3 mt-1'>“You’ve taken the first
            step towards making your
            ancestors happy!”
          </div>
        </div>
      </div>
    </div >
      )
}
    </>
  );
}
