"use Client"
import { addCommasToNumber } from "@/lib/numberMethod"

interface SearchedCntProps {
    count: number
}

const SearchedCnt: React.FC<SearchedCntProps> = ({ count }) => {
    return (
        <div className="text-center absolute bottom-[0rem] lg:bottom-[3rem] text-white w-full">
            <p className="text-[28px] lg:text-[60px] font-sans">{addCommasToNumber(count)}</p>
            <p className="text-[16px] lg:text-[16px]">Units, that match your search</p>
        </div>
    )
}
export default SearchedCnt