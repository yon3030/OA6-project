"use client";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import Image from "next/image";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Menu
        open={isOpen}
        handler={setIsOpen}
      >
        <MenuHandler>
          <div
            className="relative w-[calc(100vw-64px)] md:w-[272px] px-4 py-5 bg-primary-default gradient-border gradient-default-border gradient-border-rounded-20px"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex justify-between">
              <div className="font-montserrat font-semibold text-white">
                Estate type{" "}
              </div>
              <Image
                src="/svgs/floorPlan/vector_icon.svg"
                alt="down-arrow"
                width={12}
                height={6}
                className={`${isOpen ? "rotate-180" : ""} md:block hidden`}
              />
              <Image
                src="/svgs/floorPlan/vector_down.svg"
                alt="down-arrow"
                width={12}
                height={6}
                className={`${isOpen ? "rotate-180" : ""} md:hidden`}
              />
            </div>
          </div>
        </MenuHandler>
        <MenuList className="relative w-[calc(100vw-64px)] md:w-[272px] px-4 py-5 bg-primary-default gradient-border gradient-default-border gradient-border-rounded-20px text-white font-montserrat font-medium backdrop-blur-[5px] box-shadow-floorplan-dropdown border-none">
          <MenuItem>1 bedroom</MenuItem>
          <MenuItem>2 bedrooms</MenuItem>
          <MenuItem>3 bedrooms</MenuItem>
          <MenuItem>4 bedrooms</MenuItem>
          <MenuItem>5 bedrooms</MenuItem>
          <MenuItem>1 floor penthouse</MenuItem>
          <MenuItem>1 floor penthouse</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
