"use client"

import React from 'react';

interface ProgressBarProps {
  progress: number;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onClick }) => {
  return (
    <div
      className="relative flex justify-center items-center z-10 h-[4px] w-full bg-gallery-progress rounded-full cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
        style={{ width: `${progress}%` }}
      />
      <div
        id="progressDot"
        className="absolute w-[10px] h-[10px] rounded-full bg-white"
        style={{ left: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
