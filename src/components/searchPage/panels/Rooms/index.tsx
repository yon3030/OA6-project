"use Client"
import RoomNumCtrl from "./roomNumCtrl"

interface RoomsPanelProps {
    bedCnt: number,
    increaseBedCnt: () => void;
    decreaseBedCnt: () => void;
    bathCnt: number,
    increaseBathCnt: () => void;
    decreaseBathCnt: () => void;
}

const RoomsPanel: React.FC<RoomsPanelProps> = ({ bedCnt, increaseBedCnt, decreaseBedCnt, bathCnt, increaseBathCnt, decreaseBathCnt }) => {
    return (<div className='px-7 py-4 flex items-center justify-center flex-col'>
        <RoomNumCtrl title="Bedrooms" description="description"
            count={bedCnt}
            increase={increaseBedCnt}
            decrease={decreaseBedCnt}
        />
        <hr className="w-full my-2 border-t border-[#646464]" />
        <RoomNumCtrl title="Bathrooms" description="description"
            count={bathCnt}
            increase={increaseBathCnt}
            decrease={decreaseBathCnt}
        />
    </div>)
}

export default RoomsPanel