import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from 'next/image';
import CompareCardCSS from '../UnitCardsCSS';

const UnitsModel = () => {
    return (
        <div className={`${CompareCardCSS}`}>
            <div className="flex flex-row items-center justify-start space-x-2">
                <ArrowBackIosNewIcon className="text-white text-24" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Map View</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">354 Apartment</h2>
                </div>
            </div>
            <Image src={`/imgs/categories/units/1/model/1.png`} height={150} width={311} alt="Chart" className="relative flex-grow w-full" />
            <div className='absolute bottom-[20%] left-0 right-0 w-full px-[17%] flex flex-row items-center justify-between'>
                <Image src={'/svgs/compare/model-left.svg'} width={19.86} height={14.47} alt='toLeft' className='cursor-pointer' />
                <Image src={'/svgs/compare/model-right.svg'} width={19.86} height={14.47} alt='toRight' className='cursor-pointer' />
            </div>
        </div>
    )
}

export default UnitsModel
