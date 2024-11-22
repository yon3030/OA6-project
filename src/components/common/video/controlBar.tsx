"use client"

import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ProgressBar from './progressBar';
import VolumeControl from './volumeControl';

const iconStyles = {
  width: {
    du: '20px',
    sm: '30px',
  },
  height: 'auto',
};

interface ControlBarProps {
  isPlaying: boolean;
  playVideo: () => void;
  pauseVideo: () => void;
  progress: number;
  onProgressBarClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  currentTime: number;
  formatTime: (timeInSeconds: number) => string;
  toggleMute: () => void;
  isMuted: boolean;
  volume: number;
  onVolumeChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  toggleFullScreen: () => void;
}

const ControlBar: React.FC<ControlBarProps> = ({
  isPlaying,
  playVideo,
  pauseVideo,
  progress,
  onProgressBarClick,
  currentTime,
  formatTime,
  toggleMute,
  isMuted,
  volume,
  onVolumeChange,
  toggleFullScreen
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between sm:p-2 bg-black bg-opacity-75 h-[66px] w-full gap-5 px-2 sm:px-5">
      <div className="flex flex-row items-center justify-start grow space-x-[15px]">
        <button onClick={isPlaying ? pauseVideo : playVideo} className="text-white">
          {isPlaying ? (
            <PauseIcon sx={iconStyles} />
          ) : (
            <PlayArrowIcon sx={iconStyles} />
          )}
        </button>
        <ProgressBar progress={progress} onClick={onProgressBarClick} />
        <div className="text-white text-[15px]" id="videoTime">
          -{formatTime(currentTime)}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-[120px] sm:w-[200px] space-x-[10px]">
        <button className="text-white" id="mute" onClick={toggleMute}>
          {isMuted ? (
            <VolumeOffIcon sx={iconStyles} />
          ) : (
            <VolumeUpIcon sx={iconStyles} />
          )}
        </button>

        <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />

        <button className="px-2 py-1 text-white" id="zoom" onClick={toggleFullScreen}>
          <CropFreeIcon sx={iconStyles} />
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
