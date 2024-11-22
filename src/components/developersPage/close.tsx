"use client";

import React from "react";
import Link from "next/link";
import Close from '@mui/icons-material/Close';
import Button from "@/components/common/button";

interface Props {
  uri: string;
}
const CloseIcon: React.FC<Props> = ({ uri }) => {
  return (
    <Link href={uri}>
      <Button
        prefix={<Close />}
        border={{ color: "transparent", width: 0 }}
        className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] bg-white items-center justify-center z-10"
      >
      </Button>
    </Link>

  );
};

export default CloseIcon;