"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/button';
import CloseIcon from '@mui/icons-material/Close';
import Projects from "./projects";
import { CardInfoProps } from './type';

const PCScrollPanel: React.FC<CardInfoProps> = ({ cardInfo }) => {
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

      <div className="w-full h-[500px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-green p-3">
        <div className="grid grid-cols-3 gap-3">
          <Projects cardInfo={cardInfo} imgWidth={225} imgHeight={130} cardWidth="w-[242px]" cardHeight="h-[270px]" fontSize={24} desSize={14} />
        </div>
      </div>
    </>
  );
};

export default PCScrollPanel;
