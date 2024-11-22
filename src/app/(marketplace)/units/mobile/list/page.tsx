'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import Button from "@/components/common/button";
import ItemListPanel from "@/components/mainPage/itemListPanel/halfSidebar";
import { mockData } from "@/lib/mockData";
import Card from "@/components/common/card";

const UnitsMap = () => {
    const router = useRouter();
    const { isMobile } = useThemeContext();

    useEffect(() => {
        if (!isMobile) {
            router.push("../1/map");
        }
    }, [isMobile, router]);

    const cardProps = (card: any) => ({
        direction: "horizontal",
        link: `/units/${card.id}`,
        cardImage: {
            url: `units/${card.id}/gallery/${card.imgUrl}`,
            alt: "gallery",
            width: 150,
            height: 130
        },
        title: {
            text: card.title,
            size: 24
        },
        description: {
            icon: {
                url: "compare/location-white.svg",
                alt: "Location Icon",
                width: 16,
                height: 16
            },
            text: card.location,
            size: 12,
        },
        extraInfos: card.infos.map((info: any) => ({
            icon: {
                url: info.icon,
                alt: info.units,
                width: 16,
                height: 16
            },
            text: `${info.value}${info.units}`,
            size: 12,
        }))
    });

    const renderItemListPanel = () => (
        <div
            className="flex flex-col w-full"
        >
            {mockData["units"]["cardInfo"].map((card, index) => (
                <Card
                    key={index}
                    {...cardProps({ ...card, id: index + 1 })}
                />
            ))}
        </div>
    );

    const renderButton = () => (
        <div className="fixed w-screen left-0 bottom-0 h-[140px] flex justify-center pt-1 bg-bottom-div-back">
            <Link href="./map" className="w-[121px]">
                <Button
                    prefix={
                        <Image
                            src="/svgs/search-white.svg"
                            alt="filter"
                            width={18.95}
                            height={18.95}
                            className="invert"
                        />
                    }
                    border={{ color: "transparent", width: 0 }}
                    className="flex-row justify-center space-x-2 items-center text-black bg-white w-full h-[48px] p-2"
                >
                    <p className="text-[16px] font-semibold">Map</p>
                </Button>
            </Link>
        </div>
    );

    return (
        <>
            {renderItemListPanel()}
            {renderButton()}
        </>
    );
};

export default UnitsMap;
