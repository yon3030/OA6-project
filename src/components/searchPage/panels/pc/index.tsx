"use client";

import WherePanel from "../Where/pc";
import PricePanel from "../Price";
import TypePanel from "../Type";
import RoomsPanel from "../Rooms";
import InterestsPanel from "../Interests";

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

const panelComponents: { [key: string]: React.FC<any> } = {
    Where: WherePanel,
    Price: PricePanel,
    Type: TypePanel,
    Rooms: RoomsPanel,
    Interests: InterestsPanel,
};

const SearchPanel: React.FC<SearchPanelProps> = ({
    panelPosition, selectedTag,
    selectedArea, handleAreaClick,
    limit, priceRange, handlePriceRangeChange,
    selectedTypes, handleTypeClick,
    bedCnt, increaseBedCnt, decreaseBedCnt, bathCnt, increaseBathCnt, decreaseBathCnt,
    activeInterests, handleInterestClick,
}) => {
    const SelectedPanel = selectedTag ? panelComponents[selectedTag] : null;

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

    return (
        <div
            className="absolute h-[400px] slide-in-from-bottom"
            style={{
                left: panelPosition?.left || 0,
                top: "calc(50vh - 140px)",
            }}
        >
            {SelectedPanel && (
                <div className="mt-[2rem] gradient-border gradient-border-rounded-30px gradient-default-border absolute bg-primary-light rounded-[30px] shadow-search-box-btn  z-10 glass-stroke">
                    <SelectedPanel {...commonProps} />
                </div>
            )}
        </div>
    );
};

export default SearchPanel;
