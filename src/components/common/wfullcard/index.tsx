"use client"

import Image from "next/image";
import CardProps from "./type";
import Label from "../label";
import Link from "next/link";
import Button from "../button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WidthFullImageCard: React.FC<CardProps> = ({ className, children, direction, link, cardImage, title, description, extraInfos, isSelected }) => {
    const verticalCard = () =>
        <Link href={link ? link : ""} className={`${className} flex flex-col bg-primary-default rounded-[20px] gradient-border gradient-border-rounded-20px ${isSelected ? "gradient-green-border" : "gradient-default-border"} relative justify-center items-center space-y-3 pb-2`}>
            <div className="absolute flex items-center justify-center top-5 left-6 w-8 sm:w-10 h-8 sm:h-10 bg-[#fff] rounded-[10px]" >
                <Image src={'/svgs/unitCard/preview.svg'} width={16.81} height={21.82} alt={"Preview"} className="w-[14px] sm:w-[16.81px] h-[18.2px] sm:h-[21.82px]" />
            </div>
            {cardImage && (
                // <Image
                //     src={`/imgs/categories/${cardImage.url}`}
                //     width={cardImage.width}
                //     height={cardImage.height}
                //     className="rounded-[20px] bg-cover"
                //     alt={cardImage.alt}
                //     loading="lazy"
                //     draggable={false}
                // />
                <img src={`/imgs/categories/${cardImage.url}`} alt="" style={{ height: cardImage.height }} className="w-full pb-[2px]" />
            )}
            <div className="flex flex-col flex-grow w-full px-5 space-y-0">
                {title && <Label {...title} />}
                {description && <Label {...description} />}
            </div>
            <div className="flex flex-row items-start justify-between flex-grow w-full px-5 space-x-4">
                {extraInfos?.map((info, index) => <div key={index} className="flex flex-row items-center justify-between w-full divide-x-2 divide-white divide-solid">
                    {info && <Label {...info} />}
                    {index < extraInfos.length - 1 && <div className="w-0 h-5" />}
                </div>
                )}
            </div>
        </Link >

    const horizontalCard = () =>
        <Link href={link ? link : ""} className={`${className} flex flex-row bg-primary-default rounded-[20px] gradient-border gradient-border-rounded-20px ${isSelected ? "gradient-green-border" : "gradient-default-border"}  relative p-3 mb-3`}>
            <div className="absolute flex items-center justify-center top-5 left-5 w-10 h-10 bg-[#fff] rounded-[10px]" >
                <Image src={'/svgs/unitCard/preview.svg'} width={16.81} height={21.82} alt={"Preview"} className="w-[14px] sm:w-[16.81px] h-[18.2px] sm:h-[21.82px]" />
            </div>
            {cardImage && (
                <Image
                    src={`/imgs/categories/${cardImage.url}`}
                    width={cardImage.width}
                    height={cardImage.height}
                    className="rounded-[20px]"
                    alt={cardImage.alt}
                />
            )}
            {children}
            222
            <div className="px-5 flex flex-col h-[155px] justify-between">
                <Label
                    {...title}
                />
                <Label
                    {...description}
                />
                {extraInfos?.map((info, index) =>
                    <Label
                        {...info}
                    />
                )}
                {/* <div className="flex flex-row justify-start w-full ">
                    <Button
                        suffix={<ArrowForwardIcon fontSize="medium" />}
                        className="flex-row justify-center items-center space-x-5 text-white bg-primary-light h-[36px] w-[124px]"
                    >
                        Explore
                    </Button>
                </div> */}
            </div>
        </Link >

    return direction === "horizontal" ? horizontalCard() : verticalCard()
}

export default WidthFullImageCard