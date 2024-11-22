// components/DevProUnitsCatBar.tsx
import React, { useState } from 'react';

const categories = [
   { label: 'Bedrooms', value: '1b' },
    { label: 'Bedrooms', value: '2b' },
    { label: 'Bedrooms', value: '3b' },
    { label: 'Bedrooms', value: '4b' },
    { label: 'Std', value: 'std' },
    { label: 'floor', value: 'Ph1' },
    { label: 'floor', value: 'Ph2' },
];

const DevProUnitsCatBar: React.FC<{ selectedCategories: string[], onSelect: (value: string) => void }> = ({ selectedCategories, onSelect }) => {
    const handleClick = (value: string) => {
        onSelect(value);
    };

    return (
        <div className="flex space-x-4">
            {categories.map((category) => (
                <div
                    key={category.value}
                    onClick={() => handleClick(category.value)}
                    className={`w-[80px] h-[65px] cursor-pointer transition duration-300 px-3 rounded-[20px] bg-[#181818] border relative
                        ${selectedCategories.includes(category.value) ? 'border-[#20d795] text-[#20d795]' : 'text-white gradient-border gradient-default-border gradient-border-rounded-20px border-transparent'} 
                        hover:border-[#20d795]`}
                >
                    <div className="flex flex-col">
                        <div className='text-[30.58px]'>{category.value}</div>
                        <div className='text-[9.17px]'>{category.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DevProUnitsCatBar;