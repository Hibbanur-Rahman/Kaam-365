import React, { useState } from "react";
import profileImg from "../../assets/images/profile-img.png";
import messageProfileImg from "../../assets/images/message-profile-img.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const contacts = [
  {
    id: 1,
    name: "Sanjay",
    image: messageProfileImg,
    messages: [
      { text: "Congratulations! After we reviewed your application...", type: "sent", time: "5:51pm" },
      { text: "Thanks Sir", type: "received", time: "5:52pm" },
      { text: "We would like to invite you for an interview on Monday...", type: "sent", time: "5:53pm" },
      { text: "Yes. I will attend.", type: "received", time: "5:54pm" },
      { text: "We would like to invite you for an interview on Monday...", type: "sent", time: "5:53pm" },
      { text: "Yes. I will attend.", type: "received", time: "5:54pm" },
      { text: "We would like to invite you for an interview on Monday...", type: "sent", time: "5:53pm" },
      { text: "Yes. I will attend.", type: "received", time: "5:54pm" },
    ],
  },
  {
    id: 2,
    name: "Suresh Kumar",
    image: profileImg,
    messages: [
      { text: "Haha that's terrifying 😂", type: "received", time: "12M" },
    ],
  },
  {
    id: 3,
    name: "Hibban",
    image: messageProfileImg,
    messages: [
      { text: "Congratulations! After we reviewed your application...", type: "sent", time: "5:51pm" },
      { text: "Thanks Sir", type: "received", time: "5:52pm" },
      { text: "We would like to invite you for an interview on Monday...", type: "sent", time: "5:53pm" },
      { text: "Yes. I will attend.", type: "received", time: "5:54pm" },
      { text: "Thanks Sir", type: "received", time: "5:52pm" },
      { text: "We would like to invite you for an interview on Monday...", type: "sent", time: "5:53pm" },
      { text: "Yes. I will attend.", type: "received", time: "5:54pm" },
    ],
  },
  {
    id: 4,
    name: "Sonali",
    image: profileImg,
    messages: [
      { text: "Haha that's terrifying 😂", type: "received", time: "12M" },
    ],
  },
  // Add more contacts here
];

const Message = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="w-full gap-[20px] flex justify-between h-[100vh] overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
      {/* Chat section */}
      <div className="w-8/12 flex flex-col">
        <h1 className="text-3xl text-[#2A3980] font-semibold">Chats</h1>
        <div className="w-full rounded-2xl bg-white shadow-lg flex flex-col py-4 my-4 h-[80vh]">
          {/* Profile top-bar */}
          <div className="w-full px-8 py-2 pb-4 flex justify-between items-center border-b-2 border-[rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-[15px]">
              <img
                src={selectedContact.image}
                className="w-[45px] h-[45px] rounded-full object-cover"
                alt="contact-profile"
              />
              <div className="">
                <h1 className="text-3xl font-semibold text-black">{selectedContact.name}</h1>
                <div className="flex gap-1 items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#10A37F]"></div>
                  <p className="text-sm text-[#3A3A3A]">Online</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-[#25D366] flex items-center gap-[5px] h-min px-4 py-1 cursor-pointer">
              <FaPhoneAlt className="text-white" />
              <p className="text-white text-base text-medium">CALL</p>
            </div>
          </div>

          {/* Chat container */}
          <div className="chat-container w-full flex flex-col h-[100%] overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
            {selectedContact.messages.map((message, index) => (
              <div key={index} className={`w-full flex ${message.type === "sent" ? "justify-end" : "justify-start"} my-2 px-4`}>
                <div className="flex items-center gap-[10px]">
                  {message.type === "received" && <p className="text-xs">{message.time}</p>}
                  {message.type === "received" && (
                    <img src={selectedContact.image} className="w-[30px] h-[30px] rounded-full object-cover" alt="message-profile" />
                  )}
                  <div className={`p-3 ${message.type === "sent" ? "bg-[#D9DEF2]" : "bg-[#C6AFE4]"} rounded-lg flex justify-center items-center max-w-[350px]`}>
                    <p className="text-[#3A3A3A] text-sm font-medium">{message.text}</p>
                  </div>
                  {message.type === "sent" && (
                    <>
                      <img src={profileImg} className="w-[30px] h-[30px] rounded-full object-cover" alt="profile" />
                      <p className="text-xs">{message.time}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Send box */}
          <div className="w-full flex gap-[15px] items-center px-8 mt-4">
            <FiPaperclip className="text-[rgba(137,137,137,0.58)] text-2xl cursor-pointer" />
            <div className="w-11/12 relative">
              <input
                type="text"
                className="w-full text-sm outline-none border-2 rounded-3xl px-3 py-2 border-[rgba(136,128,128,0.85)]"
                placeholder="Type A Message"
              />
              <IoIosSend className="absolute top-[5px] cursor-pointer right-[20px] text-3xl text-[#2A3980]" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact list */}
      <div className="w-4/12 flex flex-col h-[100vh] overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
        <div className="w-full flex justify-end mt-2">
          <div className="rounded-full bg-[#F0E9FC] p-2 shadow-sm cursor-pointer">
            <RxCross1 className="font-bold" />
          </div>
        </div>
        <div className="w-full rounded-2xl shadow-xl bg-white my-4 h-[80vh] overflow-y-scroll" style={{ scrollbarWidth: 'none' }}>
          <div className="w-full flex items-center gap-[5px] py-4 px-4 border-b-2 border-[rgba(0,0,0,0.2)]">
            <h1 className="text-2xl font-semibold">Messages</h1>
            <FaChevronDown className="text-gray-500" />
            <div className="rounded-full p-1 px-2 h-min bg-[#D5DEF6]">
              <p className="text-xs font-medium">12</p>
            </div>
          </div>
          <div className="w-full flex px-4 relative my-2">
            <input
              type="text"
              placeholder="Search by name, position"
              className="w-full p-2 ps-[30px] bg-[#EDEDED] rounded-xl border outline-none placeholder:text-black"
            />
            <CiSearch className="text-gray-500 text-2xl cursor-pointer absolute left-[20px] bottom-[20%]" />
          </div>

          <div className="w-full px-4 h-[90vh] overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`w-full flex justify-between hover:bg-[rgba(97,94,240,0.1)] ${
                  selectedContact.id === contact.id ? "bg-[rgba(96,94,240,0.04)]" : ""
                } rounded-xl py-2 px-2 my-2 cursor-pointer`}
              >
                <div className="flex gap-[5px]">
                  <img
                    src={contact.image}
                    alt=""
                    className="h-[50px] w-[50px] rounded-xl"
                  />
                  <div className="">
                    <h1 className="text-sm font-semibold">{contact.name}</h1>
                    <p className="text-[#3A3A3A] text-xs font-regular">
                      {contact.messages[contact.messages.length - 1].text}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#3A3A3A]">{contact.messages[contact.messages.length - 1].time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
