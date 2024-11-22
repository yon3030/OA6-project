"use client"
import { useRef, useState, useEffect, MutableRefObject, useLayoutEffect } from 'react';
import PCTimeLine from './PCTimeLine';

import { WidgetVideoContainer, VideoElement } from './classNames';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [videoSrc, setVideoSrc] = useState<string>("");
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isPlayAvailable, setIsPlayAvailable] = useState<boolean>(false);

    useEffect(() => {
        const updateVideoSource = () => {
            const isMobile = window.innerWidth <= 800;
            setIsMobileView(isMobile);
            const newVideoSrc = isMobile ? '/videos/mobile.mp4' : '/videos/pc.mp4';
            setVideoSrc(newVideoSrc);
            if (videoRef.current) {
                videoRef.current.load();
            }
        };

        updateVideoSource();

        window.addEventListener('resize', updateVideoSource);

        return () => {
            window.removeEventListener('resize', updateVideoSource);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleScroll = () => {
            if (!videoRef.current) return;
            const videoRect = videoRef.current.getBoundingClientRect();
            var isVisible = true
            if (videoRect.top > 0)
                isVisible = videoRect.top >= videoRect.height * 0.3
            else
                isVisible = Math.abs(videoRect.top) >= videoRect.height * 0.6;
            setIsPlayAvailable(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [videoSrc]);

    useLayoutEffect(() => {
        if (videoRef.current)
            if (!isPlayAvailable)
                videoRef.current.play()
            else
                videoRef.current.pause()
    }, [isPlayAvailable])

    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (!video) return;

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     video.play();
    //                 } else {
    //                     video.pause();
    //                 }
    //             });
    //         },
    //         {
    //             threshold: 0.7
    //         }
    //     );

    //     observer.observe(video);

    //     return () => {
    //         observer.unobserve(video);
    //     };
    // }, [videoSrc]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const updateTime = () => setCurrentTime(video.currentTime);
            video.addEventListener('timeupdate', updateTime);
            return () => {
                video.removeEventListener('timeupdate', updateTime);
            };
        }
    }, [videoSrc]);

    return (
        <div className={WidgetVideoContainer}>
            {videoSrc && (<video
                ref={videoRef}
                className={VideoElement}
                muted
                playsInline
                loop
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>)}
            <PCTimeLine currentTime={currentTime} duration={26.823264} />
        </div>
    );
};

export default VideoPlayer;