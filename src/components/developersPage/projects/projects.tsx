import React from 'react';
import Card from "@/components/common/card";
import { CardProps, defaultCardProps } from './type';

const Projects: React.FC<CardProps> = ({
  cardInfo,
  imgWidth,
  imgHeight,
  cardWidth,
  cardHeight,
  fontSize,
  desSize,
  direction
}) => {
  // console.log(`Card ${cardInfo}`);
  return (
    <>
      {cardInfo && cardInfo.length > 0 && [...cardInfo, ...cardInfo].map((card, index) => (
        <div key={index} className="p-2">
          <Card
            direction={direction}
            // link={`/developers/${index + 1}/projects`}
            link={`/developers/${index + 1}/projects`}
            cardImage={{
              url: `developers/1/projects/${card.imgUrl}`,
              alt: `${card.title} project gallery`,
              width: imgWidth,
              height: imgHeight,
            }}
            isSelected={false}
            title={{ text: card.projects[0].title, size: fontSize, font: 'normal' }}
            description={{
              icon: {
                url: 'compare/location-white.svg',
                alt: 'Location Icon',
                width: 14,
                height: 14,
              },
              text: card.location || 'Location not specified',
              size: desSize,
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
            className={`${cardWidth} ${cardHeight}`}
          />
        </div>
      ))}
    </>
  );
};

export default Projects;
