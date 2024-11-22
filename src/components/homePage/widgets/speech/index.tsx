import Carousel from 'react-material-ui-carousel';
import { WidgetBorderContainer } from "../WidgetClassNames";
import React, { useState } from 'react';

const quoteArr = [
    "An oasis among real estate\naggregators for the sake of your\ninformed choice. ",
    "Your Confidential Key to the\nworld of global real estate.",
    "No registrations, advertising or\nrealtors in the usual sense.",
    "Sensory triggers that make it\npossible to find ideal home.",
    "New generations, meanings.\nNew technologies.",
    "Take your time. Breathe in. Feel.",
];

const SpeechSlideWidget = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [fadeIn, setFadeIn] = useState(true);
    const handleChange = (index: number | undefined) => {
        setFadeIn(false);

        if (index !== undefined) {
            setActiveIndex(index);
        }

        setTimeout(() => {
            setFadeIn(true);
        }, 500); // Delay for fade-in effect
    };

    return (
        <div className = {"mt-[91.5px] " + `${WidgetBorderContainer}`}>
            <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={false}
                interval={8000}
                indicatorIconButtonProps={{
                    style: {
                        marginLeft: "6px",
                        marginTop: "-120px",
                        color: "rgba(100, 100, 100, 1)",
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        marginLeft: "6px",
                        marginTop: "-120px",
                        color: "rgba(32, 150, 149, 1)",
                    }
                }}
                className='w-landingContentWidth bg-primary-default rounded-[30px] max-h-screen custom-carousel'
                onChange={handleChange} // Attach the handleChange event
            >
                {
                    quoteArr.map((item, i) => {
                        return (
                            <div className='z-10 flex flex-col items-center justify-center h-screen mx-4' key={i}>
                                <pre className={`hidden px-5 md:flex text-[34px] max-w-iPhone-head md:text-[60px] font-black tracking-[-2.26px] text-center bg-slogan-green-gradient text-transparent search-caption-text font-sans text-balance ${i === activeIndex ? (fadeIn ? 'animate-fadeIn' : 'opacity-0') : ''}`}>
                                    {item}
                                </pre>
                                <div className={`md:hidden w-full px-[19px] text-[34px] max-w-iPhone-head md:text-[60px] font-black tracking-[-2.26px] text-center bg-slogan-green-gradient text-transparent search-caption-text font-sans text-balance ${i === activeIndex ? (fadeIn ? 'animate-fadeIn' : 'opacity-0') : ''}`}>
                                    {item}
                                </div>
                                <p className='font-[400] text-[30.13px] md:text-[49.78px] text-[#e3e3e3] font-carousel'>oasix</p>
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default SpeechSlideWidget;