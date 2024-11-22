"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface UserName {
  firstName: string;
  lastName: string;
  isEditing: boolean;
}

export interface PersonalAccountItem {
  icon: string;
  label: string;
  value?: string;
  isEditing?: boolean | undefined;
}

const personalAccountItems: PersonalAccountItem[] = [
  {
    icon: "/svgs/personalAccount/envelope.svg",
    label: "Email address",
    value: "test@test.com",
    isEditing: false,
  },
  {
    icon: "/svgs/personalAccount/phone.svg",
    label: "Phone number",
    value: "+7 000 000 00-00",
    isEditing: false,
  },
  {
    icon: "/svgs/personalAccount/password.svg",
    label: "Password",
    value: "********",
    isEditing: false,
  },
  {
    icon: "/svgs/personalAccount/logout.svg",
    label: "Logout of your account",
    isEditing: undefined,
  },
];

const PersonalAccountChangeSection = () => {
  const [saveButton, setSaveButton] = useState(false);
  const [items, setItems] = useState(personalAccountItems);
  const [userName, setUserName] = useState<UserName>({
    firstName: "Name",
    lastName: "Surname",
    isEditing: false,
  });

  const handleItemClick = (clickedLabel: string) => {
    console.log("Clicked label:", clickedLabel);
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isEditing: item.label === clickedLabel ? true : item.isEditing,
      }))
    );
    setSaveButton(true);
  };

  const handleNameEdit = () => {
    setUserName((prev) => ({ ...prev, isEditing: true }));
    setSaveButton(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    const newItems = items.map((item) =>
      item.label === label ? { ...item, value: e.target.value } : item
    );
    setItems(newItems);
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "firstName" | "lastName"
  ) => {
    setUserName((prev) => ({ ...prev, [field]: e.target.value }));
    setSaveButton(true);
  };

  const handleSave = () => {
    const newItems = items.map((item) => ({ ...item, isEditing: false }));
    setItems(newItems);
    setUserName((prev) => ({ ...prev, isEditing: false }));
    setSaveButton(false);
  };

  return (
    <div className="max-w-[calc(100vw-2rem)] md:max-w-screen md:w-full h-[calc(100vh-12rem)] md:h-[85vh] relative gradient-border gradient-default-border gradient-border-rounded-30px bg-coming-soon-settings-back bg-no-repeat bg-cover">
      <div className="flex flex-col">
        <div className="flex flex-row mt-9 mx-2 md:mx-9 px-3 space-x-3 md:space-x-6 items-center">
          <div className="w-[48px]">
            <Image
              src={"/imgs/avatars/avatar.png"}
              alt="avatar"
              width={48}
              height={48}
            />
          </div>
          {!userName.isEditing ? (
            <>
              <div className="flex flex-row text-white text-[24px] md:text-[40px]">
                <p>{userName.firstName}</p>&nbsp;&nbsp;
                <p>{userName.lastName}</p>
              </div>

              <div className="cursor-pointer hover:opacity-10 ">
                <Image
                  src={"/svgs/personalAccount/editpen.svg"}
                  alt="editIcon"
                  width={18}
                  height={20}
                  onClick={handleNameEdit}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-wrap space-x-2 overflow-hidden">
              <input
                type="text"
                value={userName.firstName}
                onChange={(e) => handleNameChange(e, "firstName")}
                className="bg-transparent text-white text-[24px] md:text-[40px] border-b"
                maxLength={10}
              />
              <input
                type="text"
                value={userName.lastName}
                onChange={(e) => handleNameChange(e, "lastName")}
                className="bg-transparent text-white text-[24px] md:text-[40px] border-b"
                maxLength={10}
              />
            </div>
          )}
        </div>
        <div className="space-y-4 mx-2 md:px-9 py-4 md:py-6">
          {items.map((item) =>
            item.isEditing === undefined || item.isEditing === false ? (
              <div
                className="relative h-[68px] max-w-[calc(100vw-40px)] md:max-w-[375px] p-4 bg-[#1b1b1b] gradient-border gradient-default-border gradient-border-rounded-20px"
                key={item.label}
              >
                <div className="flex flex-row relative h-[36px] py-[2px] space-x-[10px]">
                  <div className="items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="emailIcon"
                      width={32}
                      height={32}
                      onClick={() => {
                        if (item.isEditing !== undefined) {
                          handleItemClick(item.label);
                        }
                      }}
                      className="cursor-pointer hover:opacity-50 transition-all duration-300"
                    />
                  </div>
                  {item.label != "Logout of your account" ? (
                    <div className="grid grid-rows-2 h-full">
                      <span className="font-montserrat text-[#414141] text-xs">
                        {item.label}
                      </span>
                      <span className="font-montserrat text-white text-base">
                        {item.label === "Password" ? "Your password" : item.value}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="h-full content-center">
                        <span className="font-montserrat text-white text-xl">
                          {item.label}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative h-[108px] w-[calc(100vw-32px)] md:w-[375px] p-4 bg-primary-light gradient-border gradient-default-border gradient-border-rounded-20px shadow-account-change-shadow backdrop-blur-account-change-blur">
                <div className="flex flex-col">
                  <div className="h-full content-center">
                    <span className="font-montserrat text-white text-xl">
                      Change {item.label}
                    </span>
                  </div>
                  <div className="flex flex-row h-[32px] py-[2px] space-x-[10px] mt-2">
                    <div className="items-center justify-center">
                      <Image
                        src={item.icon}
                        alt="emailIcon"
                        width={32}
                        height={32}
                        className="cursor-pointer hover:opacity-50 transition-all duration-300"
                      />
                    </div>
                    <div className="h-full content-center items-center justify-items-center p-1">
                      <input
                        type={item.label === "Password" ? "password" : "text"}
                        className="bg-transparent text-white text-base border-b active:border-b-primary-default"
                        value={item.value}
                        onChange={(e) => handleChange(e, item.label)}
                        autoFocus
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {saveButton ? (
          <div
            className="flex justify-center bg-primary-light h-[42px] max-w-[calc(100vw-40px)] md:max-w-[375px] mb-9 md:mx-11 md:px-4 gradient-border gradient-default-border gradient-border-rounded-30px text-white relative cursor-pointer content-cente"
            onClick={handleSave}
          >
            <button>Save</button>
          </div>
        ) : (
          <div className="flex justify-center bg-[#151515] h-[42px] max-w-[calc(100vw-40px)] md:max-w-[375px] mb-9 mx-2 px-3 md:mx-11 md:px-4 gradient-border gradient-default-border gradient-border-rounded-30px text-[#414141] relative cursor-pointer mt-[5vh] md:mt-1">
            <button>Save</button>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-primary-default rounded-[30px] z-[-10]"></div>
    </div>
  );
};

export default PersonalAccountChangeSection;
