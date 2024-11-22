import React, { useEffect } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const labelStyles = "block text-white text-[12px] md:text-[14px] leading-[14px] md:leading-[20px] mb-1 md:mb-[4.12px]";
const inputStyles = "w-full h-[38px] md:h-[44px] bg-secondary-light text-[12px] md:text-[14px] placeholder:text-[#646464] rounded-[8px] md:rounded-[9.36px] outline-none text-white px-[10px] md:px-[18.73px] placeholder-shown:opacity-100";

const BookMeetingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black glass-stroke-xl" onClick={onClose}>
      <div
        className={`relative w-full md:max-w-[540px] px-4 md:px-20 py-6 md:py-10 bg-primary-light rounded-[23.41px] gradient-border gradient-border-1px md:gradient-border-0.5px gradient-border-rounded-20px gradient-default-border transition-transform duration-500 ease-in-out transform shadow-div-default ${isOpen ? 'scale-95 opacity-100' : 'scale-0 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute text-black bg-white rounded-full top-4 right-4 md:top-6 md:right-6 w-[24px] h-[24px] md:w-[36px] md:h-[36px] hover:text-gray-700" onClick={onClose}>
          &#x2715;
        </button>
        <div className="flex flex-col items-center justify-center">
          <Image src='/imgs/oasix_logo.png' alt="oasix logo" width={101} height={38} className="w-[80px] h-[30.1px] md:w-[101px] md:h-[38px]" />
          <span className="font-sans text-[28px] md:text-[40px] text-white leading-[33.6px] md:leading-[70px] tracking-[1px]">Book a meeting</span>
        </div>
        <form className="grid grid-cols-2 gap-[15px] md:gap-[20px] mt-[32px] md:mt-[30px]">
          <div className="col-span-1">
            <label className={labelStyles}>Date</label>
            <input type="date" className={inputStyles} placeholder="MM.DD.YY" />
          </div>
          <div className="col-span-1">
            <label className={labelStyles}>Time</label>
            <input type="time" className={inputStyles} placeholder="HH.MM" />
          </div>
          <div className="col-span-2">
            <label className={labelStyles}>Your Email</label>
            <input type="email" className={inputStyles} placeholder="Enter your email" />
          </div>
          <div className="col-span-2">
            <label className={labelStyles}>Phone Number</label>
            <input type="tel" className={inputStyles} placeholder="Enter your phone number" />
          </div>
          <div className="col-span-2">
            <label className={labelStyles}>Your Name</label>
            <input type="text" className={inputStyles} placeholder="Enter your name" />
          </div>
          <div className="col-span-2 flex justify-center items-center bg-primary-default md:bg-primary-dark h-[56px] rounded-full cursor-pointer hover:bg-primary-hover">
            <span className="text-secondary-light text-[16px] font-semibold">Send an application</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookMeetingModal;
