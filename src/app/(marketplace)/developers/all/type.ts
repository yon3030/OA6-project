interface CardInfo {
  imgUrl: string;
  title: string;
  location: string;
  projects: { title: string; infos?: { icon: string; value: string }[] }[];
}

export interface CardInfoProps {
  cardInfo: CardInfo[];
}

export interface CardProps extends CardInfoProps {
  cardWidth?: string;
  cardHeight?: string;
  imgWidth?: number;
  imgHeight?: number;
  fontSize?: number;
  desSize?: number;
  direction?: string;
}

export const defaultCardProps: CardProps = {
  cardInfo:[],
};
