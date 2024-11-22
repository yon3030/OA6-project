import { SearchBarProps } from './type';
import Image from 'next/image';

const SearchBar: React.FC<SearchBarProps> = ({
    className,
    placeHolderColor = "white"
}) => {
    return (
        <div className={`${className}`}>
            <input
                type="text"
                placeholder="Search"
                className={`bg-transparent outline-none placeholder-[${placeHolderColor}] w-full bg-[#414141] z-20 text-white`}
            />
            <Image src={"/svgs/search-green.svg"} alt='search' width={20} height={20} />
        </div>
    );
};

export default SearchBar;
