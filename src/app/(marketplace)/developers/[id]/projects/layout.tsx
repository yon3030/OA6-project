"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { mockData } from "@/lib/mockData";
import ItemListPanel from "@/components/mainPage/itemListPanel/fullSidebar";
import Card from "@/components/common/card";
import MainPanel from "@/components/mainPage/mainPanel";
import TopPreview from "@/components/developersPage/preview";

const DevelopersProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const items = mockData["developers"]["cardInfo"];
  const [isExpanded, setExpanded] = useState(false);

  // Desktop
  const renderPCUI = () => (
    <div className="flex flex-row space-x-3">
      <ItemListPanel
        title="Projects"
        expandVisible={true}
        isExpanded={isExpanded}
        setExpanded={setExpanded}
        className="flex flex-col bg-primary-default gradient-border gradient-default-border relative gradient-border-rounded-30px rounded-[30px] transition-all duration-300"
      >
        {[...items, ...items].map((card, index) => (
          <Card
            key={index}
            link={`/developers/${index + 1}`}
            cardImage={{
              url: `developers/${index + 1}/projects/${card.imgUrl}`,
              alt: "project gallery",
              width: 266,
              height: 130
            }}
            // isSelected={params.id === index + 1}
            title={{ text: card.projects[0].title, size: 24, font: 'normal' }}
            description={{
              icon: {
                url: 'compare/location-white.svg',
                alt: 'Location Icon',
                width: 14,
                height: 14,
              },
              text: card.location || 'Location not specified',
              size: 14,
            }}
            extraInfos={
              card.projects[0].infos
                ? card.projects[0].infos.map((info) => ({
                  icon: {
                    url: info.icon,
                    alt: 'Info Icon',
                    width: 18,
                    height: 18,
                  },
                  text: `${info.value}`,
                  size: 14,
                }))
                : []
            }
            className="w-[286px] h-[270px]"
          />
        ))}
      </ItemListPanel>
      {
        !isExpanded &&
        <MainPanel>
          <TopPreview imgUrl={`/imgs/categories/projectsTopPreview.png`} title={`The Chrestmark`} />
          {children}
        </MainPanel>
      }
    </div>
  )
  return renderPCUI();
};

export default DevelopersProjectsLayout;