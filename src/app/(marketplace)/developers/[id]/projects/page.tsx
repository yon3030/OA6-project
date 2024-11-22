'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/button';
import DevProUnitsTabs from '@/components/developersPage/projects/DevProUnitsTabs';
import DevProUnitsPage from '@/components/developersPage/projects/DevProUnitsPage';

// interface DevProPageProps {
//   children: React.ReactNode; // Explicitly define the type for children
// }

interface Property {
  title: string;
  description: string;
}

const properties: Property[] = [
  { title: '15', description: 'Units' },
  { title: '32', description: 'Floors' },
  { title: '$1600', description: 'Avrg price / sqft' },
  { title: '2020', description: 'Announce' },
  { title: '2023', description: 'Complete' },
];

const description = "Welcome to this stunning property featuring a cozy fireplace, complemented by a soothing natural color  throughout. With its  layout and other flexible living spaces, this home offers endless possibilities for customization."


const DevProPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('features');
  const onClose = () => {
    setSelectedTab('features'); // Change selectedTab to "features"
};
  return (
    <>
      {selectedTab === 'features' ? (
        <div className="flex flex-col items-start w-full space-y-5 p-4">
          {/* First row */}
          <div className="flex flex-row items-center justify-between w-full space-x-3">
            {properties.map((item, index) => (
              <div className="flex flex-col justify-center items-start w-full h-[80px] pl-[14px] rounded-[20px] bg-primary-default" key={index}>
                <h1 className="text-white text-[30px]">
                  {item.title}
                </h1>
                <p className="text-primary-light text-[12px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className='w-full flex flex-row items-center justify-between space-y-2'>
            <div className='flex flex-row items-center justify-between space-x-2 w-[430px] text-[14px] text-white'>
              <span>{description}</span>
            </div>

            {/* Map View + 3D Model */}
            <div className="flex flex-row space-x-3 w-[300px] ">
              <Link
                className="flex-col space-y-3 justify-center items-center w-full h-[100px]"
                href={`/units/flplan`}
              >
                <Button
                  prefix={
                    <Image
                      src="/svgs/compare/floorplan.svg"
                      alt="fllorplan"
                      width={31.26}
                      height={31}
                    />
                  }
                  roundedSize="20"
                  className="flex-col space-y-3 justify-center items-center w-full h-[100px] bg-primary-dark"
                >
                  <h1 className="text-[16px] text-white">MAP VIEW</h1>
                </Button>
              </Link>
              <Link
                className="flex-col space-y-3 justify-center items-center w-full h-[100px]"
                href={`/units/3dtour`}
              >
                <Button
                  prefix={
                    <Image
                      src="/svgs/compare/3d.svg"
                      alt="3D"
                      width={31.26}
                      height={31}
                    />
                  }
                  roundedSize="20"
                  className="flex-col space-y-3 justify-center items-center w-full h-[100px] bg-primary-dark"
                >
                  <h1 className="text-[16px] text-white">3D MODEL</h1>
                </Button>
              </Link>
            </div>
          </div>
          {/* Third row */}
          <div className='w-full flex flex-row items-center justify-between space-y-2'>
            <div className='flex flex-row items-center justify-between space-x-2 w-[430px] text-[14px] text-white'>
              <div className="p-4">
                <h1 className="text-2xl font-bold">Project Name</h1>
                <DevProUnitsTabs selectedTab={selectedTab} onSelect={setSelectedTab} />

                {selectedTab === 'features' ? (
                  <div>
                    {/* Render Features Content */}
                    <h2>Features</h2>
                    <p>Conditioning</p>
                    <p>Fireplace</p>
                  </div>
                ) : (
                  <div>
                    {/* Render Units Content */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <DevProUnitsPage params={{ id: 1 }} onClose={() => setSelectedTab('features')} />
      )}
    </>
  );
}

export default DevProPage;