"use client";

import React from 'react';
import Image from 'next/image';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const btnClass = "p-3 bg-white rounded-full focus:outline-none h-[42px] w-[42px] md:h-[48px] md:w-[48px] flex justify-center items-center";
const svgClass = "w-[14px] h-[14px] md:w-[18px] md:h-[18px]";
const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrevious, onNext }) => {
  return (
    <div className="absolute transform -translate-y-1/2 top-1/2 px-4 md:px-[48.5px] w-full z-10 flex flex-row justify-between">
      <button
        className={`${btnClass}`}
        onClick={onPrevious}
      >
        <Image src="/svgs/←.svg" width={24} height={24} alt="Left Icon" className={svgClass} />
      </button>
      <button
        className={`${btnClass}`}
        onClick={onNext}
      >
        <Image src="/svgs/→.svg" width={24} height={24} alt="Right Icon" className={svgClass} />
      </button>
    </div>
  );
};

export default NavigationButtons;
