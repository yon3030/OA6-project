"use client"
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./demo.css";
interface AccountModalProps {
  isAvailable: boolean;
}

const AccountModal: React.FC<AccountModalProps> = ({ isAvailable }) => {
  const [open, setOpen] = React.useState(isAvailable);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative">
        <Dialog
          open={open}
          handler={handleOpen}
          title="Login to your account"
          dismiss={{
            enabled: false
          }}
          className="bg-primary-light w-[calc(100vw-28px)] max-w-[415px] sm:w-[476px] px-[26.5px] py-8 md:px-12 md:py-10 rounded-[30px] dialog-modal"
        >
          <DialogHeader className="justify-center">
            <IconButton
              size="sm"
              variant="text"
              className="!absolute right-[16.5px] top-[16.5px] w-9 h-9 bg-white rounded-full close-button autofocus:outline-none"
              onClick={handleOpen}
            >
              <XMarkIcon className="h-4 w-4 stroke-2 close-button-icon" />
            </IconButton>
            <p className="text-foreground text-center text-2xl sm:text-[40px]">
              Welcome to Oasix.
            </p>
          </DialogHeader>
          <DialogBody className="text-foreground flex flex-col items-center justify-center">
            <div className="relative rounded-2xl my-8">
              <input
                type="text"
                placeholder="Email"
                className="px-[20px] py-[14px] sm:w-[380px] h-[50px] bg-[rgba(255,255,255,0.17)] text-foreground p-2 rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-3 justify-center my-10">
              <div className="h-[2px] bg-[#393939]"></div>
              <div className="h-[2px] items-center justify-items-center content-center text-center text-[rgba(255,255,255,0.4)] text-[14px] p-3 translate-y-[-23px]">
                <span className="hidden md:block">or continue with</span>
                <span className="block md:hidden">or with</span>
              </div>
              <div className="h-[2px] bg-[#393939]"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full items-center justify-center justify-items-center">
              <Link
                href="/"
                className="h-[58px] w-[58px] sm:w-[102px] bg-white justify-items-center content-center rounded-[8px]"
              >
                <Image
                  src="/imgs/accounts/Facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="/"
                className="h-[58px] w-[58px] sm:w-[102px] bg-white justify-items-center content-center rounded-[8px]"
              >
                <Image
                  src="/imgs/accounts/Google.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="/"
                className="h-[58px] w-[58px] sm:w-[102px] bg-white justify-items-center content-center rounded-[8px]"
              >
                <Image
                  src="/imgs/accounts/Apple.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </Link>
            </div>

            <div className="text-center py-[30px]">
              <span>
                Don't have an account?{" "}
                <a className="text-[#20d795] cursor-pointer">Sign up</a>
              </span>
            </div>
          </DialogBody>
          <DialogFooter className="flex">
            <button
              onClick={handleOpen}
              className="flex-1 bg-[#151515] text-white hover:bg-[#20d795] hover:text-black rounded-[30px] h-[56px] text-base submit-button"
            >
              <span>Submit</span>
            </button>
          </DialogFooter>
        </Dialog>
      </div>
  );
};

export default AccountModal;
