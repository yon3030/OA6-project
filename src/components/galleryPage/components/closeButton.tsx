"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@/components/common/button';

const CloseButton: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-6">
      <Button
        handleClick={goBack}
        prefix={<CloseIcon />}
        border={{
          color: "transparent",
          width: 0
        }}
        className="z-10 h-[24px] w-[24px] md:h-[36px] md:w-[36px] bg-white items-center justify-center"
      >
      </Button>
    </div>
  );
};

export default CloseButton;
