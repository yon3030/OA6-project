"use client"

import React from 'react';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onVolumeChange }) => {
  return (
    <div
      className="relative flex justify-center items-center z-10 w-full h-[4px] bg-gallery-progress rounded-full cursor-pointer"
      id="volume"
      onClick={onVolumeChange}
    >
      <div
        className="absolute left-0 h-full bg-white rounded-full"
        style={{ width: `${volume * 100}%` }}
      />
      <div
        className="absolute w-[10px] h-[10px] rounded-full bg-white"
        style={{ left: `${volume * 100}%` }}
      />
    </div>
  );
};

export default VolumeControl;
