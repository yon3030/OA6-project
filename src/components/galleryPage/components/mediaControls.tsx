"use client";

import React from 'react';

interface MediaControlsProps {
  title: string;
  description: string;
  percent: number;
}

const MediaControls: React.FC<MediaControlsProps> = ({ title, description, percent }) => {
  return (
    <div className="absolute bottom-0 flex flex-col items-center justify-center w-full p-4 text-center text-white">
      <div className="mb-[12.11px] font-bold text-[15.14px] leading-[18.17px]">{title}</div>
      <div className="mb-[6.06px] md:mb-[18.11px] text-[12.11px] leading-[16.96px]">{description}</div>
      <div className="relative w-1/4 sm:w-1/12 mt-3 bg-primary-medium rounded-full h-[6.06px]">
        <div
          className="h-full bg-white rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MediaControls;
