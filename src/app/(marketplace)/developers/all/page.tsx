"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from "@/components/common/input/search/areaSearchInput";
import Card from "@/components/common/card";
import { useThemeContext } from "@/lib/context";
import { mockData } from "@/lib/mockData";

const DevelopersAllPage = () => {
    const { isMobile } = useThemeContext();
    const router = useRouter();

    useEffect(() => {
        if (isMobile)
            router.push("../developers/all/mobile");
        else router.push("../developers/all");
    }, [isMobile, router]);

    return (
        <div className="w-full pb-4 px-7 bg-primary-default gradient-border gradient-default-border relative gradient-border-rounded-30px rounded-[30px] transition-all duration-300">
            <div className="flex flex-row items-center justify-between">
                <p className="font-sans font-medium text-[28px] text-white">Developers</p>
                <SearchBar
                    className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 mb-3 mt-3 bg-primary-light text-white w-2/5 h-[46px]"
                    placeHolderColor="#414141"

                />
            </div>
            <div className="w-full h-[500px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-grey px-1">
                <div className="grid grid-cols-4 gap-3">
                    {mockData.developers.cardInfo && mockData.developers.cardInfo.map((card, index) => (
                        <Card
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
                            className="w-[265px] h-[220px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevelopersAllPage;