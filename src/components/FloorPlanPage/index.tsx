"use client"
import Image from "next/image";
import QuoteBox from "./QuoteBox";
import DropdownMenu from "./Dropdown";
import NumberInput from "./NumberInput";
import Link from "next/link";
import Button from "@/components/common/button";
import { useRouter } from "next/navigation";
const items = [
  { iconUrl: "/svgs/floorPlan/bed_icon.svg", value: 2, type: "bedroom" },
  { iconUrl: "/svgs/floorPlan/size_icon.svg", value: 50, type: "sqft" },
  {
    iconUrl: "/svgs/floorPlan/price_icon.svg",
    value: "$2,560,300",
  },
];

const FloorPlanPage = () => {
  const router = useRouter();
  return (
    <>
      {/* Desktop */}
      <div className="md:block hidden max-w-[calc(100vw-2rem)] md:max-w-screen md:w-full h-[calc(100vh-12rem)] md:h-[90vh] relative gradient-border gradient-default-border gradient-border-rounded-30px">
        <div className="w-full h-full flex justify-center items-center relative">
          <div className="w-[80%] h-[80%] flex justify-center items-center relative">
            <div className="absolute h-[80%] w-full">
              <Image
                src={"/imgs/floorPlan/FP_img_1.png"}
                alt="FP_img_1"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>

            <div className="absolute top-[30%]">
              <QuoteBox items={items} />
            </div>

            <div className="absolute top-[-10px] flex flex-col space-y-[5px]">
              <Image
                src={"/svgs/floorPlan/sunset_top.svg"}
                alt="sunset_top"
                width={100}
                height={100}
                className="w-[40] h-[43px]"
              />
            </div>
            <div className="absolute bottom-4">
              <Image
                src={"/svgs/floorPlan/sunset_bottom.svg"}
                alt="sunset_top"
                width={100}
                height={100}
                className="w-[40] h-[43px]"
              />
            </div>
            <div className="absolute bottom-[28%]">
              <Image
                src={"/svgs/floorPlan/search-zoom-in-icon.svg"}
                alt="search-zoom-in-icon"
                width={100}
                height={100}
                className="w-[58px] h-[60px]"
              />
            </div>
          </div>
          <div className="absolute left-[5%]">
            <Image
              src={"/svgs/floorPlan/flowing_icon_left.svg"}
              alt="flowing_icon_left"
              width={34}
              height={45}
              className="w-[34px] h-[45px]"
            />
          </div>
          <div className="absolute right-[6%]">
            <Image
              src={"/svgs/floorPlan/flowing_icon_right.svg"}
              alt="flowing_icon_right"
              width={34}
              height={45}
              className="w-[22px] h-[45px]"
            />
          </div>
          <div className="absolute left-10 top-10">
            <Image
              src={"/svgs/floorPlan/compass_icon.svg"}
              alt="compass_icon"
              width={60}
              height={60}
            />
          </div>
          <div className="absolute top-10 mx-auto">
            <span className="text-white text-[16px] font-montserrat font-normal">FLOOR PLAN</span>
          </div>
          <div className="absolute right-6 top-6 cursor-pointer rounded-full bg-white w-9 h-9 p-[9px]">
            <Image
              src={"/svgs/floorPlan/close_icon.svg"}
              alt="close_icon"
              width={18}
              height={18}
              onClick={() => router.back()}
            />
          </div>
          <div className="absolute left-[5%] bottom-[4%]">
            <NumberInput />
          </div>
          <div className="absolute right-[4%] bottom-[4%]">
            <DropdownMenu />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-[calc(100vw-40px)] h-[calc(100vh-12rem)] mx-auto relative">
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex flex-row items-center justify-between mt-2 mb-2">
            <div>
              <Link href={`/gallery`}>
                <Button
                  prefix={
                    <Image
                      src={"/svgs/floorPlan/vector_left.svg"}
                      width={20}
                      height={20}
                      alt="back arrow"
                      className="w-[24px] h-[24px]"
                    />
                  }
                  border={{
                    color: "transparent",
                    width: 0,
                  }}
                  className="flex flex-row items-center justify-center w-full space-x-3 bg-transparent"
                >
                  <p className="text-white text-[14px]">Project name</p>
                </Button>
              </Link>
            </div>
            <div className="flex flex-row space-x-3">
              <Button
                prefix={
                  <Image
                    src={"/svgs/share.svg"}
                    width={16}
                    height={16}
                    alt="share"
                  />
                }
                border={{
                  color: "default",
                  width: 1,
                }}
                className="h-[32px] w-[32px] bg-primary-light items-center justify-center"
              ></Button>
              <Button
                prefix={
                  <Image
                    src={"/svgs/archive-add.svg"}
                    width={16}
                    height={16}
                    alt="archive"
                  />
                }
                border={{
                  color: "default",
                  width: 1,
                }}
                className="h-[32px] w-[32px] bg-primary-light items-center justify-center"
              ></Button>
            </div>
          </div>
          {/* Border Container */}
          <div className="flex flex-col relative gradient-border gradient-default-border gradient-border-rounded-30px bg-primary-default px-3 py-4  h-[calc(100vh-15rem)] justify-between">
            {/* Dropdown + around part */}
            <div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-white text-[28px] font-sans font-medium">
                  FLOOR PLAN
                </span>
                <div className="cursor-pointer rounded-full bg-white w-6 h-6 p-[6px]">
                  <Image
                    src={"/svgs/floorPlan/close_icon.svg"}
                    width={18}
                    height={18}
                    alt="close_icon"
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </div>
              <div>
                <DropdownMenu />
              </div>
            </div>
            {/* Image Container */}
            <div className="w-[80%] h-[200px] mx-auto my-[30%] relative justify-center items-center">
              <div className="absolute -top-3 left-[calc(50%-14.5px)]">
                <Image
                  src={"/svgs/floorPlan/sunset_top.svg"}
                  width={40}
                  height={43}
                  alt="sunset_top"
                  className="w-[29px] h-[27px]"
                />
              </div>
              <div className="absolute -bottom-3 left-[calc(50%-14.5px)]">
                <Image
                  src={"/svgs/floorPlan/sunset_bottom.svg"}
                  width={40}
                  height={43}
                  alt="sunset_bottom"
                  className="w-[29px] h-[27px]"
                />
              </div>
              <div className="absolute left-[-9%] top-[45%]">
                <Image
                  src={"/svgs/floorPlan/flowing_icon_left.svg"}
                  width={34}
                  height={45}
                  alt="flowing_icon_left"
                  className="w-[23px] h-[30px]"
                />
              </div>
              <div className="absolute right-[-8%] top-[45%]">
                <Image
                  src={"/svgs/floorPlan/flowing_icon_right.svg"}
                  width={34}
                  height={45}
                  alt="flowing_icon_right"
                  className="w-[15px] h-[30px]"
                />
              </div>
              <Image
                src={"/imgs/floorPlan/FP_img_1.png"}
                alt="FP_img_1"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            {/* NumberInput + compass */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <NumberInput />
              </div>
              <div>
                <Image
                  src={"/svgs/floorPlan/compass_icon.svg"}
                  width={60}
                  height={60}
                  alt="compass_icon"
                  className="w-[35px] h-[35px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlanPage;
