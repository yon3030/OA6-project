'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { mockData } from "@/lib/mockData";
import { useThemeContext } from "@/lib/context";
import ItemListPanel from "@/components/mainPage/itemListPanel/fullSidebar";
import MainPanel from "@/components/mainPage/mainPanel";
import Card from "@/components/common/card";
import CarouselPanel from "@/components/developersPage/projects/carouselPanel";
import TopPreview from "@/components/developersPage/preview";

interface DevelopersItemLayoutProps {
    children: React.ReactNode;
    params: {
        id: number;
    };
}

const DevelopersItemLayout = ({ children, params }: DevelopersItemLayoutProps) => {
    const [isExpanded, setExpanded] = useState(false);
    const { isMobile } = useThemeContext();
    const pathname = usePathname();
    const isMapPage = pathname.includes("map");
    const isAllPage = pathname.includes("all");

    const items = mockData["developers"]["cardInfo"];
    const renderPCUI = () => (
        <div className="flex flex-row space-x-3">
            <ItemListPanel
                title="Developers"
                expandVisible={true}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
                className="flex flex-col bg-primary-default gradient-border gradient-default-border relative gradient-border-rounded-30px rounded-[30px] transition-all duration-300"
            >
                {[...items, ...items].map((card, index) => (
                    <Card
                        key={index}
                        link={`/developers/${index + 1}`}
                        cardImage={{
                            url: `developers/${index + 1}/gallery/${card.imgUrl}`,
                            alt: "project gallery",
                            width: 245,
                            height: 130
                        }}
                        isSelected={params.id === index + 1}
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
            </ItemListPanel>
            {
                !isExpanded &&
                <MainPanel>
                    {!isMapPage && (
                        <>
                            <TopPreview />

                            {
                                !isAllPage &&
                                <div className="px-7">
                                    <div className="overflow-y-auto overflow-x-hidden h-[200px] scrollbar-thin scrollbar-grey">
                                        {children}
                                    </div>
                                    <div className="pt-5">
                                        <CarouselPanel cardInfo={mockData.developers.cardInfo} />
                                    </div>
                                </div>
                            }

                            {isAllPage && children}
                        </>
                    )}
                    {isMapPage && children}
                </MainPanel>
            }
        </div>
    );

    const renderMobileUI = () => (
        <div className="w-full h-full space-x-3">
            <MainPanel>
                {children}
            </MainPanel>
        </div>
    );

    return isMobile ? renderMobileUI() : renderPCUI();
};

export default DevelopersItemLayout;
