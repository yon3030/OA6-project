"use client"

import React, { useRef, useState, useEffect } from 'react';
import ControlBar from './controlBar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedMetadata = () => {
        setDuration(videoElement.duration);
      };

      // Add event listener
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Check if metadata is already loaded
      if (videoElement.readyState >= 1) {
        handleLoadedMetadata();
      }

      return () => {
        // Clean up the event listener
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  const playVideo = () => {
    console.log('start')
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setCurrentTime(currentTime);
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('timeupdate', updateProgress);
      return () => {
        videoElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [duration]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const clickProgress = (clickPosition / progressBar.offsetWidth) * duration;
      videoRef.current.currentTime = clickProgress;
      setProgress((clickProgress / duration) * 100);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (videoRef.current) {
      const volumeBar = e.currentTarget;
      const clickPosition = e.clientX - volumeBar.getBoundingClientRect().left;
      const newVolume = clickPosition / volumeBar.offsetWidth;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // IntersectionObserver to pause video when it goes out of view
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && isPlaying) {
              pauseVideo();
            }
          });
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    }
  }, [isPlaying]);

  return (
    <>
      {!isPlaying && (
        <PlayArrowIcon
          sx={{ width: '64px', height: '64px' }}
          className="absolute z-20 text-white transform -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-dark left-1/2 top-1/2 focus:outline-none p-[18px] cursor-pointer"
          onClick={playVideo}
        />
      )}
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        onClick={togglePlayPause}
        muted={isMuted}
        playsInline
        loop
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ControlBar
        isPlaying={isPlaying}
        playVideo={playVideo}
        pauseVideo={pauseVideo}
        progress={progress}
        onProgressBarClick={handleProgressBarClick}
        currentTime={currentTime}
        formatTime={formatTime}
        toggleMute={toggleMute}
        isMuted={isMuted}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        toggleFullScreen={toggleFullScreen}
      />
    </>
  );
};

export default VideoPlayer;
