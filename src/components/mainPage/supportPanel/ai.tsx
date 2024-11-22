import React from "react";
import Image from "next/image";

import SpecialMessage from "@/components/common/message/specialMessage";
import MessageList from "./messageList";
import MessageInput from "./messageInput";

const AIPanel: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-start mt-[30px]">
        <Image
          src='/imgs/avatars/daria.png'
          alt="victor"
          width={276}
          height={280}
          className="rounded-[30px] w-full h-[280px]"
        />
      </div>

      <div className="relative gradient-border gradient-default-border gradient-border-rounded-20px bg-primary-dark glass-stroke-lg gradient-border-1px rounded-[20px] w-full h-[321px] mt-[18px] pt-[25px] pl-[15px]">
        <div className="overflow-auto h-[calc(100%-80px)] scrollbar-green scrollbar-thin pr-[15px]">
          <SpecialMessage
            addClass="mb-4 rounded-except-top-left"
            height="h-10"
            content="Hi! My name is Daria, your AI-powered real estate assistant, here to help you remotely find and purchase your dream home in a new way."
            innerColor="text-primary-dark"
            bgColor="bg-secondary-default"
            roundedSize="rounded-[20px]"
            exceptRounded="rounded-except-top-left"
            prefix={
              <Image src="/imgs/support/voice.png" alt="Voice" width={50} height={50} className="w-[50px] h-[50px]" />
            }
          />
          <MessageList />
        </div>

        <MessageInput />
      </div>
    </>
  )
}

export default AIPanel;
