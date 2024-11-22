import Image from "next/image"

export default function ExpandBtn({ isExpanded, setExpanded }: any) {

    const handleClick = () => {
        setExpanded(!isExpanded)
    }

    return (
        <button onClick={handleClick} className="w-[25px] h-[75px] rounded-r-[10px] justify-center bg-[#8080804D] relative gradient-border gradient-border-rounded-10px gradient-default-border-rightside   " >
            <div className="flex justify-center flex-grow">
                {isExpanded ? (
                    <Image src={'/svgs/unitCard/arrowLeft.svg'} alt="left" width={6} height={12} />
                )
                    : (
                        <Image src={'/svgs/unitCard/arrowRight.svg'} alt="right" width={6} height={12} />
                    )}
            </div>
        </button>
    )
}

