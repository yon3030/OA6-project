import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from 'next/image';
import CompareCardCSS from '../UnitCardsCSS';
import Button from '@/components/common/button';
const UnitsMap = () => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row items-center justify-start space-x-2">
                <ArrowBackIosNewIcon className="text-white text-24" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Map View</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">354 Apartment</h2>
                </div>
            </div>
            <Image src={`/imgs/categories/units/1/map/1.png`} height={150} width={311} alt="Chart" className="flex-grow w-full" />
            <div className='absolute left-0 right-0 w-full px-12 bottom-10'>
                <Button
                    prefix={<Image src={"/svgs/compare/location-white.svg"} width={20.82} height={20.82} alt="locationIcon" />}
                    suffix={
                        <div className="bg-[#fff] w-[38.17px] h-[38.17px] rounded-full flex flex-col items-center justify-center">
                            <p className="text-[#3778BF] text-[13.88px] leading-[14px]">10</p>
                            <p className="text-[#3778BF] text-[8.67px] leading-[10px]">min</p>
                        </div>
                    }
                    className='justify-between items-center w-full h-[50.31px] flex-grow glass-stroke-lg pl-4 pr-2  '
                >
                    <p className="text-white capitalize text-[10.41px]">ELEMENTARY SCHOOL</p>
                </Button>
            </div>
        </div>

    )
}

export default UnitsMap
