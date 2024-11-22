import React from "react";
import "./mapWidget.css"; // Add CSS styling as necessary

const MapWidget = () => {
  return (
    <div className="map-widget mx-5md:mx-8">
      <h1 className=" max-w-iPhone-head font-sans mb-[16px] mt-[30.31px] text-[22px] text-white md:text-[42px]">
        Real Estate Without Borders. Global Local Way
      </h1>
      <div className=" gradient-border gradient-default-border gradient-border-rounded-30px hero-border relative  items-center rounded-[30px]">
        {" "}
        {/* Adjusted padding */}
        <div className="flex flex-col world-map-container overflow-auto rounded-[30px]">
          <div className="map-text-container inline-flex items-center">
            {" "}
            {/* Inline-flex to align "Find yours" on one line */}
            <h3 className="txt-find text-white">Find</h3>
            <h4 className="txt-yours text-white">yours</h4>
          </div>
          <img
            src={`/imgs/service/map.png`}
            alt="World Map"
            className="world-map max-w-none"
          />
          <div className="relative bottom-[47px] mt-[100px] flex w-fit justify-between gap-3 rounded-full bg-[#8080804D] px-2 py-1 sm:px-4 sm:py-2 gradient-border gradient-default-border gradient-border-20px">
            <p className="text-white text-[13px] md:text-[15px] ">
              AVAILABILITY:
            </p>
            <p className="text-white text-[13px] md:text-[15px]">Q1 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapWidget;
