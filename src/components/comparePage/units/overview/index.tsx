import Image from "next/image"
import UnitsOverviewProps from "./type"
import Link from "next/link"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TabBarWithHR from "@/components/common/tabBar/withHR"
import CompareCardCSS from "../UnitCardsCSS"
import Button from "@/components/common/button"

const UnitsOverview: React.FC<UnitsOverviewProps> = ({ ...props }) => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row items-center justify-start space-x-2">
                <ArrowBackIosNewIcon className="text-white text-24" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Overview</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>
            <TabBarWithHR
                tabs={[
                    { title: "On Oasix", value: `${props.apartmentCnt} hours` },
                    { title: "Views", value: `${props.views}` },
                    { title: "Saves", value: `${props.saves}` },
                ]}
            />
            <Link href={""} className="h-[58px] flex w-full">
                <Button
                    roundedSize="8"
                    prefix={<Image src={`/imgs/categories/units/${props.index}/overview/1.png`} alt="Developer" width={30} height={30} />}
                    suffix={<Image src={`/svgs/right arrow.svg`} alt="Project" width={24} height={24} className="absolute right-5" />}
                    className="justify-start items-center space-x-4 w-full bg-primary-dark px-5"
                >
                    <div className="text-left">
                        <p className="text-[#414141] text-[12px]"> Developer</p>
                        <h1 className="text-white text-[14px]"> {props.developer}</h1>
                    </div>
                </Button>
            </Link>
            <Link href={""} className="h-[58px] flex w-full">
                <Button
                    roundedSize="8"
                    prefix={<Image src={`/imgs/categories/units/${props.index}/overview/2.png`} alt="Developer" width={30} height={30} />}
                    suffix={<Image src={`/svgs/right arrow.svg`} alt="Project" width={24} height={24} className="absolute right-5" />}
                    className="justify-start items-center space-x-4 w-full bg-primary-dark px-5"
                >
                    <div className="text-left">
                        <h1 className="text-[#414141] text-[12px]"> Project</h1>
                        <h1 className="text-white text-[14px]"> {props.project}</h1>
                    </div>
                </Button>
            </Link>
            <div className="mx-5 px-3 h-[300px] overflow-hidden gradient-mask whitespace-normal break-words relative">
                <p className="absolute inset-0 text-white text-[14px] leading-7 break-all">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default UnitsOverview
