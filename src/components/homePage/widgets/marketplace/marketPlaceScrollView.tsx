"use client";
import { Shss, ShssWrapper, ShssSlide } from "smooth-horizontal-scroll-slider";
import Image from "next/image";
import { MarketPlaceScrollViewProps } from "./types";

const MarketPlaceScrollView: React.FC<MarketPlaceScrollViewProps> = ({
    mockData,
}) => {
    return (
        <>
            <div className="hidden md:block">
                <Shss speed={1}>
                    <section className="mx-5 md:mx-8">
                        <h1 className="text-white text-[22px] mb-[16px] md:text-[42px] font-sans max-w-iPhone-head mt-[5vh]">
                            Explore the functions of the marketplace
                        </h1>
                    </section>
                    <ShssWrapper>
                        {mockData.map((item, index) => (
                            <ShssSlide key={index}>
                                <div
                                    className={` w-shss-item md:w-[646px] 2xl:w-[47vw] h-mobile-iPhone-height md:h-[80vh] md:min-h-[612px]
                        mt-[3rem] md:mt-[0px] md:py-3 px-2 md:p-8
                        gradient-border gradient-default-border gradient-border-rounded-30px relative
                            flex flex-row hero-border rounded-[30px]  bg-primary-default  text-opacity-40 mx-4 ${index === mockData.length - 1
                                            ? "mr-6 md:mr-16"
                                            : ""
                                        } ${index === 0 ? "ml-5 md:ml-8" : ""}`}
                                >
                                    <Image
                                        className="mb-0 w-[161.59px] h-[319.88px] md:w-[288px] md:h-[576px] self-center"
                                        src={`/imgs/landing/marketplace/${item.imgUrl}`}
                                        alt="iPhone Screenshot"
                                        width={288}
                                        height={576}
                                    />
                                    <div className="flex flex-col justify-center ml-6 rounded-lg">
                                        <h2 className="text-secondary-default italic text-[14px] md:text-[25.66px] font-bold mb-2">
                                            {item.title}
                                        </h2>
                                        <p className="text-white font-montserrat  font-thin text-[11px] leading-8 md:text-[24px] md:font-thin mb-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </ShssSlide>
                        ))}
                    </ShssWrapper>
                </Shss>
            </div>
            {/* Mobile View */}
            <div className="md:hidden">
                <Shss speed={1}>
                    <section className="mx-5 md:mx-8">
                        <h1 className="text-white text-[22px] font-sans max-w-iPhone-head mt-4 mb-8">
                            Explore the functions of the marketplace
                        </h1>
                    </section>
                    <ShssWrapper>
                        {mockData.map((item, index) => (
                            <ShssSlide key={index}>
                                <div
                                    className={` w-shss-item h-[calc(100vh-140px)] px-2 md:p-8
                        gradient-border gradient-default-border gradient-border-rounded-30px relative
                            flex flex-col justify-between  rounded-[30px]  bg-primary-default  text-opacity-40 mx-4 ${index === mockData.length - 1
                                            ? "mr-6 md:mr-16"
                                            : ""
                                        } ${index === 0 ? "ml-5 md:ml-8" : ""}`}
                                >
                                    <div className="flex flex-col justify-between ml-6 rounded-lg mt-[30px]">
                                        <div className="">
                                            <h2 className="text-secondary-default italic text-[22px] font-bold mb-2">
                                                {item.title}
                                            </h2>
                                            <p className="text-white font-montserrat  font-thin text-[16px] leading-8 md:text-[24px] md:font-thin mb-4">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>
                                    <Image
                                        className="w-[269.33px] [533.16px] self-center mb-[5%]"
                                        src={`/imgs/landing/marketplace/${item.imgUrl}`}
                                        alt="iPhone Screenshot"
                                        width={269.33}
                                        height={533.16}
                                    />
                                </div>
                            </ShssSlide>
                        ))}
                    </ShssWrapper>
                </Shss>
            </div>
        </>
    );
};

export default MarketPlaceScrollView;
