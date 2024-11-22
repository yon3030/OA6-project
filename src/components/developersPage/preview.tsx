"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Label from "@/components/common/label";
interface TopPreviewProps {
  imgUrl?: string;
  title?: string;
};

const Preview:React.FC<TopPreviewProps> = ({imgUrl, title}) => {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-row items-center">
      <div className="absolute flex flex-row items-center left-[8px] md:left-[34px]">
        <div className="flex items-center justify-center md:w-20 md:h-20 w-[42px] h-[42px] bg-[#fff] rounded-[10.5px] md:rounded-[20px]" >
          <Image src={'/svgs/unitCard/preview.svg'} width={80} height={80} alt={"Preview"} className="w-[17.85px] h-[22.58px] md:w-[34px] md:h-[43px]" />
        </div>
        <span className="text-[24px] leading-[28.8px] md:text-[40px] md:leading-[70px] text-white tracking-[1px] font-sans pl-4 md:pl-5">{title? title : "Ellington Properties"}</span>
      </div>
      <Image
        src={imgUrl ? imgUrl : `/imgs/categories/developers/1/properties/1.png`}
        width={165} height={74}
        alt="Ellington Properties"
        className={`w-full md:h-[162px] ${pathname.indexOf("mobile") > 0 && pathname.indexOf("all") > 0 ? "h-[92px] rounded-[16px]" : "h-[74px]"}`}
      />
    </div>
  )
};

export default Preview;
