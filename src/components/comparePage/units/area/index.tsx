import Image from "next/image"
import UnitsAreaProps from "./type"
import Link from "next/link"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RowComponent from "./row";
import CompareAreaImgCard from "@/components/common/card/compareAreaImgCard";
import Button from "@/components/common/button"
import CompareCardCSS from "../UnitCardsCSS";

const rowItems = [
    { title: '15', description: 'Units', size: 1 },
    { title: '32', description: 'Floors', size: 1 },
    { title: '$1600', description: 'Avrg price / sqft', size: 2 },
];

const rowItems1 = [
    { title: '2020', description: 'Announce', size: 2 },
    { title: '2023', description: 'Complete', size: 2 },
];

const UnitsArea: React.FC<UnitsAreaProps> = ({ ...props }) => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row justify-start items-center space-x-2">
                <ArrowBackIosNewIcon className="text-24 text-white" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Area</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>
            
            <Link href={"./3d"} className="h-[51px] flex w-full">
                <Button
                    roundedSize="8"
                    prefix={<Image src={`/svgs/compare/location-green.svg`} alt="Green Location Icon" width={31.26} height={31} />}
                    className="justify-center items-center space-x-3 w-full bg-primary-dark"
                >
                    <h1 className="text-white text-[16px]"> MAP VIEW</h1>
                </Button>
            </Link>
            <CompareAreaImgCard
                imgUrl="categories/units/1/gallery/1.png"
                description="Area name"
                location="Area district"
            />
            <RowComponent items={rowItems} />
            <RowComponent items={rowItems1} />
        </div>
    )
}

export default UnitsArea
