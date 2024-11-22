"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import CloseIcon from '@/components/developersPage/close';

const DevelopersPCMapPage = () => {
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
        if (isMobile)
            router.push("../mobile/map");
    }, [isMobile, router]);

    return (
        <div ref={containerRef} className={`relative w-full h-full ${animate ? 'animate-bounceIn' : ''} border-2 border-[#1b1b1b] rounded-[30px]`}>
            <div className="w-full h-[90px] rounded-[30px] flex flex-row justify-between items-center pl-[18px] pr-[24.5px]">
                <span className="uppercase text-white text-[28px] leading-[33.6px] tracking-[1px] font-sans font-semibold">map of developer projects</span>
                <CloseIcon uri="./" />
            </div>
            <div
                className={`w-full h-full absolute inset-0 flex rounded-[30px]`}
                style={{ backgroundImage: "url('/imgs/developerMap/pc-map.png')" }}
            >
            </div>
        </div>
    );
};

export default DevelopersPCMapPage;