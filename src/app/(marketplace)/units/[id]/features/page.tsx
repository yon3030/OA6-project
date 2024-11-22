"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { mockData } from "@/lib/mockData";
import { useThemeContext } from "@/lib/context";

const UnitsAllPage = ({ params }: { params: { id: number } }) => {
    const { isMobile } = useThemeContext();
    const [itemData, setItemData] = useState(mockData["units"]["features"][params.id - 1]);
    const [currentImageUrl, setCurrentImageUrl] = useState("1");
    const [isBorderChange, setIsBorderChange] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    useEffect(() => {
        setIsBorderChange(true);
        setIsImageError(false); // Reset the error state when changing images
        const timer = setTimeout(() => {
            setIsBorderChange(false);
        }, 1000); // 1 second duration for green border
        return () => clearTimeout(timer);
    }, [currentImageUrl]);

    const renderImageSection = () => (
        <div className={`relative rounded-[16px] border-[1px] transition-all duration-1000 ease-in-out ${!isBorderChange ? "gradient-border gradient-default-border gradient-border-rounded-16px border-transparent" : "border-secondary-default"}`}>
            <img
                src={`/imgs/categories/units/${params.id}/features/${currentImageUrl}.png`}
                onError={() => setIsImageError(true)}
                alt="Feature"
                className="w-full h-full object-cover rounded-[16px] absolute inset-0"
                style={{ opacity: isImageError ? 0 : 1 }}
            />
            {isImageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-default bg-opacity-50 rounded-[16px] text-white">
                    Missing Image
                </div>
            )}
        </div>
    );

    const renderFeatureButtons = () => (
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2 pb-10' : 'grid-cols-2 gap-x-10 gap-y-4'} mt-4`}>
            {itemData.features?.map((feature, index) => (
                <button
                    key={index}
                    onMouseEnter={() => setCurrentImageUrl(feature.imgUrl)}
                    className="bg-transparent border-2 text-white justify-start text-[14px] border-transparent hover:bg-primary-light rounded-full flex items-center z-30 flex-glow w-full space-x-4"
                >
                    <Image src={`/svgs/feat-${feature.description}.svg`} width={30} height={30} alt={feature.description} />
                    <h1>{feature.description}</h1>
                </button>
            ))}
        </div>
    );

    return isMobile ? (
        <>
            {renderFeatureButtons()}
            <div className={`mt-12 h-[8rem] ${renderImageSection().props.className}`}>
                {renderImageSection().props.children}
            </div>
        </>
    ) : (
        <>
            <div className="flex flex-row mt-4 items-center justify-between w-full h-[200px]">
                <div className={`w-[50%] h-full ${renderImageSection().props.className}`}>
                    {renderImageSection().props.children}
                </div>
                {renderFeatureButtons()}
            </div>
        </>
    );
};

export default UnitsAllPage;
