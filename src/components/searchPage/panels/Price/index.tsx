"use client"
import { addCommasToNumber } from "@/lib/numberMethod";
import { Slider } from "@mui/material";
import "./index.css";

interface PricePanelProps {
    limit: { min: number, max: number };
    priceRange: number[];
    handlePriceRangeChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
}

const PricePanel: React.FC<PricePanelProps> = ({ limit, handlePriceRangeChange, priceRange }) => {
    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value.replace(/,/g, ''));
        if (!isNaN(value)) {
            const changeEvent = new Event('change');
            const newValue = [value, priceRange[1]];
            const activeThumb = 0;
            handlePriceRangeChange(changeEvent, newValue, activeThumb);
        }
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value.replace(/,/g, ''));
        if (!isNaN(value)) {
            const changeEvent = new Event('change');
            const newValue = [priceRange[0], value];
            const activeThumb = 0;
            handlePriceRangeChange(changeEvent, newValue, activeThumb);
        }
    };

    return (
        <div className='mx-7 my-10 w-[270px] flex items-center justify-center flex-col'>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(x) => "$" + addCommasToNumber(x)}
                color='success'
                min={limit.min}
                max={limit.max}
                step={10000}
                className='w-[260px]'
                sx={{
                    color: '#20d795',
                    '& .MuiSlider-thumb': {
                        borderRadius: '50px',
                        borderWidth: "2.73px",
                        borderColor: 'white'
                    },
                    '& .MuiSlider-valueLabel ': {
                        backgroundColor: '#20d795',
                        borderRadius: '50px',
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#151515'
                    }
                }}
            />
            <div className='w-[260px] flex items-center justify-center flex-row space-x-2 mt-2'>
                <button className='bg-[#323230] p-2 relative gradient-border gradient-default-border rounded-[14px] w-[40px] h-[40px] text-white'>$</button>
                <input
                    type="text"
                    value={addCommasToNumber(priceRange[0])}
                    onChange={handleMinChange}
                    className='rounded-[14px] bg-[#414141] w-[108px] h-[34px] text-[14px] text-white flex items-center flex-row justify-center text-center z-10'
                />
                <div className='text-[#646464]'>-</div>
                <input
                    type="text"
                    value={addCommasToNumber(priceRange[1])}
                    onChange={handleMaxChange}
                    className='rounded-[14px] bg-[#414141] w-[108px] h-[34px] text-[14px] text-white flex items-center flex-row justify-center text-center z-10'
                />
            </div>
        </div>
    );
}

export default PricePanel;
