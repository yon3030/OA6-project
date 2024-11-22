import React, { useState, useEffect } from "react";
import Image from "next/image";
import UnitsFeaturesProps from "./type";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CompareCardCSS from "../UnitCardsCSS";

const UnitsFeatures: React.FC<UnitsFeaturesProps> = ({ ...props }) => {
    const [currentImageUrl, setCurrentImageUrl] = useState("1");
    const [isBorderChange, setIsBorderChange] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    const handleMouseEnter = (imgUrl: string) => {
        setCurrentImageUrl(imgUrl);
    };

    useEffect(() => {
        // Set border color to green and then transition to white
        setIsBorderChange(true);
        setIsImageError(false); // Reset the error state when changing images
        const timer = setTimeout(() => {
            setIsBorderChange(false);
        }, 1000); // 1 second duration for green border

        // Clear timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [currentImageUrl]);

    const handleImageError = () => {
        setIsImageError(true);
    };

    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row items-center justify-start space-x-2">
                <ArrowBackIosNewIcon className="text-white text-24" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Features</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pb-10">
                {props.features?.map((feature, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => handleMouseEnter(feature.imgUrl)}
                        className="bg-transparent border-2 text-white justify-start text-[14px] border-transparent hover:bg-primary-light rounded-full flex items-center z-30 flex-glow w-full space-x-4"
                    >
                        <Image src={`/svgs/feat-${feature.description}.svg`} width={30} height={30} alt={feature.description} />
                        <h1 className="">{feature.description}</h1>
                    </button>
                ))}

            </div>
            <div className={`mt-12 relative h-[8rem] rounded-[16px] border-[1px] transition-all duration-1000 ease-in-out ${!isBorderChange ? " gradient-border gradient-default-border gradient-border-rounded-16px border-transparent" : "border-secondary-default"}`}>
                <img
                    src={`/imgs/categories/units/${props.index}/features/${currentImageUrl}.png`}
                    onError={handleImageError}
                    alt="Feature"
                    className="w-full h-full object-cover rounded-[16px] absolute inset-0 "
                    style={{ opacity: isImageError ? 0 : 1 }}
                />
                {isImageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-default bg-opacity-50 rounded-[16px] text-white">
                        Missing Image
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnitsFeatures;
