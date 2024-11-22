import Image from "next/image"
import DevelopersAllProps from "./type"
import Link from "next/link"
import { addCommasToNumber } from "@/lib/numberMethod"
// import HorizontalBTNwithSVGwithIcon from "@/components/common/button/withSVGwithIcon/horizontal"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@/components/common/button";
import CompareCardCSS from "../../units/UnitCardsCSS";

const DevelopersAll: React.FC<DevelopersAllProps> = ({ ...props }) => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row items-center justify-start space-x-2">
                <ArrowBackIosNewIcon className="text-white text-24" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Ellington Properties</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-2">
                    <Button
                        roundedSize="full"
                        className="justify-center items-center p-4 h-[32px]"
                    >
                        <p className="text-[#EEEEEE] text-[12px]">
                            Explore Map
                        </p>
                    </Button>
                    <p className="text-white text-[12px]">
                        UAE, Dubai, Business Bay
                    </p>
                </div>
                <Image
                    src={`/imgs/categories/developers/${props.index}/all/1.png`}
                    width={79.41}
                    height={53.64}
                    alt="map"
                />
            </div>
            <Button
                roundedSize="8"
                prefix={<Image src={`/svgs/dollar.svg`} alt="Developer" width={24} height={24} />}
                className="flex-row space-x-3 justify-start items-center w-full h-[60px] bg-primary-default px-5 "
            >
                <div className="text-left">
                    <h1 className="text-white text-[18px]">from {addCommasToNumber(props.dolloar)}$</h1>
                    <p className="text-primary-medium text-[12px]"> Price segment</p>
                </div>
            </Button>
            <div className="flex flex-row space-x-3 ">
                {props.infos && props.infos.map((info, index) => <Button
                    roundedSize="8"
                    prefix={<Image src={`/svgs/${info.icon}.svg`} alt="ReadMark" width={24} height={24} />}
                    className="flex-col items-start justify-start w-full px-5 py-2 space-y-3 bg-primary-default"
                >
                    <div className="text-left">
                        <h1 className="text-white text-[18px]">{info.title}</h1>
                        <p className="text-primary-medium text-[12px]">{info.description}</p>
                    </div>
                </Button>)}
            </div>

            <div className="mx-5 px-3 h-[300px] overflow-hidden gradient-mask whitespace-normal break-words relative">
                <p className="absolute inset-0 text-white text-[14px] leading-7 break-all">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default DevelopersAll
