import Image from "next/image"
import UnitsAllCardProps from "./type"
import Link from "next/link"
import { addCommasToNumber } from "@/lib/numberMethod"
import Button from "@/components/common/button"
import CompareCardCSS from "../UnitCardsCSS"

const UnitsAllCard: React.FC<UnitsAllCardProps> = ({ ...props }) => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div
                className="w-full h-[8rem] bg-cover bg-center rounded-[16px]"
                style={{ backgroundImage: `url(/imgs/categories/units/${props.index}/gallery/1.png)` }}
            >
                <button className="absolute right-[2rem] top-[2rem] ">
                    <Image src={"/svgs/compare/fullScreen.svg"} width={24} height={24} alt="fullScreen" className="" />
                </button>
            </div>
            <div>
                <h1 className="text-white text-[32px] font-sans mt-2"> {props.apartmentCnt} Apartment</h1>
                <div className="flex items-center space-x-2">
                    <Image src={"/svgs/compare/location-white.svg"} width={16} height={16} alt="location" />
                    <h2 className="text-white text-[12px]">{props.address}</h2>
                </div>
            </div>
            <div className="flex items-center space-x-2 gradient-border gradient-default-border bg-primary-default gradient-border-rounded-8px rounded-8px relative px-4 h-[40px]">
                <h1 className="text-white text-[16px] text-opacity-75">$ {addCommasToNumber(props.cost)}</h1>
                <h2 className="text-[#646464] text-[12px] ">$ {addCommasToNumber(props.cost)} / sqft</h2>
            </div>
            <Link href={"./map"} className="h-[51px] flex w-full">
                <Button
                    roundedSize="8"
                    prefix={<Image src={`/svgs/compare/location-green.svg`} alt="Green Location Icon" width={31.26} height={31} />}
                    className="items-center justify-center w-full space-x-3 bg-primary-dark"
                >
                    <h1 className="text-white text-[16px]">MAP VIEW</h1>
                </Button>
            </Link>
            <Link href={"./3d"} className="h-[51px] flex w-full">
                <Button
                    roundedSize="8"
                    prefix={<Image src={`/svgs/compare/3d.svg`} alt="3D Box Icon" width={31.26} height={31} />}
                    className="items-center justify-center w-full space-x-3 bg-primary-dark"
                >
                    <h1 className="text-white text-[16px]"> 3D MODEL</h1>
                </Button>
            </Link>
            <div className="flex flex-row space-x-2 ">
                {props.infos && props.infos.map((info, index) => <Button
                    key={index}
                    prefix={<Image src={info.svgUrl} alt={info.svgUrl} width={24} height={24} />}
                    roundedSize="8"
                    className="flex-col items-start justify-center w-full py-3 pl-3 space-y-4 "
                >
                    <h1 className="text-white text-[12px]"> {info.value} {info.suffix}</h1>
                </Button>)}
            </div>
        </div>
    )
}

export default UnitsAllCard