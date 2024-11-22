"use Client"

import MapImageCard from "@/components/common/card/img/SearchPanel"

interface TypePanelProps {
    selectedTypes: string[];
    handleTypeClick: (description: string) => void;
}

const TypePanel: React.FC<TypePanelProps> = ({ selectedTypes, handleTypeClick }) => {
    return (<div className='px-5 py-3'>
        <div className='flex flex-col space-y-8'>
            <div className="flex flex-row justify-center pt-6 pb-2 space-x-3">
                {[{ imgURL: "type/villa.png", description: "Villa" }, { imgURL: "type/apartment.png", description: "Apartment" }].map((item, index) => (
                    <MapImageCard
                        key={item.description}
                        imgUrl={item.imgURL}
                        description={item.description}
                        isSelected={selectedTypes.indexOf(item.description) >= 0}
                        onClick={() => handleTypeClick(item.description)}
                    />
                ))}
            </div>
        </div>
    </div>)
}

export default TypePanel