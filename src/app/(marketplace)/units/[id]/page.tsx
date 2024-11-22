"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/button";
import Label from "@/components/common/label";
import { mockData } from "@/lib/mockData";
import { addCommasToNumber } from "@/lib/numberMethod";
import { useThemeContext } from "@/lib/context";
import CompareCardCSS from "@/components/comparePage/units/UnitCardsCSS";
import { redirect, RedirectType } from "next/navigation";
import { useRouter } from "next/router";

// Define the data structure for itemData
interface Info {
  svgUrl: string;
  value: string;
  suffix: string;
}
// Define the props for the UnitsAllPage component
interface UnitsAllPageProps {
  params: {
    id: number;
  };
}

const UnitsAllPage = ({ params }: UnitsAllPageProps) => {
  console.log("params:", params);
  const [itemData, setItemData] = useState(
    mockData["units"]["all"][params.id - 1]
  );
  const { isMobile } = useThemeContext();

  const renderPCUI = () => (
    <>
      <div className="flex flex-row items-center justify-between space-y-2">
        <div>
          <h1 className="text-[24px] text-white">
            {itemData?.apartmentCnt} Apartment
          </h1>
          <Label
            icon={{
              url: "compare/location-white.svg",
              alt: "location icon",
              width: 18,
              height: 18,
            }}
            text={itemData?.address}
            size={12}
          />
        </div>
        <div className="flex flex-row space-x-3 w-[300px] ">
          <Button
            roundedSize="20"
            className="flex-col justify-center items-start w-full h-[99px] pl-8"
          >
            <h1 className="text-white text-[30px]">
              $ {addCommasToNumber(itemData?.cost)}
            </h1>
            <p className="text-primary-light text-[14px]">
              $ {addCommasToNumber(itemData?.cost / 100)} / sqft
            </p>
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between space-y-2">
        <div className="flex flex-row space-x-2 w-[400px]">
          {itemData.infos &&
            itemData.infos.map((info, index) => (
              <Button
                key={index}
                prefix={
                  <Image
                    src={info.svgUrl}
                    alt={info.svgUrl}
                    width={26.67}
                    height={26.67}
                  />
                }
                roundedSize="20"
                className="flex-col justify-between items-start space-y-4 w-full h-[100px] pl-3 py-3 "
              >
                <h1 className="text-white text-[12px]">
                  {" "}
                  {info.value} {info.suffix}
                </h1>
              </Button>
            ))}
        </div>
        <div className="flex flex-row space-x-3 w-[300px] ">
          <Link
            className="flex-col space-y-3 justify-center items-center w-full h-[100px]"
            href={`/units/flplan`}
          >
            <Button
              prefix={
                <Image
                  src="/svgs/compare/floorplan.svg"
                  alt="fllorplan"
                  width={31.26}
                  height={31}
                />
              }
              roundedSize="20"
              className="flex-col space-y-3 justify-center items-center w-full h-[100px] bg-primary-dark"
            >
              <h1 className="text-[16px] text-white">FLOOR PLAN</h1>
            </Button>
          </Link>
          <Link
            className="flex-col space-y-3 justify-center items-center w-full h-[100px]"
            href={`/units/3dtour`}
          >
            <Button
              prefix={
                <Image
                  src="/svgs/compare/3d.svg"
                  alt="3D"
                  width={31.26}
                  height={31}
                />
              }
              roundedSize="20"
              className="flex-col space-y-3 justify-center items-center w-full h-[100px] bg-primary-dark"
            >
              <h1 className="text-[16px] text-white">3D TOUR</h1>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );

  const renderMobileUI = () => (
    <>
      <div>
        <h1 className="text-white text-[32px] font-sans mt-2">
          {" "}
          {itemData?.apartmentCnt} Apartment
        </h1>
        <div className="flex items-center space-x-2">
          <Image
            src={"/svgs/compare/location-white.svg"}
            width={16}
            height={16}
            alt="location"
          />
          <h2 className="text-white text-[12px]">{itemData?.address}</h2>
        </div>
      </div>
      <div className="flex items-center space-x-2 gradient-border gradient-default-border bg-primary-default gradient-border-rounded-8px rounded-8px relative px-4 h-[40px]">
        <h1 className="text-white text-[16px] text-opacity-75">
          $ {addCommasToNumber(itemData.cost)}
        </h1>
        <h2 className="text-[#646464] text-[12px] ">
          $ {addCommasToNumber(itemData.cost / 100)} / sqft
        </h2>
      </div>
      <Link href={"./mobile/map"} className="h-[51px] flex w-full">
        <Button
          roundedSize="8"
          prefix={
            <Image
              src={`/svgs/compare/location-green.svg`}
              alt="Green Location Icon"
              width={31.26}
              height={31}
            />
          }
          className="justify-center items-center space-x-3 w-full bg-primary-dark"
        >
          <h1 className="text-white text-[16px]">MAP VIEW</h1>
        </Button>
      </Link>
      <Link href={"/units/3dtour"} className="h-[51px] flex w-full">
        <Button
          roundedSize="8"
          prefix={
            <Image
              src={`/svgs/compare/3d.svg`}
              alt="3D Box Icon"
              width={31.26}
              height={31}
            />
          }
          className="justify-center items-center space-x-3 w-full bg-primary-dark"
        >
          <h1 className="text-white text-[16px]"> 3D TOUR</h1>
        </Button>
      </Link>
      <div className="flex flex-row space-x-2 ">
        {itemData.infos &&
          itemData.infos.map((info, index) => (
            <Button
              key={index}
              prefix={
                <Image
                  src={info.svgUrl}
                  alt={info.svgUrl}
                  width={24}
                  height={24}
                />
              }
              roundedSize="8"
              className="flex-col justify-center items-start space-y-4 w-full pl-3 py-3 "
            >
              <h1 className="text-white text-[12px]">
                {" "}
                {info.value} {info.suffix}
              </h1>
            </Button>
          ))}
      </div>
    </>
  );

  return isMobile ? renderMobileUI() : renderPCUI();
};

export default UnitsAllPage;
