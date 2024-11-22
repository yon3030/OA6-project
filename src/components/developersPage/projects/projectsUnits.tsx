import React from 'react';
import Card from "@/components/common/card";
import { ProjectsUnitsCardProps } from './type';

const ProjectsUnits: React.FC<ProjectsUnitsCardProps> = ({
   projectsUnits,
   cardWidth,
   cardHeight,
   imgWidth,
   imgHeight,
   fontSize,
   desSize,
   direction,
}) => {
  // console.log(`Card ${cardInfo}`);
  return (
    <>
      {projectsUnits && projectsUnits.length > 0 && [...projectsUnits, ...projectsUnits].map((card, index) => (
        <div key={index} className="p-2">
          <Card
            direction={direction}
            // link={`/developers/${index + 1}/projects`}
            link={`/developers/${index + 1}/projects`}
            cardImage={{
              url: `developers/${index+1}/units/${card.imgUrl}`,
              alt: `project gallery`,
              width: imgWidth,
              height: imgHeight,
            }}
            isSelected={false}
            title={{ text: `${card.inventory.value} + ${card.inventory.unit}`, size: fontSize, font: 'normal' }}
            description={{
              icon: {
                url: `${card.floor.icon}`,
                alt: 'Floor icon',
                width: 14,
                height: 14,
              },
              text: `${card.floor.value} + ${card.floor.unit}` || 'Location not specified',
              size: desSize,
            }}
            extraInfos={
              card.details
                ? card.details.map((info) => ({
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
            className={`${cardWidth} ${cardHeight}`}
          />
        </div>
      ))}
    </>
  );
};

export default ProjectsUnits;
