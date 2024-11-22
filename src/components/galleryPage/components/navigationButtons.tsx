"use client";

import React from 'react';
import Image from 'next/image';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const btnClass = "p-3 bg-white rounded-full focus:outline-none h-[42px] w-[42px] md:h-[48px] md:w-[48px] flex justify-center items-center  absolute transform z-10 -translate-y-1/2 top-1/2";
const imgClass = "w-[14px] h-[14px] md:w-[18px] md:h-[18px]";
const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        className={`${btnClass} left-4 md:left-[48.5px]`}
        onClick={onPrevious}
      >
        <Image src="/svgs/←.svg" width={24} height={24} alt="Left Icon" className={imgClass} />
      </button>
      <button
        className={`${btnClass} right-4 md:right-[48.5px]`}
        onClick={onNext}
      >
        <Image src="/svgs/→.svg" width={24} height={24} alt="Right Icon" className={imgClass} />
      </button>
    </>
  );
};

export default NavigationButtons;
