import React from 'react';
import Image from "next/image";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import DefaultMessage from '@/components/common/message/defaultMessage';

interface MessageProps {
  addClass: string;
  width: string;
  align: string;
  justify?: "start" | "center" | "end" | "between",
  bgColor: string;
  exceptRounded: string;
  content?: string;
  date: string;
  dateColor: string;
  innerColor: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const messageData: MessageProps[] = [
  {
    addClass: "bg-secondary-default text-primary-dark rounded-except-bottom-left",
    width: "content",
    align: "start",
    justify: "start",
    bgColor: "secondary-default",
    exceptRounded: "except-bottom-left",
    content: "Yeah sure! get him too.",
    innerColor: "primary-dark",
    date: "12:22 PM",
    dateColor: "text-secondary-light",
  },
  {
    addClass: "bg-secondary-light text-white rounded-except-bottom-right",
    width: "content",
    align: "end",
    justify: "start",
    bgColor: "secondary-light",
    exceptRounded: "except-bottom-right",
    content: "Alright! See you soon!",
    innerColor: "white",
    date: "12:25 PM",
    dateColor: "text-secondary-light",
  },
  {
    addClass: "bg-secondary-default text-black rounded-except-bottom-left",
    width: "166.87px",
    align: "start",
    justify: "center",
    bgColor: "secondary-default",
    exceptRounded: "except-bottom-left",
    innerColor: "black",
    prefix: <PlayCircleIcon sx={{ width: '32px', height: '32px' }} />,
    suffix: <Image src="/imgs/support/black-tone.png" alt="Tone" width={96.9} height={24.02} className="w-[96.9px] h-[24.02px]" />,
    date: "12:25 PM",
    dateColor: "text-secondary-light",
  },
  {
    addClass: "bg-secondary-light text-white rounded-except-bottom-right",
    width: "content",
    align: "end",
    justify: "start",
    bgColor: "secondary-light",
    exceptRounded: "except-bottom-right",
    content: "okay sure!",
    innerColor: "white",
    date: "12:25 PM",
    dateColor: "text-secondary-light",
  },
  {
    addClass: "bg-secondary-medium text-black rounded-except-bottom-right",
    width: "166.87px",
    align: "end",
    justify: "start",
    bgColor: "secondary-medium",
    exceptRounded: "except-bottom-right",
    innerColor: "black",
    prefix: <Image src="/imgs/support/grey-tone.png" alt="Tone" width={96.9} height={24.02} className="w-[96.9px] h-[24.02px]" />,
    suffix: <PlayCircleIcon sx={{ width: '32px', height: '32px' }} className="text-white rotate-180" />,
    date: "12:25 PM",
    dateColor: "text-secondary-light",
  }
];

const MessageList: React.FC = () => {
  return (
    <>
      {messageData.map((msg, index) => (
        <DefaultMessage
          key={index}
          width={msg.width}
          align={msg.align}
          bgColor={msg.bgColor}
          exceptRounded={msg.exceptRounded}
          content={msg.content}
          innerColor={msg.innerColor}
          date={msg.date}
          dateColor={msg.dateColor}
          justify={msg.justify}
          prefix={msg.prefix}
          suffix={msg.suffix}
        />
      ))}
    </>
  );
};

export default MessageList;
