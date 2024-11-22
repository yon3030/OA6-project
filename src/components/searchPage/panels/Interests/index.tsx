"use Client"
import InterestsBadgeBtn from "@/components/common/badge"

interface InterestsPanelProps {
    activeInterests: string[];
    handleInterestClick: (interest: string) => void;
}

const InterestsPanel: React.FC<InterestsPanelProps> = ({ activeInterests, handleInterestClick }) => {
    return (
        <div className='px-5 pt-7 pb-5 w-[300px] lg:w-[290px]'>
            <p className='text-white text-[14px] mx-1 mb-3 z-20'>Choose your own lifestyle:</p>
            <div className='flex flex-wrap justify-center lg:justify-start'>
                {["Family oriented", "Pet owner", "Hermit", "City man", "Freak", "Traveler", "Parent"].map((interest) => (
                    <InterestsBadgeBtn
                        key={interest}
                        description={interest}
                        isActive={activeInterests.indexOf(interest) >= 0}
                        onClick={() => handleInterestClick(interest)}
                    />
                ))}
            </div>
        </div>
    )
}

export default InterestsPanel