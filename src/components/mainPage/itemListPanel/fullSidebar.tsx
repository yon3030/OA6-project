import SearchBar from "@/components/common/input/search/areaSearchInput";
import ExpandBtn from "@/components/common/button/expandBtn";
import { ItemListFullPanelProps } from "./type";

const ItemListFullPanel: React.FC<ItemListFullPanelProps> = ({ className, title, children, expandVisible, isExpanded, setExpanded }) => {
    return (
        <div className={`flex flex-row ${isExpanded ? "w-full" : ""}`}>
            <div className={`${className} ${isExpanded ? "w-full" : "w-[330px]"}`}>
                <div className="flex px-8 mt-2">
                    <p className="font-sans font-medium text-[40px] leading-[70px] text-white">{title}</p>
                </div>
                <SearchBar
                    className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 mx-8 bg-primary-light text-white"
                    placeHolderColor="#414141"
                />
                <div className={`min-h-[600px] max-h-[600px] px-8 transition-all duration-300 justify-between w-full overflow-y-auto overflow-x-hidden my-[14.25px] scrollbar-thin scrollbar-green`}>
                    <div className={`grid gap-2 ${isExpanded ? 'grid-cols-4' : 'grid-cols-1  justify-items-center'} transition-all duration-300 py-2`}>
                        {children}
                    </div>
                </div>
            </div>
            {expandVisible && (
                <div className="flex mt-[25px]">
                    <ExpandBtn isExpanded={isExpanded} setExpanded={setExpanded} />
                </div>
            )}
        </div>
    );
}

export default ItemListFullPanel
