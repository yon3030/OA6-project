import React from 'react';

interface TabProps {
   selectedTab: string;
   onSelect: (tab: string) => void;
}

const DevProUnitsTabs: React.FC<TabProps> = ({ selectedTab, onSelect }) => {
   return (
      <div className="flex justify-center mb-4">
         <div className='flex space-x-4 border-b-2 border-gray-300'>
            <div
               onClick={() => onSelect('features')}
               className={`cursor-pointer py-2 px-4 ${selectedTab === 'features' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
            >
               Features
            </div>
            <div
               onClick={() => onSelect('units')}
               className={`cursor-pointer py-2 px-4 ${selectedTab === 'units' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'}`}
            >
               Units
            </div>
         </div>
      </div>
   );
}

export default DevProUnitsTabs;