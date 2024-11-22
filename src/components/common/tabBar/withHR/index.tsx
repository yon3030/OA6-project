"use Client";


interface TabBarWithHRProps {
    tabs: { title: string; value: string }[],
}

const TabBarWithHR: React.FC<TabBarWithHRProps> = ({ tabs }) => {
    return (
        <div className="flex-grow h-[65px] relative gradient-border gradient-default-border gradient-border-rounded-20px rounded-[20px] bg-primary-default shadow-search-box-btn px-[1px] md:px-[4px] flex flex-row items-center text-white">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-center h-full items-center flex-grow flex-basis-0 w-[33.3%] ${index !== tabs.length - 1 ? 'border-r border-[#414141] border-solid' : ''}`}
                >
                    <div className="px-4 rounded-full text-[12px] z-10 text-[#414141]">
                        {tab.title}
                    </div>
                    <div className="px-4 rounded-full text-[14px] z-10 text-white">
                        {tab.value}
                    </div>
                </div>
            ))}
        </div>



    );
};

export default TabBarWithHR;
