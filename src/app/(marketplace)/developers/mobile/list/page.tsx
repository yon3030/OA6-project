"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/lib/context";
import { mockData } from "@/lib/mockData";
import Button from "@/components/common/button";
import CarouselPanel from "@/components/developersPage/projects/carouselPanel";
import Search from "@/components/developersPage/search";
import TopPreview from "@/components/developersPage/preview";

interface Props {
    params: {
        id: number;
    };
}

interface Property {
    icon: string;
    title: string;
    description: string;
}

const properties: Property[] = [
    { icon: '/svgs/bright.svg', title: '10+', description: 'Complete' },
    { icon: '/svgs/calendar.svg', title: '2019', description: 'In process' },
    { icon: '/svgs/time.svg', title: '8', description: 'In process' },
];

const description =
    "Welcome to this stunning property featuring a cozy fireplace, complemented by a soothing natural color  throughout. With its  layout and other flexible living spaces, this home offers endless possibilities for customization to suit your unique lifestyle. The primary bathroom is a retreat of its own, with a separate tub and shower, double sinks for added convenience, and ample under sink storage for all your essentials.";

const singleStyle =
    "relative flex flex-row items-center justify-between w-full gradient-border bg-primary-default gradient-default-border gradient-border-rounded-12px"

const multiStyle =
    "relative flex flex-col items-start justify-center w-full gradient-border bg-primary-default gradient-default-border gradient-border-rounded-20px h-full px-3";

const DevelpersMobilePage = ({ params }: Props) => {
    const { isMobile } = useThemeContext();
    const router = useRouter();

    useEffect(() => {
        if (!isMobile)
            router.push("../1");
    }, [isMobile, router]);

    return (
        <div className="h-full">
            <div className="relative gradient-border gradient-default-border gradient-border-rounded-16px">
                <TopPreview />
                <div className="px-3 py-4 space-y-5">
                    <div className={`flex flex-row items-center justify-between w-full h-[80px]`}>
                        <div className="w-[110px] h-full flex flex-col items-start justify-between">
                            <Button className="w-full px-[17px] py-[9px] bg-primary-light items-center justify-center">
                                <span className="text-[12px] capitalize text-white">Explore Map</span>
                            </Button>
                            <span className="text-[12px] text-white">UAE, Dubai Business Bay</span>
                        </div>
                        <Link href="./map">
                            <div className="flex flex-row items-start justify-between w-[118px] h-full">
                                <Image src="/imgs/categories/developers/1/all/1.png" width={118} height={80} alt="Explore Map" className="w-full h-full" />
                            </div>
                        </Link>
                    </div>

                    <div className={`${singleStyle} h-[64px]`}>
                        <div className="px-3">
                            <Image src={`/svgs/dollar.svg`} width={24} height={24} alt="icon" />
                        </div>
                        <div
                            className="flex flex-col items-start justify-center w-full h-full">
                            <h1 className="text-white text-[22px]">
                                from 200.000$
                            </h1>
                            <p className="text-primary-light text-[12px]">
                                Price segment
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full space-x-3 h-[96px]">
                        {properties.map((item, index) => (
                            <div className={multiStyle} key={index}>
                                <Image src={item.icon} width={24} height={24} alt="icon" />
                                <h1 className="text-white text-[22px]">
                                    {item.title}
                                </h1>
                                <p className="text-primary-light text-[12px] text-balance">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-white text-[12px] leading-[15.6px] w-full">
                        {description}
                    </div>
                </div>
            </div>

            <div className="pb-5 mt-5">
                <CarouselPanel cardInfo={mockData.developers.cardInfo} />
            </div>

            <div className="absolute flex justify-center w-full bottom-[-3px]">
                <Search />
            </div>
        </div>
    )
};

export default DevelpersMobilePage;
