"use client";
import { DefaultChildProps } from '@/components/childProps';
import { useState } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectBoxProps extends DefaultChildProps {
    options: Option[];
    value: Option;
    handleOptionClick: (option: Option) => void;
    type: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({ className, options, value, handleOptionClick, type
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const onOptionClick = (option: Option) => {
        handleOptionClick(option);
        setIsOpen(false);
    };

    return (
        <div className={`${className} relative inline-block ${type.includes("lg") ? "w-64" : "w-full "} text-[32px]`}>
            <div
                onClick={toggleDropdown}
                className={`flex items-center justify-between p-2 gradient-border gradient-default-border bg-primary-default gradient-border-rounded-${type.includes("lg") ? "16" : "8"}px rounded-[${type.includes("lg") ? "16" : "8"}px] cursor-pointer  ${type.includes("lg") ? "h-[64px]" : "h-[44px] "} px-4 text-[#20D795]`}
            >
                <span className={`${type.includes("lg") ? "" : "text-[14px] "} `} >{value.label}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div
                className={`absolute left-0 w-full mt-1 gradient-border gradient-default-border bg-primary-default gradient-border-rounded-16px rounded-[16px] shadow-md z-20 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} 
        glass-stroke`}
            >
                <ul className="relative py-1">
                    {options
                        .filter((option) => option.value !== value.value)
                        .map((option) => (
                            <li
                                key={option.value}
                                onClick={() => onOptionClick(option)}
                                className={`px-4 py-2 cursor-pointer hover:text-secondary-default  ${type.includes("lg") ? "" : "text-[14px] text-white"}`}
                            >
                                {option.label}
                            </li>
                        ))}
                </ul>
            </div>

        </div >

    );
};

export default SelectBox;
