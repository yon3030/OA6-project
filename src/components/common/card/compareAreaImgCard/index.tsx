import Image from "next/image";

interface CompareAreaImgCardProps {
    imgUrl: string;
    description: string;
    location: string;
}

const CompareAreaImgCard = ({ imgUrl, description, location }: CompareAreaImgCardProps) => {
    return (
        <div
            className="relative w-full h-[8rem] bg-cover bg-center rounded-[16px] flex flex-col space-y-0 items-start justify-center px-6"
            style={{ backgroundImage: `url(/imgs/${imgUrl})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#000] opacity-50 rounded-[16px]"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-white text-[32px]">{description}</h1>
                <div className="flex flex-row space-x-3 items-center">
                    <Image src={`/svgs/compare/location-white.svg`} width={24} height={24} alt="fullScreen" className="" />
                    <h1 className="text-white text-[12px]">{location}</h1>
                </div>
            </div>
        </div>



    );
}

export default CompareAreaImgCard;
