"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import { mockData } from "@/lib/mockData";
import TopPreview from "@/components/developersPage/preview";
import MobileScrollPanel from "@/components/developersPage/projects/mobileScrollPanel";
import Search from "@/components/developersPage/search";

interface Props {
  params: {
    id: number;
  };
}

const DevelpersMobileAllPage = ({ params }: Props) => {
  const { isMobile } = useThemeContext();
  const router = useRouter();

  useEffect(() => {
    if (!isMobile)
      router.push("../1/all");
  }, [isMobile, router]);

  return (
    <>
      <TopPreview />
      <div className="w-full py-5">
        <MobileScrollPanel cardInfo={mockData.developers.cardInfo} />
      </div>
      <div className="absolute flex justify-center w-full bottom-[-3px]">
        <Search />
      </div>
    </>
  )
};

export default DevelpersMobileAllPage;
