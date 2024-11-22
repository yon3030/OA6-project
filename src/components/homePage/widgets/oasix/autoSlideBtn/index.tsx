"use client";
import { useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Import the arrow icon

const AutoScrollBtn = () => {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show button if scroll position is at the top, hide otherwise
            if (window.scrollY < window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToNextPage = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center ">
                    <button
                        onClick={scrollToNextPage}
                        className="pb-4 px-1 shadow-md transition text-center border-[2px] border-[#B4B4B4] rounded-full h-[34px] w-[24px]"
                    >
                        <ArrowDownwardIcon className='text-[#B4B4B4] animate-bounce w-full' sx={{ fontSize: 16}} />
                    </button>
                    <pre className="pt-3 text-[#B4B4B4] text-[12px] leading-[16px]] font-montserrat">{`Scroll down to learn`}</pre>
                </div>
            )}
        </>
    );
};

export default AutoScrollBtn;
