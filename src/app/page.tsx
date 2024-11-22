"use client";
import AccountModal from "@/components/Account/AccountModal";
import OasixWidget from "@/components/homePage/widgets/oasix";
import VideoWidget from "@/components/homePage/widgets/video";
import SpeechSlideWidget from "@/components/homePage/widgets/speech";
import ServiceWidget from "@/components/homePage/widgets/service";
import ServiceSection from "@/components/homePage/widgets/ServiceSection";
import MarketPlaceWidget from "@/components/homePage/widgets/marketplace";
import MapWidget from "@/components/homePage/widgets/map";
import Footer from "@/layout/footer";
export default function HomePage() {
  return (
    <>
      <div className="p-2 md:p-5">
        <OasixWidget />
        <VideoWidget />
         {/* New Service Section */}
         {/* <ServiceWidget /> */}
        <ServiceSection />
        <SpeechSlideWidget />

        <MarketPlaceWidget />
        <MapWidget /> {/* New Service Section */}
        <Footer />
      </div>
      <AccountModal isAvailable={false} />
    </>
  );
}
