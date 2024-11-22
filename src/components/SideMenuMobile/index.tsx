"use client";

import Image from "next/image";

export interface MenuItem {
  icon: string;
  label: string;
  id: string;
}
interface SideMenuMobileProps {
  activeTab: string;
  menuItems: MenuItem[];
  onTabChange: (id: string) => void;
}

const SideMenuMobile =({
  activeTab,
  menuItems,
  onTabChange,
}: SideMenuMobileProps) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 md:hidden z-10">
      <div className="mx-4 relative">
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-[100px]"
          style={{
            background:
              "linear-gradient(156.52deg, rgba(255, 255, 255, 0.4) 2.12%, rgba(255, 255, 255, 0.0001) 39%, rgba(255, 255, 255, 0.0001) 54.33%, rgba(255, 255, 255, 0.1) 93.02%)",
            padding: "1.39px",
          }}
        >
          {/* Inner background with specific gradient and blur */}
          <div
            className="absolute inset-[1.39px] rounded-[98px] bg-side-menu-gradient"
            // style={{
            //   background:
            //     "linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)",
            //   backdropFilter: "blur(33.45868682861328px)",
            //   WebkitBackdropFilter: "blur(33.45868682861328px)",
            // }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-[1] flex justify-between items-center px-5 py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-[#404040]"
                  : "hover:bg-white/[0.08] active:bg-white/[0.12]"
              }`}
              aria-label={item.label}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={`w-[28px] h-[28px]`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideMenuMobile;