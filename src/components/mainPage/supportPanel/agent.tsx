import React, { useState } from "react";
import Image from "next/image"
import Button from "@/components/common/button"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/PhoneInTalk';
import BookMeetingModal from './bookModal';
import { Calendar } from "../../common/calendar/calendar";

const AgentPanel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showBookForm, setShowBookForm] = useState<boolean>(false);
  const bookFormHandler = () => {
    setShowBookForm(!showBookForm)
  }
  return (
    <>
      <div className="flex flex-row items-center justify-start mt-[30px]">
        <Image src='/imgs/avatars/victor.png' alt="victor" width={80} height={80} className="rounded-full w-[80px] h-[80px]" />
        <div className="flex flex-col pl-[15px]">
          <p className="text-[30px] text-white font-montserrat font-normal">Victor</p>
          <p className="text-[16px] text-[#646464] font-montserrat font-normal">Listing agent</p>
        </div>
      </div>

      <div className="flex flex-row justify-center px-8 space-x-[23px] py-[15px] bg-[#151515] rounded-[20px] mt-5">
        <a href='#' className='border-[1px] rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          <TelegramIcon className="w-[22.5px] h-[17.5px] text-white" />
        </a>
        <a href='#' className='border-[1px] rounded-full w-[50px] h-[50px] flex justify-center items-center opacity-20'>
          <WhatsAppIcon className="w-[22.5px] h-[17.5px] text-white" />
        </a>
        <a href='#' className='border-[1px] rounded-full w-[50px] h-[50px] flex justify-center items-center'>
          <PhoneIcon className="w-[22.5px] h-[17.5px] text-white" />
        </a>
      </div>

      <div className="mt-5 mb-[10px]">
        <p className="font-montserrat text-[16px] leading-[22px] text-white">Select the tour date</p>
      </div>

      <div className="bg-[#151515] rounded-[20px] w-[276px] h-[321px]">
        <Calendar onShowForm={bookFormHandler} setSelectedDate={setSelectedDate} />
      </div>

      <Button
        className="w-full items-center justify-center h-[56px] mt-[10px] translation ease-in-out duration-300 hover:bg-primary-medium bg-primary-light"
        roundedSize="full"
        handleClick={openModal}
      >
        <p className="text-[16px] text-white">Book</p>
      </Button>

      <BookMeetingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default AgentPanel