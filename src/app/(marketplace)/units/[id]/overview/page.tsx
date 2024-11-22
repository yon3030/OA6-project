"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/button";
import TabBarWithHR from "@/components/common/tabBar/withHR";
import { addCommasToNumber } from "@/lib/numberMethod";
import { mockData } from "@/lib/mockData";
import { useThemeContext } from "@/lib/context";

const OverviewButton = ({ href, imgSrc, label, value, isMobile }: { href: string; imgSrc: string; label: string; value: string; isMobile: boolean }) => (
    <Link href={href} className={`h-[58px] flex ${isMobile ? 'w-full' : 'min-w-[210px]'} bg-primary-dark`}>
        <Button
            roundedSize="10"
            prefix={<Image src={imgSrc} alt={label} width={30} height={30} />}
            suffix={<Image src="/svgs/right arrow.svg" alt="Arrow" width={24} height={24} className={`absolute ${isMobile ? 'right-5' : 'right-3'}`} />}
            className={`flex-row justify-start items-center space-x-2 w-full ${isMobile ? 'px-5' : 'pl-3'}`}
        >
            <div className={`text-left ${isMobile ? 'w-full' : 'w-[130px]'}`}>
                <p className="text-[#414141] text-[12px] truncate overflow-hidden whitespace-nowrap">{label}</p>
                <h1 className="text-white text-[14px] truncate overflow-hidden whitespace-nowrap">{value}</h1>
            </div>
        </Button>
    </Link>
);

const UnitsOverviewPage = ({ params }: { params: { id: number } }) => {
    const { isMobile } = useThemeContext();
    const [itemData, setItemData] = useState(mockData["units"]["overview"][params.id - 1]);

    const tabData = [
        { title: "On Oasix", value: `${addCommasToNumber(itemData.apartmentCnt)} hours` },
        { title: "Views", value: `${addCommasToNumber(itemData.views)}` },
        { title: "Saves", value: `${addCommasToNumber(itemData.saves)}` },
    ];

    return isMobile ? (
        <>
            <OverviewButton
                href=""
                imgSrc={`/imgs/categories/units/${params.id}/overview/1.png`}
                label="Developer"
                value={itemData.developer}
                isMobile={isMobile}
            />
            <OverviewButton
                href=""
                imgSrc={`/imgs/categories/units/${params.id}/overview/2.png`}
                label="Project"
                value={itemData.project}
                isMobile={isMobile}
            />
            <TabBarWithHR tabs={tabData} />
            <div className="mx-5 px-3 h-[300px] overflow-hidden gradient-mask whitespace-normal break-words relative">
                <p className="absolute inset-0 text-white text-[14px] leading-7 break-all">{itemData.content}</p>
            </div>
        </>
    ) : (
        <>
            <div className="flex flex-row items-center space-x-3 justify">
                <div className="flex flex-row space-x-2">
                    <OverviewButton
                        href="./model"
                        imgSrc={`/imgs/categories/units/${params.id}/overview/1.png`}
                        label="Developer"
                        value={itemData.developer}
                        isMobile={isMobile}
                    />
                    <OverviewButton
                        href="./model"
                        imgSrc={`/imgs/categories/units/${params.id}/overview/2.png`}
                        label="Project"
                        value={itemData.project}
                        isMobile={isMobile}
                    />
                </div>
                <TabBarWithHR tabs={tabData} />
            </div>
            <p className="text-white text-[14px] mt-4">{itemData.content}</p>
        </>
    );
};

export default UnitsOverviewPage;
