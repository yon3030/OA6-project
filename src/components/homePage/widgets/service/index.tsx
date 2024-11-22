import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./serviceWidget.css"; // Add CSS styling as necessary

const ServiceWidget = () => {
  return (
    <div className="mt-[87px] w-full h-fit rounded-xl bg-gradient-to-b from-white to-black sm:bg-none">
      <div className="service-widget w-full h-full overflow-clip rounded-xl bg-[#1B1B1B] sm:h-fit sm:border-none sm:bg-[#151515]">
        <h1 className="mx-5 inline-block bg-gradient-to-r from-[#20D795] to-[#114F6A] bg-clip-text text-2xl max-w-[821px] h-[130px] text-transparent sm:text-4xl md:text-6xl">
          Ecosystem of evolutions of digital real estate services
        </h1>
        <div className="flex gap-[38.67px] w-full justify-center md:flex-wrap xl:w-full md:w-full sm:flex-wrap du:w-full du:flex-wrap xs:flex-wrap">
          <div className=" gradient-border gradient-default-border w-[22vw] border-2 border-transparent  gradient-border-rounded-30px hero-border service-item relative rounded-[30px]  transition-shadow duration-300 hover:border-[#20D795] hover:border-2 active:shadow-[0_0_6px_6px_#20D795] xl:w-[22vw] md:w-[203px] lg:w-[203px] sm:w-[203px] du:w-[203px]">
            <img src={`/imgs/service/oasix-lab.png`} alt="Oasix Lab" />
            <h3 className="text-[#00d69f] italic">Lab</h3>
            <p className="font-montserrat font-light text-[20px] text-white lg:text-[10px] sm:text-[10px]">
              Architectural visualization, teleportation, 3D-cities, AR
            </p>
          </div>
          <div className="gradient-border gradient-default-border border-2 w-[22vw] border-transparent gradient-border-rounded-30px hero-border service-item relative rounded-[30px] transition-shadow duration-300 hover:border-[#20D795] hover:border-2 active:shadow-[0_0_6px_6px_#20D795] xl:w-[22vw] md:w-[203px] lg:w-[203px] sm:w-[203px] du:w-[203px]">
            <img src={`/imgs/service/repair.png`} alt="Automatic repair" />
            <h3 className="text-[#00d69f] italic">Construction</h3>
            <p className="font-montserrat text-white text-[20px] xl:text-[20px] md:text-[10px] lg:text-[10px] sm:text-[10px]">
              Repair and construction digital service
            </p>
          </div>
          <div className="gradient-border gradient-default-border border-2 w-[22vw] border-transparent gradient-border-rounded-30px hero-border service-item relative rounded-[30px] transition-shadow duration-300 hover:border-[#20D795] hover:border-2 active:shadow-[0_0_6px_6px_#20D795] xl:w-[22vw] md:w-[203px] lg:w-[203px] sm:w-[203px] du:w-[203px]">
            <img src={`/imgs/service/realtor.png`} alt="Digital realtor" />
            <h3 className="text-[#00d69f] italic">Daria AI</h3>
            <p className="font-montserrat text-white text-[20px] lg:text-[10px] sm:text-[10px]">
              Your best realtor and more, more, more, more
            </p>
          </div>
          <div className="  gradient-border gradient-default-border border-2 w-[22vw] border-transparent gradient-border-rounded-30px hero-border service-item relative rounded-[30px] transition-shadow duration-300 hover:border-[#20D795] hover:border-2 active:shadow-[0_0_6px_6px_#20D795] xl:w-[22vw] md:w-[203px] lg:w-[203px] sm:w-[203px] du:w-[203px]">
            <img src={`/imgs/service/oasix-logo.png`} alt="Oasix" />
            <h3 className="text-[#00d69f] italic">Oasixpedia</h3>
            <p className="font-montserrat text-white font-thin text-[20px] lg:text-[10px] sm:text-[10px]">
              Encyclopedia of Real Estate Trends and Beyond
            </p>
          </div>
        </div>
        <a
          className="service-button px-[42px] py-[24px] w-[330px] text-center justify-center"
          href="/gallery"
        >
          Go to marketplace
          <FontAwesomeIcon icon={faArrowRight} className="marketplace-icon" />
        </a>
      </div>
    </div>
  );
};

export default ServiceWidget;
