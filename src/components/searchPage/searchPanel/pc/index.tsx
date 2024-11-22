"use Client"

import SearchTagBtn from '@/components/common/button/searchTagsBtn';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import TagSeperator from '@/components/common/seperator/horizontal';
import Image from 'next/image';

interface PCSearchBarProps {
    handleTagClick: (tag: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selectedTag: string | null;
    TagLabels: { name: string; label: string | null }[]
}

const PCSearchBar: React.FC<PCSearchBarProps> = ({ handleTagClick, selectedTag, TagLabels }) => {
    return (<div className='flex flex-col '>
        <div className="relative flex flex-col items-center justify-center text-white space-y-4">
            <div className="flex items-center space-x-2 bg-primary-default rounded-full gradient-border gradient-search-border gradient-border-2px shadow-search-box-btn  pr-16">
                {TagLabels.map((tag, index) => {
                    if (index < TagLabels.length - 1)
                        return <div key={index} className='flex flex-row items-center space-x-2'>
                            <SearchTagBtn onClick={(e) => handleTagClick(tag.name, e)} isActive={selectedTag === tag.name}>
                                {tag.label ? tag.label : tag.name}
                            </SearchTagBtn>
                            <TagSeperator /></div>
                    return <SearchTagBtn key={index} onClick={(e) => handleTagClick(tag.name, e)} isActive={selectedTag === tag.name}>
                        {tag.label ? tag.label : tag.name}
                    </SearchTagBtn>
                })}
                &nbsp;&nbsp;
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 rounded-full p-[2px]'>
                    <Link href={`${(TagLabels[0].label && TagLabels[2].label && TagLabels[4].label) ? "/units/1/map" : ""}`}>
                        <button className={`rounded-full p-[23px] shadow-search-box-btn-MD ${(TagLabels[0].label && TagLabels[2].label && TagLabels[4].label) ? "bg-search-btn-gradient" : "bg-[#363636]"}`}
                        >
                            <Image src="/svgs/search-white.svg" height={30} width={30} alt="Search ICO" />
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    </div >)
}
export default PCSearchBar