import MarketPlaceScrollView from './marketPlaceScrollView';
import { SlideItem } from './types';

const mockData: SlideItem[] = [
    {
        imgUrl: "1.svg",
        title: "Meet DARIA",
        description: "Receive instant and concise responses"
    },
    {
        imgUrl: "2.svg",
        title: "Save. Compare",
        description: "Keep favorite ads from getting lost"
    },
    {
        imgUrl: "3.svg",
        title: "Track construction progress in real time ",
        description: "Delivery history, customer reviews, architect feedback"
    },
    {
        imgUrl: "4.svg",
        title: "All about infrastructure",
        description: "Thoroughly research the neighborhood"
    },
    {
        imgUrl: "5.svg",
        title: "Your home in the palm of your hand",
        description: "Speak directly with builder without intermediaries"
    },
    {
        imgUrl: "6.svg",
        title: "All about infrastructure",
        description: "Try AR technologies to enhance the experience"
    },
];

const MarketPlaceWidget = () => {
    return (
        <>
            <MarketPlaceScrollView mockData={mockData} />
        </>
    )
}

export default MarketPlaceWidget