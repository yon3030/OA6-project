"use Client"
import SearchBar from "@/components/common/input/search/areaSearchInput"
import MapImageCard from "@/components/common/card/img/SearchPanel"

interface WherePanelProps {
    selectedArea: string | null;
    handleAreaClick: (description: string) => void;
}

const WherePanel: React.FC<WherePanelProps> = ({ selectedArea, handleAreaClick }) => {
    return (
        <div className='py-8 w-[514px] px-6'>
            <SearchBar
                className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 mx-2 bg-primary-default"
                placeHolderColor="#414141"
            />
            <div className='grid grid-cols-3 gap-5 pt-8'>
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
        </div>)
}

export default WherePanel