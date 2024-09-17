import profileImg from "../../assets/images/profile-img.png";
import messageProfileImg from "../../assets/images/message-profile-img.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Message = () => {
  return (
    <div
      className="w-full gap-[20px] flex justify-between h-[100vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-8/12 flex flex-col">
        <h1 className="text-3xl text-[#2A3980] font-semibold">Chats</h1>
        <div className="w-full rounded-2xl bg-white shadow-lg flex flex-col py-4 my-4 h-[80vh]">
          {/**Profile top-bar */}
          <div className="w-full px-8 py-2 pb-4 flex justify-between items-center border-b-2 border-[rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-[15px]">
              <img
                src={messageProfileImg}
                className="w-[45px] h-[45px] rounded-full object-cover"
              />
              <div className="">
                <h1 className="text-3xl font-semibold text-black">Sanjay</h1>
                <div className="flex gap-1 items-center">
                  <div className="h-[8px] w-[8px] rounded-full bg-[#10A37F]"></div>
                  <p className="text-sm text-[#3A3A3A]"> Online</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-[#25D366] flex items-center gap-[5px] h-min px-4 py-1 cursor-pointer">
              <FaPhoneAlt className="text-white" />
              <p className="text-white text-base text-medium">CALL</p>
            </div>
          </div>
          {/**chat container */}
          <div
            className="chat-container w-full flex flex-col h-[100%] overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="sent w-full flex justify-end my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <div className="p-3 bg-[#D9DEF2] rounded-lg flex justify-center items-center max-w-[350px]">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Congratulations!
                    <br /> After we reviewed your application for the position
                    of Factory worker, we congratulate you for being a part of
                    us. After this you will be contacted personally by our team.
                    Thank You...
                  </p>
                </div>
                <img
                  src={profileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <p className="text-xs">5:51pm</p>
              </div>
            </div>
            <div className="received w-full flex justify-start my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <p className="text-xs">5:51pm</p>
                <img
                  src={messageProfileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div className="p-3 bg-[#C6AFE4] rounded-lg flex justify-center items-center">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Thanks Sir
                  </p>
                </div>
              </div>
            </div>
            <div className="sent w-full flex justify-end my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <div className="p-3 bg-[#D9DEF2] rounded-lg flex justify-center items-center max-w-[350px]">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    We would like to invite you for an interview on Monday, Jan
                    17,2022 at 10.00 am.
                    <br />
                    Link :<br /> https://meet.google.com/eub-gskd-gnj
                  </p>
                </div>
                <img
                  src={profileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <p className="text-xs">5:51pm</p>
              </div>
            </div>
            <div className="received w-full flex justify-start my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <p className="text-xs">5:51pm</p>
                <img
                  src={messageProfileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div className="p-3 bg-[#C6AFE4] rounded-lg flex justify-center items-center">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Yes. I will attend.
                  </p>
                </div>
              </div>
            </div>
            <div className="sent w-full flex justify-end my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <div className="p-3 bg-[#D9DEF2] rounded-lg flex justify-center items-center max-w-[350px]">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Congratulations!
                    <br /> After we reviewed your application for the position
                    of Factory worker, we congratulate you for being a part of
                    us. After this you will be contacted personally by our team.
                    Thank You...
                  </p>
                </div>
                <img
                  src={profileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <p className="text-xs">5:51pm</p>
              </div>
            </div>
            <div className="received w-full flex justify-start my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <p className="text-xs">5:51pm</p>
                <img
                  src={messageProfileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div className="p-3 bg-[#C6AFE4] rounded-lg flex justify-center items-center">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Thanks Sir
                  </p>
                </div>
              </div>
            </div>
            <div className="sent w-full flex justify-end my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <div className="p-3 bg-[#D9DEF2] rounded-lg flex justify-center items-center max-w-[350px]">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    We would like to invite you for an interview on Monday, Jan
                    17,2022 at 10.00 am.
                    <br />
                    Link :<br /> https://meet.google.com/eub-gskd-gnj
                  </p>
                </div>
                <img
                  src={profileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <p className="text-xs">5:51pm</p>
              </div>
            </div>
            <div className="received w-full flex justify-start my-2 px-4">
              <div className="flex items-center gap-[10px]">
                <p className="text-xs">5:51pm</p>
                <img
                  src={messageProfileImg}
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <div className="p-3 bg-[#C6AFE4] rounded-lg flex justify-center items-center">
                  <p className="text-[#3A3A3A] text-sm font-medium">
                    Yes. I will attend.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/**send box */}
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
      <div
        className="w-4/12 flex flex-col h-[100vh] overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex justify-end mt-2">
          <div className="rounded-full bg-[#F0E9FC] p-2 shadow-sm">
            <RxCross1 className="font-bold" />
          </div>
        </div>
        <div className="w-full rounded-2xl shadow-xl bg-white my-4 h-[80vh] overflow-y-scroll" style={{scrollbarWidth:'none'}}>
          <div className="w-full flex items-center gap-[5px] py-4 px-4 border-b-2 border-[rgba(0,0,0,0.2)">
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
          <div
            className="w-full px-4 h-[90vh] overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="w-full flex justify-between hover:bg-[rgba(97,94,240,0.1)]  bg-[rgba(96,94,240,0.04)] rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(96,94,240,0.04)] hover:bg-[rgba(97,94,240,0.1)]  rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(96,94,240,0.04)] hover:bg-[rgba(97,94,240,0.1)]  rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(96,94,240,0.04)] hover:bg-[rgba(97,94,240,0.1)]  rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(96,94,240,0.04)] hover:bg-[rgba(97,94,240,0.1)]  rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
            <div className="w-full flex justify-between bg-[rgba(96,94,240,0.04)] hover:bg-[rgba(97,94,240,0.1)]  rounded-xl py-2 px-2 my-2">
              <div className="flex gap-[5px]">
                <img
                  src={profileImg}
                  alt=""
                  className="h-[50px] w-[50px] rounded-xl"
                />
                <div className="">
                  <h1 className="text-sm font-semibold">Suresh Kumar</h1>
                  <p className="text-[#3A3A3A] text-xs font-regular">Haha that's terrifying 😂</p>
                </div>
              </div>
              <p className="text-sm font-medium text-[#3A3A3A]">12M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
