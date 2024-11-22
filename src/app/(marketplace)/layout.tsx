"use client";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/lib/context";
import PCNavBar from "@/layout/navbar/pc";
import Header from "@/layout/header";
import NavBar from "@/layout/navbar/mobile";
import SearchBar from "@/components/common/input/search/areaSearchInput";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/button";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isMobile } = useThemeContext();

  const renderMobileHeader = () => {
    if (pathname.indexOf("map") >= 0 && pathname.indexOf("list") >= 0)
      return (
        <div>
          <div className="flex mb-2">
            <p className="font-sans font-medium text-[28px] text-white">
              Units
            </p>
          </div>
          <SearchBar
            className="flex flex-row justify-center items-center rounded-[14px] px-4 py-2 mb-3 bg-primary-light text-white"
            placeHolderColor="#414141"
          />
        </div>
      );
    if (pathname.indexOf("units") >= 0)
      return (
        <div className="flex flex-row items-center justify-between mt-2 mb-2">
          <div>
            <Link href={`/gallery`}>
              <Button
                prefix={
                  <Image
                    src={"/svgs/back arrow.svg"}
                    width={20}
                    height={20}
                    alt="back arrow"
                  />
                }
                border={{
                  color: "transparent",
                  width: 0,
                }}
                className="flex flex-row items-center justify-center w-full space-x-3 bg-transparent"
              >
                <p className="text-white text-[14px]">Back to project</p>
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
      );
  };

  const renderPCUI = () => (
    <div className="flex justify-center ">
      <div className="space-y-6">
        <Header />
        <div className="flex flex-row space-x-5">
          <PCNavBar />
          <div className="w-[1166px] lg:w-[calc(100vw-180px)] h-full">{children}</div>
        </div>
      </div>
    </div>
  );

  const renderMobileUI = () => (
    <div className="relative h-screen space-y-2 overflow-hidden">
      <Header />
      <div className="relative flex flex-col justify-start px-4 h-mobile-compare-height">
        {renderMobileHeader()}
        <div className="w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-grey">
          {children}
        </div>
      </div>
      <NavBar />
    </div>
  );

  return isMobile ? renderMobileUI() : renderPCUI();
};

export default MainLayout;
