"use client"
import { useEffect, useState } from "react";
import "../index.css"
import { usePathname } from 'next/navigation'
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
const NavBar = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<string | null>(null);

    useEffect(() => {
        Items.some(item => {
            if (pathname.indexOf(item.svgUrl) > 0)
                setActiveItem(item.svgUrl)
        })
    }, [pathname])

    return (
        <div className="navbar-container gradient-border gradient-default-border bottom-3 rounded-full h-[68px] mx-4 px-7 shadow-search-box-btn flex flex-row justify-between items-center z-10">
            {Items.map((item, index) => (
                <div
                    key={index}
                    className={`icon-container ${activeItem === item.svgUrl ? "active" : ""}`}
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

export default NavBar
