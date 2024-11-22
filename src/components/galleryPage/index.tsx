"use client";

import React, { useState, useRef, useEffect } from 'react';
import CloseButton from './components/closeButton';
import NavigationButtons from './components/navigationButtons';
import MediaSlider from './components/mediaSlider';
import MediaControls from './components/mediaControls';

interface MediaItem {
    type: 'image' | 'video';
    src: string;
    title: string;
    description: string;
}

const mediaFiles: MediaItem[] = [
    { type: 'image', src: '/imgs/gallery/1.svg', title: 'Units', description: 'Description of Units' },
    { type: 'video', src: '/imgs/gallery/pc.mp4', title: 'Compose', description: 'Description of Compose' },
    { type: 'image', src: '/imgs/gallery/2.svg', title: 'Developers', description: 'Description of Developers' },
    { type: 'image', src: '/imgs/gallery/3.svg', title: 'Projects', description: 'Description of Projects' }
];

const MediaViewer: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [isSliding, setIsSliding] = useState<boolean>(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const totalItems = mediaFiles.length;

    // Add clones of the first and last items
    const extendedMediaFiles = [
        mediaFiles[totalItems - 1],     // Clone of the last item at the start
        ...mediaFiles,
        mediaFiles[0],                  // Clone of the first item at the end
    ];

    const nextMedia = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const previousMedia = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        const sliderElement = sliderRef.current;
        if (sliderElement) {
            if (isSliding) {
                const transitionEnd = () => {
                    setIsSliding(false);
                    if (currentIndex === 0) {
                        setCurrentIndex(totalItems);                      // Snap to the last real item
                        sliderElement.style.transition = 'none';
                        sliderElement.style.transform = `translateX(-${totalItems * 100}%)`;
                    } else if (currentIndex === totalItems + 1) {
                        setCurrentIndex(1);                               // Snap to the first real item
                        sliderElement.style.transition = 'none';
                        sliderElement.style.transform = `translateX(-100%)`;
                    }
                };

                sliderElement.style.transition = 'transform 0.5s ease-in-out';
                sliderElement.style.transform = `translateX(-${currentIndex * 100}%)`;

                sliderElement.addEventListener('transitionend', transitionEnd);

                return () => {
                    sliderElement.removeEventListener('transitionend', transitionEnd);
                };
            }
        }
    }, [currentIndex, isSliding, totalItems]);

    // Calculate percent as a percentage of total items (increments based on total items)
    const progressIncrement = 100 / totalItems;
    const realIndex = currentIndex === 0 ? totalItems : currentIndex === totalItems + 1 ? 1 : currentIndex;
    const percent = realIndex * progressIncrement;

    const currentMediaItem = extendedMediaFiles[currentIndex];

    return (
        <div className="relative w-full h-full overflow-hidden">
            <CloseButton />

            <NavigationButtons
                onPrevious={previousMedia}
                onNext={nextMedia}
            />

            <MediaSlider
                ref={sliderRef}
                mediaFiles={extendedMediaFiles}
            />

            {currentMediaItem.type === 'image' && (
                <MediaControls
                    title={currentMediaItem.title}
                    description={currentMediaItem.description}
                    percent={percent}
                />
            )}
        </div>
    );
};

//https://tour.theviewvr.com/?locationId=1443   

export default MediaViewer;
