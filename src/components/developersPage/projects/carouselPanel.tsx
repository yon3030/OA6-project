import React, { useRef } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import Button from "@/components/common/button";
import Projects from "@/components/developersPage/projects/projects";
import { CardInfoProps } from './type';

const CarouselPanel: React.FC<CardInfoProps> = ({ cardInfo }) => {
  const pathname = usePathname();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const handleWheel = (e: WheelEvent) => {
    const container = scrollContainerRef.current;
    if (container) {
      e.preventDefault();
      const fixedScrollSpeed = 15; // Fixed scroll speed for consistent motion
      velocityRef.current = Math.sign(e.deltaY) * fixedScrollSpeed;

      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(inertiaScroll);
      }
    }
  };

  const inertiaScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += velocityRef.current;
      velocityRef.current *= 0.95; // Decay the velocity for smooth stopping

      if (Math.abs(velocityRef.current) > 0.5) {
        rafIdRef.current = requestAnimationFrame(inertiaScroll);
      } else {
        cancelAnimationFrame(rafIdRef.current!);
        rafIdRef.current = null;
        velocityRef.current = 0;
      }
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        container.removeEventListener('wheel', handleWheel);
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="flex flex-row items-center justify-between pb-[14px]">
        <p className="text-white text-[28px] sm:text-[30px]">Projects</p>
        <div className="flex flex-row space-x-3">
          <Link href={pathname.indexOf('mobile') > 0 ? `./all` : `${pathname}/all`}>
            <Button
              border={{ color: "default", width: 1 }}
              className="items-center justify-center bg-primary-default"
            >
              <span className="text-white text-[14px] leading-5 px-[17px] py-2">Show all</span>
            </Button>
          </Link>

          {/* <Button
            prefix={<Image src={"/svgs/right arrow.svg"} width={16} height={16} alt="archive" />}
            border={{ color: "default", width: 1 }}
            className="h-[32px] w-[32px] bg-primary-light items-center justify-center"
          >
          </Button> */}
        </div>
      </div>

      <div className="relative w-full max-w-full h-[300px]">
        <div className="absolute flex flex-row gap-x-[14px] w-full max-w-full">
          <div ref={scrollContainerRef}
            className="flex space-x-[14px] overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-green transition-all duration-300">
            <Projects cardInfo={cardInfo} imgWidth={266} imgHeight={130} cardWidth="w-[286px]" cardHeight="h-[270px]" fontSize={24} desSize={14} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPanel;
