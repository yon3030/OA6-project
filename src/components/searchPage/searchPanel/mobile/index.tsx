"use client"
import "./index.css"
import Image from "next/image"

interface MobileSearchBarProps {
    onClick: () => void;
}

const MobileSearchBar: React.FC<MobileSearchBarProps> = ({ onClick }) => {
    return (
        <div>
            <h1 className="text-[28px] text-center font-sans font-bold capitalize break-words text-white">find your ideal home</h1>
            <div
                className="mobile-searchbar-container rounded-full absolute h-[64px] mt-4 mx-6 px-6 bg-global-search-panel-back shadow-search-box-btn  p-[1px] z-10 flex flex-row justify-between items-center"
                onClick={onClick}>
                <div className="flex flex-row justify-start items-center space-x-4">
                        <button className='rounded-full p-[10px] bg-[#4e4e4e] shadow-search-box-btn-MD'>
                            <Image
                                src={"/svgs/navbar/search.svg"}
                                alt="search"
                                width={24}
                                height={24}
                                className="-mt-[1px] -ml-[1px]"
                            />
                        </button>
                    <div>
                        <h1 className="text-[16px] text-white">Search</h1>
                        <p className="text-[12px] text-[rgba(227,227,227,0.5)]">Where? Price? Type?</p>
                    </div>
                </div>
                <Image
                    src={"/svgs/filter.svg"}
                    alt="filter"
                    width={24}
                    height={24}
                    className="invert"
                />
            </div>
        </div>
    )
}

export default MobileSearchBar