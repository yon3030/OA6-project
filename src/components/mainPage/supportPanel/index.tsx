import React, { useState, useRef, useEffect } from "react";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import Button from "@/components/common/button";
import Agent from "./agent";
import AI from "./ai";

const ToggleButton = ({
  isActive,
  onClick,
  label,
  Icon,
}: {
  isActive: boolean;
  onClick: () => void;
  label: string;
  Icon: React.ElementType;
}) => (
  <Button
    className={`flex-row items-center justify-center w-full h-full bg-${isActive ? "[#363636]" : "default"} text-${isActive ? "white" : "primary-light"}`}
    roundedSize="full"
    border={{ color: isActive ? "default" : "transparent", width: 0.5 }}
    prefix={<Icon fontSize="medium" />}
    handleClick={onClick}
  >
    <h1 className="text-[16px]">{label}</h1>
  </Button>
);

const SupportPanel = () => {
  const [active, setActive] = useState<boolean>(true);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragging && toggleRef.current) {
      const toggleWidth = toggleRef.current.offsetWidth;
      const toggleLeft = toggleRef.current.getBoundingClientRect().left;
      const cursorPosition = event.clientX - toggleLeft;
      const newActive = cursorPosition > toggleWidth / 2;
      setActive(newActive);
    }
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="flex flex-col">
      <div
        className="relative gradient-border gradient-default-border gradient-border-rounded-30px bg-primary-default rounded-[30px] px-[30px] py-7 grow w-[336px]"
        ref={toggleRef}
      >
        <div
          className="w-full h-[44px] flex flex-row justify-stretch items-center rounded-full p-1 effect-inside"
          onMouseDown={handleMouseDown}
        >
          <ToggleButton
            isActive={active}
            onClick={() => setActive(true)}
            label="Agent"
            Icon={PersonIcon}
          />
          <ToggleButton
            isActive={!active}
            onClick={() => setActive(false)}
            label="AI"
            Icon={PsychologyIcon}
          />
        </div>
        {active ? <Agent /> : <AI />}
      </div>
    </div>
  );
}

export default SupportPanel;
