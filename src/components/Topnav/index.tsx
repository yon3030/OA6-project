"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 px-4 md:px-[100px] pt-4 md:pt-[34px] z-50">
      <nav className="relative h-[57px] sm:h-[74px] mx-auto rounded-[100px] px-6 sm:px-[41px] py-4 sm:py-[19px] flex justify-between items-center bg-primary-default">
        {/* New border effect */}
        <div 
          className="absolute inset-0 rounded-[100px]"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.0001) 33.33%,
                rgba(255, 255, 255, 0.0001) 66.67%,
                rgba(255, 255, 255, 0.1) 100%
              )
            `,
            padding: '1px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            pointerEvents: 'none'
          }}
        />
        
        <Link 
          href="/" 
          className="flex items-center"
        >
          <Image
            src="/imgs/oasix_logo.png"
            alt="Oasix"
            width={92}
            height={24}
            priority
            className="h-5 sm:h-6 w-auto"
          />
        </Link>
        
        <button 
          className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl hover:bg-primary-dark transition-colors duration-200"
          aria-label="Logout"
        >
          <Image
            src="/svgs/login.svg"
            alt="Login"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </nav>
    </div>
  );
}