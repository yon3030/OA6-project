import Image from "next/image"
import UnitsStatisticsProps from "./type"
import Link from "next/link"
import { addCommasToNumber } from "@/lib/numberMethod"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TabBarWithHR from "@/components/common/tabBar/withHR"
import SelectBox from "@/components/common/selectBox"
import StatisticChart1 from "@/components/common/chart/statistic/chart1"
import StatisticChart2 from "@/components/common/chart/statistic/chart2"

const UnitsStatistics: React.FC<UnitsStatisticsProps> = ({ ...props }) => {
    return (
        <div className="flex-grow  px-4 py-6 relative bg-primary-default gradient-border gradient-default-border gradient-border-rounded-16px rounded-[16px] overflow-hidden space-y-5 w-full  max-h-[670px]">
            <div className="flex flex-row justify-start items-center space-x-2">
                <ArrowBackIosNewIcon className="text-24 text-white" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Statistics</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>
            <SelectBox
                options={[{ value: "0", label: "Estimated market value" }, { value: "1", label: "Estimated market value0" }, { value: "2", label: "Estimated market value1" }]}
                value={{ value: "0", label: "Estimated market value" }}
                handleOptionClick={() => console.log(1)}
                type="full-white-md"
            />
            <StatisticChart1 />
            <StatisticChart2 />

        </div>
    )
}

export default UnitsStatistics
