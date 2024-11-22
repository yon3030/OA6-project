"use client";

import Image from "next/image";
import SearchBox from "./searchBox";
import AutoScrollBtn from "./autoSlideBtn";

import {
  SearchCaption,
  WidgetFlexContainer,
  SearchCaptionMD,
} from "./classNames";

const HeroSectionContainer = `mt-3 mx-3 md:my-[30px] md:mx-8 flex gradient-border gradient-default-border items-center justify-center overflow-hidden  relative gradient-border-rounded-30px rounded-[30px] bg-primary-default h-[90vh]`;

const OasixWidget = () => {
  return (
    <div className={HeroSectionContainer}>
      <div className={WidgetFlexContainer}>
        <Image
          src="/svgs/landing_right.svg"
          alt="landing image"
          width={915}
          height={621}
          className="absolute right-0 top-0 h-auto w-auto md:h-fit 2xl:w-[60vw]"
        />
        <Image
          src="/svgs/landing_left.svg"
          alt="landing image"
          width={821}
          height={821}
          className="absolute bottom-0 left-0 h-auto w-auto md:h-fit 2xl:w-[40vw]" 
        />
        <Image
          src="/imgs/oasix_logo.png"
          alt="oasix logo"
          width={192}
          height={72}
          className="h-[40.67px] w-[108.46px] md:h-[72px] md:w-[192px] 2xl:w-[230px] 2xl:h-[90px]"
        />
        <p className={SearchCaption}>
          Smart <br /> property search
        </p>
        <p className={SearchCaptionMD}>Smart property search</p>
        <SearchBox />
        <AutoScrollBtn />
      </div>
    </div>
  );
};

export default OasixWidget;
