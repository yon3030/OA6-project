'use client';

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import Button from "@/components/common/button";
import { addCommasToNumber } from "@/lib/numberMethod";
import ItemListPanel from "@/components/mainPage/itemListPanel/halfSidebar";

const UnitsMap = () => {
    const router = useRouter();
    const { isMobile } = useThemeContext();
    const [fontSize, setFontSize] = useState(200);
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback(() => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            setFontSize(width / 400 * 100); // Adjust sizes as needed
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500); // Reset animation state
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [handleResize]);
    useEffect(() => {
        if (!isMobile) {
            router.push("../1/map");
        }
    }, [isMobile, router]);


    const renderItemListPanel = () => (
        <div
            ref={containerRef}
            className={`flex-grow h-screen relative flex ${animate ? 'animate-bounceIn' : ''} rounded-[20px] m-[1px]`}
            style={{ backgroundImage: "url('/imgs/commingsoon/preview1.png')" }}
        >
            <div className="absolute flex flex-col items-start justify-end w-full h-full left-6 bottom-5">
                <h1
                    style={{ fontSize: `${fontSize * 0.6}px` }}
                    className={`font-sans text-white leading-none ${animate ? 'animate-fadeIn' : ''}`}
                >
                    3d-map
                </h1>
                <h1
                    style={{ fontSize: `${fontSize * 1}px` }}
                    className={`font-sans text-white leading-none ${animate ? 'animate-fadeIn' : ''}`}
                >
                    Coming
                </h1>
                <h1
                    style={{ fontSize: `${fontSize * 0.7}px` }}
                    className={`font-sans text-white filter blur-[6.4px] p-4 leading-none -mt-8 ${animate ? 'animate-fadeIn' : ''}`}
                >
                    soon
                </h1>
            </div>
        </div>
    );

    return (
        <>
            {renderItemListPanel()}
            {
                isMobile && (
                    <Link href="./list">
                        <div className="fixed w-screen left-0 bottom-[-28px] bg-primary-default gradient-border gradient-border-rounded-24px gradient-default-border h-[150px] rounded-[24px] pt-2 flex flex-col items-center">
                            <div className="border-[1.5px] w-12 border-primary-light" />
                            <p className="text-center text-[16px] mt-[5px] text-white">
                                {addCommasToNumber(1122)} Objects
                            </p>
                        </div>
                    </Link>
                )
            }
        </>
    );
};

export default UnitsMap;
