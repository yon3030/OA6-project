import Image from "next/image";
import { SetStateAction, useEffect, useRef, useState } from "react";
import "./dropdown.css"

const Footer = () => {
    const [language, setLanguage] = useState("English");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        "English",
        "Mandarin Chinese",
        "Hindi",
        "Arabic",
        "Spanish",
        "French",
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        setIsOpen(false);
    };

    return (
        <footer className="mx-5 mt-3 text-white md:mx-8 md:my-10 md:mt-20">
            {/* Link Section */}
            <div className="border-b-[2px] border-gray-300 pb-2 md:mb-4 md:border-b-[0.5px] md:pb-6">
                <div className="w-full justify-between md:flex">
                    {/* Set width to 50% */}
                    <div className="flex w-full gap-[48px] justify-space md:w-1/2  mt-3 ">
                        <div className="flex md:flex-col flex-col-reverse">
                            <a href="#" className="mb-1 text-[11px] font-light md:text-[14px] md:font-light">
                                Developers
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Agencies
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Investors
                            </a>
                        </div>
                        <div className="md:flex flex-col pt-6 hidden">
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasix Lab
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasix Construction
                            </a>
                        </div>
                        <div className="md:flex flex-col pt-6 hidden ">
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Daria AI
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasixpedia
                            </a>
                        </div>
                        <div className="flex flex-col md:hidden">
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasix Lab
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasix Construction
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Daria AI
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                Oasixpedia
                            </a>
                        </div>
                        <div className="flex md:flex-col flex-col-reverse md:pt-6">
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                The Team
                            </a>
                            <a href="#" className="mb-1 text-[11px] md:text-[14px]">
                                FAQ
                            </a>
                        </div>
                    </div>


                    <div className="relative mt-4 items-center md:mt-0 hidden md:flex">
                        <label className="mr-2 text-[14px] ">Choose your language</label>
                        <div
                            ref={dropdownRef}
                            className={`relative w-[227px] cursor-pointer rounded-t-md ${isOpen?"":"rounded-b-md"} cursor-pointer bg-[#414141] px-3 py-2 text-white `}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="flex items-center justify-between ">
                                <p>{language}</p>
                                <span
                                    className={`ml-2 transition-transform ${
                                        isOpen ? "" : "rotate-180"
                                    }`}
                                >
                                    <Image height={12} width={12} alt="dropdown" src={"/svgs/dropdown_icon.svg"}/>
                                </span>
                            </div>
                            {isOpen && (
                                <div className="absolute left-0 top-full z-10 h-32 w-full dropdown-container overflow-y-auto rounded-b-md bg-[#414141] shadow-lg">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang}
                                            className={`px-3 py-2 text-[14px] hover:bg-[#646464] ${
                                                language === lang
                                                    ? "bg-[#646464]"
                                                    : ""
                                            }`}
                                            onClick={() => handleLanguageChange(lang)}
                                        >
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section with Logo */}
            <div className="mt-2 mb-2 flex sm:flex-col-reverse items-end md:mb-8 md:flex-row md:items-center justify-between">
                <p className="mt-2 font-montserrat text-[9.53px] md:mt-0 md:text-[14px]">
                    © 2024 — Copyright
                </p>
                <Image
                    src="/imgs/oasix_logo.png"
                    alt="oxsix"
                    width={192}
                    height={72}
                    className="h-[22.27px] w-[59.19px] md:h-[38px] md:w-[101px]"
                />
            </div>
        </footer>
    );
};

export default Footer;
