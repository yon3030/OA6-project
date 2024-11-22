"use client"
import Image from 'next/image';
import { SearchBoxBorderContainer, SearchBoxContentContainer, SearchBoxInput, SearchBoxRoundedBtn } from './classNames';
import Link from 'next/link';
const SearchBox = () => {
    return (
        <div className={SearchBoxBorderContainer}>
            <div className={SearchBoxContentContainer}>
                <Link href={"/search"} >
                    <h1
                        className={SearchBoxInput}
                        style={{ cursor: 'pointer' }}
                    >
                        Find your new perfect house
                    </h1>
                    <button className={SearchBoxRoundedBtn}>
                        <Image src={"/svgs/search-white.svg"} alt='search' width={30} height={30} className='w-[20.58px] h-[20.58px] md:w-[30px] md:h-[30px]'/>
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default SearchBox