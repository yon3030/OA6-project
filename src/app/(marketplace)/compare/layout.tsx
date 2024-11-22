"use client"
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import CustomizedSelects from "@/components/common/selectBox";
import TabBar from "@/components/common/tabBar";

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    { value: 'units', label: 'units' },
    { value: 'developers', label: 'developers' },
    { value: 'projects', label: 'projects' },
];

const tabs: string[] = ["all", "overview", "statistics", "features", "area"];

const Comparelayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { isMobile } = useThemeContext();
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    useEffect(() => {
        const parsedURL = pathname.split("/")
        if (parsedURL[2]) {
            const option = options.find(o => o.value === parsedURL[2]);
            setSelectedOption(option ? option : null); // Default to the first option if not found
        } else {
            // setSelectedOption(options[0]); // Default option if none provided
        }

        if (parsedURL[3]) {
            setActiveTab(tabs.includes(parsedURL[3]) ? parsedURL[3] : ""); // Default to "All" if not found
        } else {
            // setActiveTab("All"); // Default tab if none provided
        }
    }, [pathname]);

    useEffect(() => {
        if (selectedOption && activeTab) {
            router.push(`/compare/${selectedOption.value}/${activeTab}`);
        }
    }, [selectedOption, activeTab]);

    const onTabClick = (val: string) => setActiveTab(val);
    const handleOptionClick = (option: Option) => setSelectedOption(option);

    const renderPCUI = () =>
        <div className="flex flex-col flex-grow space-x-5">
            <div className="gradient-border relative gradient-default-border gradient-border-rounded-30px bg-primary-default rounded-[30px] px-8 py-10 flex-grow">
                <h1 className="text-white text-[40px] mb-6">
                    <div className="mb-6">
                        Compose &nbsp;&nbsp;
                        <CustomizedSelects
                            options={options}
                            value={selectedOption ?? options[0]} // Use default option if null
                            handleOptionClick={handleOptionClick}
                            type="lg-green"
                        />
                    </div>
                    <TabBar
                        activeTab={activeTab ?? "All"} // Use default tab if null
                        tabColor={"[#414141]"}
                        onTabClick={onTabClick}
                        tabs={tabs}
                        className='w-[600px] h-[42px]'
                    />
                </h1>
                {children}
            </div>
        </div>

    const renderMobileUI = () =>
        <>
            <div>
                <div className="mt-3 mb-4 flex flex-row justify-center space-x-4">
                    <div className="text-white text-[28px]">Compose</div>
                    <div className="flex-grow w-full ">
                        <CustomizedSelects
                            options={options}
                            value={selectedOption ?? options[0]} // Use default option if null
                            handleOptionClick={handleOptionClick}
                            type="-green"
                            className="z-20"
                        />
                    </div>
                </div>
                <TabBar
                    activeTab={activeTab ?? "All"} // Use default tab if null
                    tabColor={"[#414141]"}
                    onTabClick={onTabClick}
                    tabs={tabs}
                    className='h-[38px]'
                />
            </div>
            <div className="relative mt-4 overflow-auto h-mobile-compare-height ">
                {children}
            </div>
        </>

    return isMobile ? renderMobileUI() : renderPCUI()
}

export default Comparelayout