"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useThemeContext } from "@/lib/context";
import Search from "@/components/developersPage/search";
import CloseIcon from '@/components/developersPage/close';

const DevelopersMobileMapPage = () => {
    const router = useRouter();
    const { isMobile } = useThemeContext();
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback(() => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            setAnimate(true);
            setTimeout(() => setAnimate(false), 500);
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
        if (!isMobile)
            router.push("../1/map");
    }, [isMobile, router]);

    return (
        <div ref={containerRef} className={`relative w-full h-full py-[14px] ${animate ? 'animate-bounceIn' : ''}`}>
            <div className={`relative w-full h-full`}>
                <Image src="/imgs/developerMap/mobile-map.png" alt="map" width="100" height="100" className="w-full h-full rounded-[14.95px] bg-no-repeat" />
                <div className="absolute top-0 flex flex-row justify-between w-full px-4 pt-[18px]">
                    <span className="uppercase text-white text-[28px] leading-[33.6px] tracking-[1px] font-sans w-[180px]">map of developer projects</span>
                    <CloseIcon uri="./list" />
                </div>

                <div className="absolute flex justify-center w-full bottom-[-3px]">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default DevelopersMobileMapPage;
