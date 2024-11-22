import ServiceSectionCard from "./ServiceSectionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ServiceSectionStyle.css";

const ServiceSectionContainer = `w-[100%] mb-3 md:mb-5`;
const ServiceSectionFlexContainer = `flex flex-col items-center justify-center py-3`;
const ServiceSectionTitleContainerMD = `hidden md:block font-semibold text-center text-5xl lg:text-6xl tracking-[-1px] bg-custom-linear text-transparent bg-clip-text font-sans py-8 my-3 md:my-5`;
const ServiceSectionTitleContainer = `md:hidden font-semibold text-center text-3xl tracking-[-1px] bg-custom-linear text-transparent bg-clip-text font-sans my-5 `;
const ServiceSectionCardsContainerMD = `hidden md:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 justify-center items-center overflow-auto scrollbar-hidden`;
const ServiceSectionCardsContainer = `md:hidden grid grid-cols-1 gap-4 justify-center items-center overflow-auto scrollbar-hidden`;
const ServiceSectionTitleMD = [
  "Ecosystem of evolutions of",
  "digital real estate services",
];
const ServiceSectionTitle = [
  "Ecosystem of",
  "evolutions of digital",
  "real estate services",
];

const getServiceSectionCardImages = (isMD: boolean) => {
  return [
    {
      imageUrl: "/imgs/service/oasix-lab.png",
      alt: "service-card-image-1",
      caption: "Lab",
      description: isMD
        ? ["Architectural visualization,", "teleportation,3D-cities,AR"]
        : ["Architecture, design,", "visualization, 3D", "cities"],
    },
    {
      imageUrl: "/imgs/service/repair.png",
      alt: "service-card-image-2",
      caption: "Construction",
      description: isMD
        ? ["Repair and construction", "digital service"]
        : ["Automatic repair and", "construction digital", "service"],
    },
    {
      imageUrl: "/imgs/service/realtor.png",
      alt: "service-card-image-3",
      caption: "Daria AI",
      description: isMD
        ? ["Your best realtor and", "more,more,more,more"]
        : ["Your super digital", "realtor and more"],
    },
    {
      imageUrl: "/imgs/service/oasix-logo.png",
      alt: "service-card-image-4",
      caption: "Oasixpedia",
      description: isMD
        ? ["The Encyclopedia of", "World Real Estate"]
        : ["Encyclopedia of Real", "Estate Trends and Beyond"],
    },
  ];
};
const ServiceSectionCardImages = () => getServiceSectionCardImages(false);
const ServiceSectionCardImagesMD = () => getServiceSectionCardImages(true);

const ServiceSection = () => {
  return (
    <div className={ServiceSectionContainer}>
      <div className={ServiceSectionFlexContainer}>
        <div className={ServiceSectionTitleContainerMD}>
          {ServiceSectionTitleMD.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
        <div className={ServiceSectionTitleContainer}>
          {ServiceSectionTitle.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
        <div className={ServiceSectionCardsContainerMD}>
          {ServiceSectionCardImagesMD().map((card, index) => (
            <ServiceSectionCard key={index} {...card} />
          ))}
        </div>
        <div className={ServiceSectionCardsContainer}>
          {ServiceSectionCardImages().map((card, index) => (
            <ServiceSectionCard key={index} {...card} />
          ))}
        </div>

        <a
          className="service-button w-full md:px-[42px] md:py-[24px] md:w-[330px] text-center justify-center items-center mt-11 md:height-[86px] bg-transparent text-[#00d69f] rounded-[64px] md:text-3xl font-medium transition-colors duration-300 ease-in-out border-2 border-[#00d69f] active:bg-custom-linear active:text-primary-default italic md:non-italic"
          href="/gallery"
        >
          <div className="marketplace-button">
            Go to marketplace
            
          <FontAwesomeIcon icon={faArrowRight} className="marketplace-icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceSection;
