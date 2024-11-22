"use client"

interface RowComponentProps {
    items: {
        title: string;
        description: string;
        size: number
    }[];
}

const RowComponent: React.FC<RowComponentProps> = ({ items }) => {
    return (
        <div className="flex flex-row space-x-4" >
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col space-y-0 px-4 py-6 relative gradient-border gradient-default-border rounded-[16px] gradient-border-rounded-16px ${item.size === 2 ? 'w-[50%]' : 'w-[25%]'
                            }`}
                    >
                        <div className="flex flex-col" >
                            <span className="text-white text-[24px] leading-none" > {item.title} </span>
                            < span className="text-[#646464] text-[12px]"> {item.description} </span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default RowComponent;