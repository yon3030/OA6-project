// InterestsBadgeBtn.tsx

interface InterestsBadgeBtnProps {
    description: string;
    isActive: boolean;
    onClick: () => void;
}

const InterestsBadgeBtn: React.FC<InterestsBadgeBtnProps> = ({ description, isActive, onClick }) => {
    return (
        <button
            className={`text-[12px] rounded-full px-3 py-1 my-2 mx-1 z-10 ${isActive ? 'bg-[#20d795]' : 'bg-[#414141]'} text-white`}
            onClick={onClick}
        >
            {description}
        </button>
    );
};

export default InterestsBadgeBtn;
