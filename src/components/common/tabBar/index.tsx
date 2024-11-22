import { DefaultChildProps } from "@/components/childProps";

interface TabBarProps extends DefaultChildProps {
    tabs: string[],
    tabColor: string,
    activeTab: string;
    onTabClick: (type: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ className, tabs, tabColor, activeTab, onTabClick }) => {
    return (
        <div className={`${className} flex-grow  relative gradient-border gradient-default-border rounded-full bg-primary-dark shadow-search-box-btn flex flex-row justify-between items-center text-white`}>
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`rounded-full h-full items-center justify-center flex text-[12px] flex-grow text-center cursor-pointer z-10 ${activeTab === tab ? `bg-${tabColor}  text-[#20d795] gradient-border gradient-default-border relative bg-primary-default` : ""
                        }`}
                    onClick={() => onTabClick(tab)}
                >
                    <div className="first:capitalize">{tab}</div>
                </div>
            ))}
        </div>
    );
};

export default TabBar;
