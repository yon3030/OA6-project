import Image from "next/image";

interface MapImageCardProps {
    imgUrl: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
}

const MapImageCard = ({ imgUrl, description, isSelected, onClick }: MapImageCardProps) => {
    return (
        <button
            onClick={onClick}
            className={`h-[100px] w-[124px] lg:w-[140px] flex flex-col items-center justify-center transition-transform transform hover:scale-105 mb-5`}
        >
            <Image src={`/imgs/search/${imgUrl}`} alt={description} width={140} height={100} className={`object-cover ${isSelected ? 'border-2 border-[#20d795] rounded-[20px]' : 'border-2 border-transparent'}`} />
            <h3 className="text-[#e3e3e3] text-[14px] w-[140px] mt-2">{description}</h3>
        </button>
    );
}

export default MapImageCard;
