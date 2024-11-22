import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/button';
import CloseIcon from '@mui/icons-material/Close';
import Projects from "./projects";
import { CardInfoProps } from './type';

const MobileScrollPanel: React.FC<CardInfoProps> = ({ cardInfo }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between pb-[10px]">
        <p className="text-white text-[28px] sm:text-[30px]">Projects</p>
        <div className="flex flex-row space-x-3">
          <Button
            handleClick={goBack}
            prefix={<CloseIcon />}
            border={{ color: "transparent", width: 0 }}
            className="h-[30px] w-[30px] bg-white items-center justify-center z-10"
          >
          </Button>
        </div>
      </div>

      <div className="w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-grey">
        <Projects cardInfo={cardInfo} imgWidth={147} imgHeight={155} cardWidth="w-full" cardHeight="h-[180px]" fontSize={14} desSize={12} direction="horizontal" />
      </div>
    </>
  );
};

export default MobileScrollPanel;
