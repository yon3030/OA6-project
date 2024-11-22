"use client"

import { useState, useEffect } from 'react';
import PCSearchBar from '@/components/searchPage/searchPanel/pc';
import SearchedCnt from '@/components/searchPage/SearchedCnt';
import SearchPanel from '@/components/searchPage/panels/pc';
import Header from '@/layout/header';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/button';
import CloseIcon from '@mui/icons-material/Close';
import "./search.css";
import "./mobile-search-btn.css"
import NavBar from '@/layout/navbar/mobile';
import MobileSearchPanel from '@/components/searchPage/panels/mobile';
import { addCommasToNumber } from '@/lib/numberMethod';
import Link from 'next/link';
import TabBar from '@/components/common/tabBar';
const SearchComponent: React.FC = () => {

    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [panelPosition, setPanelPosition] = useState<{ left: number } | null>(null);
    //for Mobile State
    const [mobileState, setMobileState] = useState<boolean>();
    const [activeType, setActiveType] = useState<string>("Units");
    //for Area Panel
    const [selectedArea, setSelectedArea] = useState<string | null>(null);
    //for Price Panel
    const [priceLimit, setPriceLimit] = useState<{ min: number, max: number }>({ min: 0, max: 2000000 })
    const [priceRange, setPriceRange] = useState<number[]>([150000, 1000000]);
    //for Type Panel
    const [selectedTypes, setTypes] = useState<string[]>([]);
    //for Room Panel
    const [roomBedCount, setRoomBedCount] = useState(1);
    const [roomBathCount, setRoomBathCount] = useState(1);
    //for Interest Panel
    const [activeInterests, setInterests] = useState<string[]>([]);
    const router = useRouter();
    useEffect(() => {
        const handleResize = () => setMobileState(window.innerWidth < 1170); // Set your breakpoint here

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRoomCountChange = (setter: React.Dispatch<React.SetStateAction<number>>, increment: boolean) => {
        setter(prevCount => increment ? prevCount + 1 : Math.max(prevCount - 1, 1));
    };

    const handleTagClick = (tag: string, event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedTag(tag);
        const buttonRect = (event.target as HTMLElement).getClientRects();
        setPanelPosition({ left: buttonRect[0].left });
    };

    ///////////for Price Panel
    const handlePriceRangeChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue))
            return;
        setPriceRange(newValue as number[]);
    };

    ///////////end Price Panel Actions
    const handleSelectionClick = (setter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => setter(value);

    const handleInterestClick = (interest: string) => setInterests(prevState =>
        prevState.includes(interest) ? prevState.filter(i => i !== interest) : [...prevState, interest]
    );

    const handleTypeClick = (description: string) => setTypes(prevState =>
        prevState.includes(description) ? prevState.filter(i => i !== description) : [...prevState, description]
    );

    const renderPCUI = () => {
        return (<div
            className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center py-10 slide-in-from-bottom"
            style={{ backgroundImage: "url('/imgs/search/search_back.png')" }}
        >
            <div
                className='h-screen w-screen absolute'
                onClick={() => setSelectedTag(null)}
            >
            </div>
            <div className="relative w-full flex flex-col items-center">
                <div className="absolute right-40 -top-24 mt-4 mr-4">
                    <Button
                        prefix={<CloseIcon />}
                        border={{
                            color: "transparent",
                            width: 0
                        }}
                        handleClick={() => router.back()}
                        className="h-[35px] w-[35px] bg-white items-center justify-center"
                    >
                    </Button>
                </div>
                <div className="mt-0 w-full flex justify-center">
                    <PCSearchBar
                        selectedTag={selectedTag}
                        handleTagClick={handleTagClick}
                        TagLabels={[
                            { name: "Where", label: selectedArea },
                            { name: "Price", label: `${addCommasToNumber(priceRange[0])}$ - ${addCommasToNumber(priceRange[1])}$` },
                            { name: "Type", label: selectedTypes.join(", ") },
                            { name: "Rooms", label: `Beds: ${roomBedCount}, Baths: ${roomBathCount}` },
                            { name: "Interests", label: activeInterests.length == 0 ? null : activeInterests.length == 1 ? activeInterests[0] : activeInterests[0] + `, ${activeInterests[1].at(0)}...` },
                        ]}
                    />
                </div>
            </div>
            <div className='h-[300px]' onClick={(e) => e.stopPropagation()}></div>

            <SearchPanel
                panelPosition={panelPosition}
                selectedTag={selectedTag}
                selectedArea={selectedArea} handleAreaClick={(description) => handleSelectionClick(setSelectedArea, description)}
                limit={priceLimit} priceRange={priceRange} handlePriceRangeChange={handlePriceRangeChange}
                selectedTypes={selectedTypes} handleTypeClick={handleTypeClick}
                bedCnt={roomBedCount} increaseBedCnt={() => handleRoomCountChange(setRoomBedCount, true)} decreaseBedCnt={() => handleRoomCountChange(setRoomBedCount, false)}
                bathCnt={roomBathCount} increaseBathCnt={() => handleRoomCountChange(setRoomBathCount, true)} decreaseBathCnt={() => handleRoomCountChange(setRoomBathCount, false)}
                activeInterests={activeInterests} handleInterestClick={(interest) => handleInterestClick(interest)}
            />
            <SearchedCnt count={102303} />
        </div >)
    }
    const getUnitsCnt = () => {
        let count = 102303;
        if (selectedArea)
            count = 24423;
        if (selectedTypes.length)
            count = 19233 + 19500 * selectedTypes.length;
        if (activeInterests.length)
            count = 8233 + activeInterests.length * 4021;
        return count;
    }

    const renderMobileUI = () => {
        return (<div className="relative h-screen overflow-hidden">
            <div className={`absolute top-[-30px] left-[-530px] w-[calc(100%+830px)] h-[calc(100%)] bg-mobile-back bg-cover bg-no-repeat filter blur-md`}></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <Header />
            <div className="relative h-mobile-search-height flex flex-col justify-center align-center space-y-4 mt-4">
                <div className=' flex flex-row items-center top-[6rem] space-x-2 w-full px-6'>
                    <TabBar
                        tabs={["Units", "Developers", "Projects"]}
                        tabColor={"landing"}
                        activeTab={activeType} onTabClick={(type: string) => setActiveType(type)}
                        className='h-[38px] md:w-[600px] md:h-[42px]'
                    />
                    <Button
                        prefix={<CloseIcon />}
                        border={{
                            color: "transparent",
                            width: 0
                        }}
                        handleClick={() => router.back()}
                        className="h-[35px] w-[35px] bg-white items-center justify-center"
                    >
                    </Button>
                </div>
                <MobileSearchPanel
                    panelPosition={panelPosition}
                    selectedTag={selectedTag}
                    selectedArea={selectedArea} handleAreaClick={(description) => handleSelectionClick(setSelectedArea, description)}
                    limit={priceLimit} priceRange={priceRange} handlePriceRangeChange={handlePriceRangeChange}
                    selectedTypes={selectedTypes} handleTypeClick={handleTypeClick}
                    bedCnt={roomBedCount} increaseBedCnt={() => handleRoomCountChange(setRoomBedCount, true)} decreaseBedCnt={() => handleRoomCountChange(setRoomBedCount, false)}
                    bathCnt={roomBathCount} increaseBathCnt={() => handleRoomCountChange(setRoomBathCount, true)} decreaseBathCnt={() => handleRoomCountChange(setRoomBathCount, false)}
                    activeInterests={activeInterests} handleInterestClick={(interest) => handleInterestClick(interest)}
                />
                <Link href={`${(selectedArea && selectedTypes.length && activeInterests.length) ? "/units/mobile/map" : ""}`}>
                    <div className={`gradient-border gradient-default-border mobile-search-btn bottom-[90px] rounded-full fixed h-[56px] mx-6 }`}
                        style={{ backgroundColor: `${(selectedArea && selectedTypes.length && activeInterests.length) ? "#20d795" : "rgba(0, 0, 0, 0.15)"}` }}
                    >
                        <div className='flex flex-row items-center justify-center py-4'>
                            <h1 className='text-[16px] font-extrabold  text-white'>
                                {addCommasToNumber(getUnitsCnt())} Units Search
                            </h1>
                        </div>
                    </div>
                </Link>
            </div>
            <NavBar />
        </div >)
    }
    return mobileState ? renderMobileUI() : renderPCUI()
};

export default SearchComponent;
