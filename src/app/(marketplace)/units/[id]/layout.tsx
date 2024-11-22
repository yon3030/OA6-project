"use client";

import { useThemeContext } from "@/lib/context";
import { usePathname } from "next/navigation";
import ItemListPanel from "@/components/mainPage/itemListPanel/halfSidebar";
import Card from "@/components/common/card";
import { mockData } from "@/lib/mockData";
import UnitsCategoryBar from "@/layout/unitsCategoryBar";
import MainPanel from "@/components/mainPage/mainPanel";
import ParallelImages from "@/components/common/parallelImages";
import SupportPanel from "@/components/mainPage/supportPanel";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/button";
import CloseIcon from "@mui/icons-material/Close";
interface UnitsItemLayoutProps {
  children: React.ReactNode;
  params: {
    id: number;
  };
}

const UnitsItemLayout = ({ children, params }: UnitsItemLayoutProps) => {
  const { isMobile } = useThemeContext();
  const pathname = usePathname();
  const isMapPage = pathname.includes("map");
  const isSpecificPath = pathname.split("/").length === 4;

  const renderPCUI = () => (
    <div className="flex flex-row space-x-3">
      {(isMapPage || !isSpecificPath) && (
        <ItemListPanel
          title="Units"
          expandVisible={true}
          className="flex flex-col bg-primary-default gradient-border gradient-default-border relative gradient-border-rounded-30px rounded-[30px] transition-all duration-300"
        >
          {mockData["units"]["cardInfo"].map((card, index) => (
            <Card
              key={index}
              link={`/units/${index + 1}`}
              cardImage={{
                url: `units/${index + 1}/gallery/${card.imgUrl}`,
                alt: "gallery",
                width: 255,
                height: 130,
              }}
              isSelected={params.id === index + 1}
              title={{ text: card.title, size: 24 }}
              description={{
                icon: {
                  url: "compare/location-white.svg",
                  alt: "Location Icon",
                  width: 14,
                  height: 14,
                },
                text: card.location,
              }}
              extraInfos={card.infos.map((info) => ({
                icon: {
                  url: info.icon,
                  alt: info.units,
                  width: 14,
                  height: 14,
                },
                text: `${info.value}${info.units}`,
              }))}
              className="w-[270px] h-[270px]"
            />
          ))}
        </ItemListPanel>
      )}
      <MainPanel>
        {!isMapPage && (
          <>
            <ParallelImages
              leftImgUrl={`/imgs/categories/units/${params.id}/gallery/1.png`}
              rightImgUrl={`/imgs/categories/units/${params.id}/gallery/5.jpg`}
              isMobile={false}
              className="mt-[30px] mx-[1px]"
            />
            <div className="px-7">
              {!isSpecificPath && (
                <div className="flex flex-row items-center justify-between">
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
                        <p className="text-white text-[14px]">
                          Back to project
                        </p>
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
              )}
              {isSpecificPath && (
                <div
                  className={`flex ${
                    isMobile
                      ? "flex-row items-center justify-between space-x-2"
                      : "flex-row justify-between items-center mt-4 space-x-6"
                  }`}
                >
                  <h1
                    className={`text-white ${
                      isMobile ? "text-[24px]" : "text-[35px]"
                    } font-sans uppercase`}
                  >
                    {pathname.split("/").pop()}
                  </h1>
                  <Link href={"./"}>
                    <Button
                      prefix={<CloseIcon />}
                      border={{
                        color: "transparent",
                        width: 0,
                      }}
                      className="h-[30px] w-[30px] bg-white items-center justify-center"
                    ></Button>
                  </Link>
                </div>
              )}
              <div className="overflow-auto h-[250px] scrollbar-thin scrollbar-grey">
                {children}
              </div>
              <UnitsCategoryBar curIndex={params.id} />
            </div>
          </>
        )}
        {isMapPage && children}
      </MainPanel>
      {!isMapPage && isSpecificPath && <SupportPanel />}
    </div>
  );

  const renderMobileUI = () => (
    <>
      <div className="flex flex-col space-y-3">
        <div
          className={`gradient-border gradient-default-border bg-primary-default relative gradient-border-rounded-30px rounded-[30px] overflow-autos ${
            isMapPage ? "mb-9" : "mb-0"
          } py-4 pb-0 space-y-4 `}
        >
          <ParallelImages
            leftImgUrl={`/imgs/categories/units/${params.id}/gallery/1.png`}
            rightImgUrl={`/imgs/categories/units/${params.id}/gallery/5.jpg`}
            isMobile={true}
            className="mt-3"
          />
          <div className="overflow-none scrollbar-thin scrollbar-grey px-3 space-y-2">
            {children}
            <UnitsCategoryBar curIndex={params.id} />
          </div>
        </div>
      </div>
    </>
  );

  return isMobile ? renderMobileUI() : renderPCUI();
};

export default UnitsItemLayout;
