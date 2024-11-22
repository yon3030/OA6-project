"use client"
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import "../index.css"
import Image from "next/image"
import Link from "next/link";
interface ItemProps {
    svgUrl: string;
    link: string;
}

const Items: ItemProps[] = [
    { svgUrl: "units", link: "/units/1" },
    { svgUrl: "developers", link: "/developers/all" },
    { svgUrl: "compare", link: "/compare/units/all" },
    { svgUrl: "support", link: "/support" },
    { svgUrl: "settings", link: "/settings" },
]

const PCNavBar = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<string | null>(null);

    useEffect(() => {
        Items.some(item => {
            if (pathname.indexOf(item.svgUrl) > 0)
                setActiveItem(item.svgUrl)
        })
    }, [pathname])

    return (
        <div className="pc-navbar-container relative gradient-border gradient-border-2px gradient-default-border w-[59.58px] h-[269.72px] py-5 px-[5px] rounded-full flex flex-col justify-between items-center z-10">
            {Items.map((item, index) => (
                <div
                    key={index}
                    className={`icon-container z-10 ${activeItem === item.svgUrl ? "active" : ""}`}
                >
                    <Link href={item.link}>
                        <Image
                            src={`/svgs/navbar/${item.svgUrl}.svg`}
                            alt={item.svgUrl}
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PCNavBar
