"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { addCommasToNumber } from "@/lib/numberMethod";
import { useThemeContext } from "@/lib/context";
import { useRouter } from 'next/navigation';

const UnitsMapPage = () => {
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
        if (isMobile)
            router.push("../mobile/map");
    }, [isMobile, router]);

    return (
        <div
            ref={containerRef}
            className={`w-full h-full relative flex ${animate ? 'animate-bounceIn' : ''} rounded-[30px] m-[1px]`}
            style={{ backgroundImage: "url('/imgs/commingsoon/preview1.png')" }}
        >
            <div className="absolute left-6 bottom-5 flex flex-col items-start justify-end">
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
            {isMobile && (
                <Link href="../list">
                    <div className="fixed w-screen left-0 bottom-[-28px] bg-primary-default gradient-border gradient-border-rounded-24px gradient-default-border h-[150px] rounded-[24px] pt-2 flex flex-col items-center">
                        <div className="border-[1.5px] w-12 border-primary-light" />
                        <p className="text-center text-[16px] mt-[5px] text-white">
                            {addCommasToNumber(1122)} Objects
                        </p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default UnitsMapPage;
