"use client";
import Image from "next/image";
import Link from "next/link";
// import AccountModal from "@/components/Account/AccountModal";

const Header = () => {
  return (
    <>
      <div className="gradient-border top-[0px] gradient-default-border bg-primary-default rounded-full relative h-[57px] md:h-[57px] lg:h-[75px]  mt-4 md:mt-8 px-6 md:px-10 mx-4 md:mx-0 search-tag flex flex-row justify-between items-center md:w-[100vw] lg:min-w-[100vw] xl:min-w-[calc(100vw-100px)] xl:w-[calc(100vw-100px)] 2xl:w-[calc(100vw-100px)]">
        <Link href={"/"}>
          <Image
            src={"/imgs/oasix_logo.png"}
            alt="Logo"
            width={66}
            height={25}
            className="w-[66px] h-[25px] lg:w-[96px] lg:h-[36px] -mt-1 z-30"
          />
        </Link>
        <div className="flex flex-row items-center space-x-3 md:space-x-7">
          <Link href={""}>
            <Image
              src={"/svgs/login.svg"}
              alt="Avatar"
              width={32}
              height={32}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/svgs/setting.svg"}
              alt="Setting"
              width={32}
              height={32}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            />
          </Link>
          <Link href={"/user"}>
            <Image
              src={"/imgs/avatars/avatar.png"}
              alt="Avatar"
              width={39}
              height={39}
              className="w-[24px] h-[24px] lg:w-[39px] lg:h-[39px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
