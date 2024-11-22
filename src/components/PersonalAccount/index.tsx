"use client";
import TopNav from "@/components/Topnav";
import SideMenu from "@/components/SideMenu";
import SideMenuMobile from "@/components/SideMenuMobile";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/lib/context";
import { useState } from "react";
import PersonalAccountChangeSection from "./PersonalAccountChangeSection";

export interface MenuItem {
  icon: string;
  label: string;
  id: string;
}

const menuItems: MenuItem[] = [
  { icon: "/svgs/navbar/search.svg", label: "Search", id: "search" },
  { icon: "/svgs/navbar/units.svg", label: "Developers", id: "developers" },
  { icon: "/svgs/navbar/developers.svg", label: "Units", id: "units" },
  { icon: "/svgs/navbar/compare.svg", label: "Compare", id: "compare" },
  { icon: "/svgs/navbar/blogs.svg", label: "Blog", id: "blog" },
];

const PersonalAccount = () => {
  const [activeTab, setActiveTab] = useState("developers");
  return (
    <>
      <div className="min-h-screen">
        <TopNav />

        <div className="flex">
          <SideMenu
            activeTab={activeTab}
            menuItems={menuItems}
            onTabChange={setActiveTab}
          />
          <div className="flex-1 md:pl-4 md:ml-[162px] md:pr-[100px] mt-[100px] sm:mt-[130px] ">
            <PersonalAccountChangeSection />
          </div>
        </div>
        <SideMenuMobile
          activeTab={activeTab}
          menuItems={menuItems}
          onTabChange={setActiveTab}
        />
      </div>
    </>
  );
};

export default PersonalAccount;
