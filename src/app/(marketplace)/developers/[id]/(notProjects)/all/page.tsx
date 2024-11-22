"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useThemeContext } from "@/lib/context";
import { mockData } from "@/lib/mockData";
import PCScrollPanel from "@/components/developersPage/projects/pcScrollPanel";

interface Props {
  params: {
    id: number;
  };
}

const DevelpersPCAllPage = ({ params }: Props) => {
  const { isMobile } = useThemeContext();
  const router = useRouter();

  useEffect(() => {
    if (isMobile)
      router.push("../mobile/all");
  }, [isMobile, router]);

  return (
    <div className="w-full pb-4 px-7">
      <PCScrollPanel cardInfo={mockData.developers.cardInfo} />
    </div>
  )
};

export default DevelpersPCAllPage;
