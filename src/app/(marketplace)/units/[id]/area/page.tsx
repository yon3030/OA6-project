"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/lib/context";
import Button from "@/components/common/button";
import Label from "@/components/common/label";
import { addCommasToNumber } from "@/lib/numberMethod";
import { mockData } from "@/lib/mockData";

interface UnitsAreaPageProps {
    params: { id: number };
}

const UnitsAreaPage = ({ params }: UnitsAreaPageProps) => {
    const { isMobile } = useThemeContext();
    const [itemData, setItemData] = useState(mockData["units"]["area"][params.id - 1]);

    const commonButtonProps = {
        roundedSize: "20",
        className: "flex-col items-start w-full pl-3 py-3 h-full"
    };


    const renderCard = () => (
        <div
            className={`relative ${isMobile ? 'min-w-[160px]' : 'w-[450px]'} h-[8rem] bg-cover bg-center rounded-[16px] flex flex-col items-start justify-center px-6`}
            style={{ backgroundImage: `url(/imgs/categories/units/${params.id}/gallery/3.png)` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 rounded-[16px]" />
            <div className="relative z-10 flex flex-col items-start">
                <Label text="Area name" size={isMobile ? 24 : 32} />
                <Label
                    text="Area district"
                    size={12}
                    icon={{ url: `/compare/location-white.svg`, width: isMobile ? 16 : 24, height: isMobile ? 16 : 24, alt: "location" }}
                />
            </div>
        </div>
    );

    const renderButtons = (data?: any[], isYearInfo?: any) => (
        data?.map((item, index) => (
            <Button
                key={index}
                {...commonButtonProps}
                className={`${commonButtonProps.className} ${isYearInfo ? 'text-[30px] font-semibold' : 'text-[25px]'}`}
            >
                <h1 className="text-white">
                    {isYearInfo ? item.year : `${item.units} ${addCommasToNumber(item.value)}`}
                </h1>
                <p className="text-primary-light text-[12px]">{item.description}</p>
            </Button>
        ))
    );

    return (
        <>
            <div className={`flex ${isMobile ? 'flex-row mt-4 space-x-4' : 'flex-row mt-4 justify-between space-x-8'}`}>
                <div className={`${isMobile ? 'w-[50%]' : 'w-[400px] h-[125px]'}`}>
                    {renderCard()}
                </div>
                <div className={`flex ${isMobile ? 'flex-grow  w-full' : 'min-w-[300px] h-[125px]'} items-center`}>
                    <Link href="./3d" className="w-full h-full">
                        <Button
                            roundedSize="10"
                            prefix={<Image src="/svgs/compare/location-green.svg" alt="Green Location Icon" width={31.26} height={31} />}
                            className={`flex items-center flex-row justify-center w-full h-full bg-primary-dark`}
                        >
                            <h1 className="text-white text-[16px]">MAP VIEW</h1>
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={`flex ${isMobile ? 'flex-col space-y-2 mt-3' : 'flex-row justify-between mt-3'}`}>
                <div className={`${isMobile ? 'w-full' : 'w-[450px]'} flex flex-row space-x-2`}>
                    {renderButtons(itemData.infos)}
                </div>
                {!isMobile && (
                    <div className="flex flex-row items-center justify-between space-x-4 w-[300px]">
                        {renderButtons(itemData.yearInfos, true)}
                    </div>
                )}
            </div>
            {isMobile && (
                <div className="flex flex-row items-center justify-between space-x-4">
                    {renderButtons(itemData.yearInfos, true)}
                </div>
            )}
        </>
    );
};

export default UnitsAreaPage;
