"use Client"

import { useState, useRef } from 'react';
import Accordion from '@/components/common/accordian';

import WherePanel from "../Where/mobile";
import PricePanel from "../Price";
import TypePanel from "../Type";
import RoomsPanel from "../Rooms";
import InterestsPanel from "../Interests";

import { addCommasToNumber } from '@/lib/numberMethod';

interface SearchPanelProps {
    panelPosition: { left: number } | null;
    selectedTag: string | null;
    ///for Where Panel
    selectedArea: string | null;
    handleAreaClick: (description: string) => void;
    ///for Price Panel
    limit: { min: number, max: number };
    priceRange: number[];
    handlePriceRangeChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
    ///for Type Panel
    selectedTypes: string[];
    handleTypeClick: (description: string) => void;
    ///for Room Panel
    bedCnt: number;
    increaseBedCnt: () => void;
    decreaseBedCnt: () => void;
    bathCnt: number;
    increaseBathCnt: () => void;
    decreaseBathCnt: () => void;
    ///for Interests Panel
    activeInterests: string[];
    handleInterestClick: (interest: string) => void;
}

const MobileSearchPanel: React.FC<SearchPanelProps> = ({
    panelPosition, selectedTag,
    selectedArea, handleAreaClick,
    limit, priceRange, handlePriceRangeChange,
    selectedTypes, handleTypeClick,
    bedCnt, increaseBedCnt, decreaseBedCnt, bathCnt, increaseBathCnt, decreaseBathCnt,
    activeInterests, handleInterestClick,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const commonProps = {
        //for Where Panel
        selectedArea,
        handleAreaClick,
        //for Price Panel
        priceRange,
        handlePriceRangeChange,
        limit,
        //for Type Panel
        selectedTypes,
        handleTypeClick,
        //for Room Panel
        bedCnt,
        increaseBedCnt,
        decreaseBedCnt,
        bathCnt,
        increaseBathCnt,
        decreaseBathCnt,
        //for Interests Panel
        activeInterests,
        handleInterestClick,
    };

    const handleAccordionClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleTransitionEnd = (index: number) => {
        if (activeIndex === index && accordionRefs.current[index - 1]) {
            accordionRefs.current[index - 1]?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    const accordions = [
        { title: 'Where', content: <WherePanel {...commonProps} />, val: selectedArea },
        { title: 'Price', content: <PricePanel {...commonProps} />, val: `${addCommasToNumber(priceRange[0])}$ - ${addCommasToNumber(priceRange[1])}$` },
        { title: 'Type', content: <TypePanel {...commonProps} />, val: selectedTypes.join(", ") },
        { title: 'Rooms', content: <RoomsPanel {...commonProps} />, val: `Beds: ${bedCnt}, Baths: ${bathCnt}` },
        { title: 'Interests', content: <InterestsPanel {...commonProps} />, val: activeInterests.length == 0 ? null : activeInterests.length == 1 ? activeInterests[0] : activeInterests[0] + `, ${activeInterests[1].at(0)}...` },
    ];

    return (
        <div className="relative mx-7 overflow-auto h-mobile-search-height">
            <div className="flex flex-col space-y-2">
                {accordions.map((accordion, index) => (
                    <div
                        key={index}
                        ref={(el) => { accordionRefs.current[index] = el; }}
                    >
                        <Accordion
                            title={accordion.title}
                            content={accordion.content}
                            isActive={activeIndex === index}
                            onClick={() => handleAccordionClick(index)}
                            handleTransitionEnd={() => handleTransitionEnd(index)}
                            value={accordion.val}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileSearchPanel;
