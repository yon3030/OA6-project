"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from "@/components/common/input/search/areaSearchInput";
import Card from "@/components/common/card";
import WidthFullImageCard from '@/components/common/wfullcard';
import Button from '@/components/common/button';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useThemeContext } from "@/lib/context";
import { mockData } from "@/lib/mockData";

const DevelopersAllMobilePage = () => {
    const { isMobile } = useThemeContext();
    const router = useRouter();

    useEffect(() => {
        if (isMobile)
            router.push("../all/mobile");
        else router.push("../all");
    }, [isMobile, router]);

    const goBack = () => {
        router.back();
    };

    return (
        <>
            <div>
                <div className="flex flex-row items-center justify-between pb-[10px]">
                    <p className="text-white text-[28px] sm:text-[30px]">Developers</p>
                    <div className="flex flex-row space-x-3">
                        <Button
                            handleClick={goBack}
                            prefix={<CloseIcon />}
                            border={{ color: "transparent", width: 0 }}
                            className="h-[30px] w-[30px] bg-white items-center justify-center z-10"
                        >
                        </Button>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <SearchBar
                        className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 mb-3 mt-3 bg-primary-light text-white w-2/5"
                        placeHolderColor="#414141"

                    />
                    <div
                        className="text-white bg-[#353535] w-[46px] h-[46px] flex flex-row justify-center items-center rounded-[14px] cursor-pointer"

                    >
                        <FilterAltIcon />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-grey">
                {/* <Projects cardInfo={cardInfo} imgWidth={147} imgHeight={155} cardWidth="w-full" cardHeight="h-[180px]" fontSize={14} desSize={12} direction="horizontal" /> */}
                {mockData.developers.cardInfo && mockData.developers.cardInfo.map((card, index) => (
                    <WidthFullImageCard
                        key={index}
                        link={`/developers/${index + 1}`}
                        cardImage={{
                            url: `developers/${index + 1}/gallery/${card.imgUrl}`,
                            alt: "project gallery",
                            width: 245,
                            height: 130
                        }}
                        // isSelected={params.id === index + 1}
                        title={{ text: card.title, size: 16 }}
                        extraInfos={card.infos.map(info => ({
                            icon: {
                                url: info.icon,
                                alt: info.units,
                                width: 18,
                                height: 18
                            },
                            text: `${info.value} ${info.units}`
                        }))}
                        className="w-full h-[220px] mb-[5px]"
                    />
                ))}
            </div>
        </>
    );
};

export default DevelopersAllMobilePage;