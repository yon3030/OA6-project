"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { UnitsCategoryProps } from "./type";
import { useThemeContext } from "@/lib/context";

const UnitsCategoryBar: React.FC<UnitsCategoryProps> = ({ className, curIndex }) => {
    const { isMobile } = useThemeContext()
    const pathName = usePathname();
    const [activeCat, setActiveCat] = useState(pathName.split("/").pop())
    useEffect(() => { setActiveCat(pathName.split("/").pop()) }, [pathName.split("/").pop()])
    const categories = ["overview", "statistics", "features", "area"]
    return (
        <div className={`${className} ${!isMobile ? "absolute left-[0] bottom-[-30px] w-full flex flex-row space-x-3" : "w-full flex flex-row space-x-3 pt-2 !mb-[-30px] !mt-[20px]"}`}>
            {categories.map((category, index) => {
                if (activeCat == category)
                    return <div
                        className={!isMobile ? "w-[25%] h-[110px] -mt-[20px] flex items-center justify-center" : "w-[25%] h-[95px] -mt-[5px] flex items-center justify-center"}
                        key={index}
                        style={{
                            backgroundImage: 'url("/imgs/categories/listActive.png")',
                            backgroundSize: "100% 100%"
                        }}
                    >
                        <p className=" text-white text-[14px]">
                            {category}
                        </p>
                    </div>
                else
                    return <Link
                        href={`/units/${curIndex}/${category}`} className="w-[25%] h-[120px]"
                        key={index}
                    >
                        <div
                            className="w-full h-[120px] flex items-center justify-center active-category-btn gradient-border gradient-default-border relative gradient-border-rounded-20px rounded-[20px] before:border-b-0 before:border-r-0 hover:bg-category-hover duration-2000"
                        >
                            <p className="active-category-text text-white text-[14px] -mt-[40px]">
                                {category}
                            </p>
                        </div>
                    </Link>
            })}
        </div >
    )
}

export default UnitsCategoryBar