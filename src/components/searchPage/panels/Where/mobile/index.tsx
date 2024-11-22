"use Client"
import SearchBar from "@/components/common/input/search/areaSearchInput"
import MapImageCard from "@/components/common/card/img/SearchPanel"

import "./index.css"; // Import the CSS module

interface WherePanelProps {
    selectedArea: string | null;
    handleAreaClick: (description: string) => void;
}
const WherePanel: React.FC<WherePanelProps> = ({ selectedArea, handleAreaClick }) => {
    return (
        <div className='pt-2 px-6 h-[240px]'>
            <SearchBar
                className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 bg-primary-light"
                placeHolderColor="white"
            />
            <div
                className={`h-[150px] overflow-y-scroll mt-4 flex space-x-5 pt-6 custom-scrollbar`}
                style={{ WebkitOverflowScrolling: 'touch' }} // Ensure smooth scrolling on iOS
            >
                {[{ imgURL: "where/0.png", description: "World Wide" },
                { imgURL: "where/0.png", description: "Europe" },
                { imgURL: "where/0.png", description: "Asia" },
                { imgURL: "where/0.png", description: "Africa" },
                { imgURL: "where/0.png", description: "America" },
                { imgURL: "where/0.png", description: "Oceania" },
                { imgURL: "where/0.png", description: "Antarctica" },
                { imgURL: "where/0.png", description: "Middle East" },
                { imgURL: "where/0.png", description: "South America" }].map((item) => (
                    <MapImageCard
                        key={item.description}
                        imgUrl={item.imgURL}
                        description={item.description}
                        isSelected={selectedArea === item.description}
                        onClick={() => handleAreaClick(item.description)}
                    />
                ))}
            </div>
        </div>
    );
}


export default WherePanel