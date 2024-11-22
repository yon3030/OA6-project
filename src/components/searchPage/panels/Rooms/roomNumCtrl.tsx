"use client"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@/components/common/button';

interface RoomInfoProps {
    title: string;
    description: string;
    count: number;
    increase: () => void;
    decrease: () => void;
}

const RoomNumCtrl: React.FC<RoomInfoProps> = ({ title, description, count, increase, decrease }) => {
    return (
        <div className="flex flex-row justify-between items-center w-[250px] lg-[250px]">
            <div className="pt-4">
                <p className="text-white text-[16px]">{title}</p>
                <p className="text-[#646464] text-[12px]">{description}</p>
            </div>
            <div className="flex flex-row justify-center space-x-4 items-center">
                <Button
                    prefix={<RemoveIcon className="text-black text-2xl m-[4px]" />}
                    border={{
                        color: "transparent",
                        width: 0
                    }}
                    handleClick={decrease}
                    className="h-[30px] w-[30px] bg-white items-center justify-center"
                >
                </Button>
                <h1 className="text-white text-[16px]">{count}</h1>
                <Button
                    prefix={<AddIcon className="text-black text-2xl m-[4px]" />}
                    border={{
                        color: "transparent",
                        width: 0
                    }}
                    handleClick={increase}
                    className="h-[30px] w-[30px] bg-white items-center justify-center"
                ></Button>
            </div>
        </div>
    );
};

export default RoomNumCtrl;
