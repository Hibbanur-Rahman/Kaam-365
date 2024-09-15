import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import profileImg from "../assets/images/profile-img.png";
import { CiUser } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { PiBellFill } from "react-icons/pi";

const TopBar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full flex py-2 items-center justify-between">
      <h1
        className={`${
          location.pathname == "/dashboard/create-vacancy" ||
          location.pathname === "/dashboard/create-vacancy/"
            ? "text-2xl"
            : "text-3xl"
        } font-semibold text-[#2A3980]`}
      >
        {location.pathname == "/dashboard" ||
        location.pathname === "/dashboard/"
          ? "Dashboard"
          : ""}
        {location.pathname == "/dashboard/jobs" ||
        location.pathname === "/dashboard/jobs/"
          ? "Jobs"
          : ""}
        {location.pathname == "/dashboard/create-vacancy" ||
        location.pathname === "/dashboard/create-vacancy/"
          ? "Create vacancy"
          : ""}
        {location.pathname == "/dashboard/post-jobs" ||
        location.pathname === "/dashboard/post-jobs/"
          ? "Post Jobs"
          : ""}
        {location.pathname == "/dashboard/search-candidate" ||
        location.pathname === "/dashboard/search-candidate/"
          ? "Candidate Search"
          : ""}
      </h1>
      {
        location.pathname!=='/dashboard/search-candidate' &&  <div className="relative w-8/12" onClick={()=>navigate('/dashboard/search-candidate')}>
        <input
          type="text"
          placeholder="Search by name, position"
          className="w-full p-2 px-3 rounded-xl border outline-none placeholder:text-black"
        />
        <CiSearch className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]" />
      </div>
      }
     
      <div className="flex items-center gap-[20px]">
        <Menu
          open={isNotificationOpen}
          handler={setIsNotificationOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <div
              className={`group relative h-min w-min ${
                isNotificationOpen ? "bg-[rgba(175,184,228,0.47)]" : ""
              } hover:bg-[rgba(175,184,228,0.47)] p-2 rounded-full cursor-pointer`}
            >
              <FaBell
                className={`text-2xl text-[#BBBBBB] ${
                  isNotificationOpen ? "text-[#2A397E]" : ""
                } group-hover:text-[#2A397E]`}
              />
              <div className="h-[10px] w-[10px] rounded-full bg-[#23A757] absolute top-[10px] right-[5px]"></div>
            </div>
          </MenuHandler>
          <MenuList className="flex rounded-xl md:flex flex-col w-[430px] p-0">
            <div className="flex justify-between w-full p-3 pt-3 pb-1 hover:outline-none">
              <p className="font-semibold text-black text-sm ">Recent</p>
              <p className="font-semibold text-[#23A757] text-sm ">Clear all</p>
            </div>
            <div
              className="w-full p-4  mt-4 bg-[#F6F8FF] flex justify-between gap-[30px] hover:outline-none cursor-pointer"
              onClick={() => navigate("/complete-profile")}
            >
              <div className="flex gap-[20px]">
                <div className="rounded-full p-2 h-min bg-[rgba(175,184,228,0.47)]">
                  <PiBellFill className="text-xl text-[#2A397E]" />
                </div>
                <p className="text-[#3A3A3A] text-sm ">Complete your Profile</p>
              </div>
              <div className="">
                <p className="text-gray-500 text-right">2m</p>
                <p className="text-red-900 text-right">4 Remaining</p>
              </div>
            </div>
            <div className="w-full p-4  mt-4 bg-[#F6F8FF] flex justify-between gap-[30px] hover:outline-none">
              <div className="flex gap-[20px]">
                <div className="rounded-full p-2 h-min bg-[rgba(175,184,228,0.47)]">
                  <PiBellFill className="text-xl text-[#2A397E]" />
                </div>
                <p className="text-[#3A3A3A] text-sm ">
                  Exciting news awaits! An outstanding candidate has set their
                  sights on the Mechanic role at UrbanClap.
                </p>
              </div>
              <p className="text-gray-500">2m</p>
            </div>
            <div className="w-full p-4  mt-4 bg-[#F6F8FF] flex justify-between gap-[30px] hover:outline-none">
              <div className="flex gap-[20px]">
                <div className="rounded-full p-2 h-min bg-[rgba(175,184,228,0.47)]">
                  <PiBellFill className="text-xl text-[#2A397E]" />
                </div>
                <p className="text-[#3A3A3A] text-sm ">
                  Hope this finds you well! We're here with an update on the
                  application for the DeliveryBoy position at Swiggy.
                </p>
              </div>
              <p className="text-gray-500">2m</p>
            </div>

            <div className="flex w-full hover:outline-none px-4 my-3">
              <p className="text-sm font-semibold text-black">Earlier</p>
            </div>
            <div className="w-full p-4  mt-4 bg-[#fff] flex justify-between gap-[30px] hover:outline-none">
              <div className="flex gap-[20px]">
                <div className="rounded-full p-2 h-min bg-[rgba(175,184,228,0.47)]">
                  <PiBellFill className="text-xl text-[#2A397E]" />
                </div>
                <p className="text-[#3A3A3A] text-sm ">
                  Great news! We've scheduled an interview for the CarDriver
                  position with Rahul Kumar, Ajmeer, Rajasthan.
                </p>
              </div>
              <p className="text-gray-500">2m</p>
            </div>
          </MenuList>
        </Menu>
        <div className="group relative h-min w-min hover:bg-[rgba(175,184,228,0.47)] p-2 rounded-full cursor-pointer">
          <BsFillChatLeftTextFill className="text-2xl text-[#BBBBBB] group-hover:text-[#2A397E]" />
        </div>

        <Menu
          open={isProfileMenuOpen}
          handler={setIsProfileMenuOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium ">
              <img
                src={profileImg}
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />
              <IoChevronDownSharp
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isProfileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </MenuHandler>
          <MenuList className="flex rounded-xl md:flex flex-col w-[400px] ">
            <MenuItem className="flex justify-between items-center py-3">
              <div className="flex gap-[10px] items-center">
                <div className="rounded-full bg-[#f2f2fb] p-2 h-min">
                  <CiUser className="text-2xl text-[#2A3980]" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-lg text-black">
                    Edit profile
                  </h1>
                  <p className="text-gray-500">Manage your profile</p>
                </div>
              </div>
              <FaChevronRight />
            </MenuItem>
            <MenuItem className="flex justify-between items-center py-3">
              <div className="flex gap-[10px] items-center">
                <div className="rounded-full bg-[#f2f2fb] p-2 h-min">
                  <HiInformationCircle className="text-2xl text-[#2A3980]" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-lg text-black">Help</h1>
                  <p className="text-gray-500">Manage your saved account</p>
                </div>
              </div>
              <FaChevronRight />
            </MenuItem>
            <MenuItem className="flex justify-between items-center py-3">
              <div className="flex gap-[10px] items-center">
                <div className="rounded-full bg-[#f2f2fb] p-2 h-min">
                  <BsShieldCheck className="text-2xl text-[#2A3980]" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-lg text-black">
                    Change Password
                  </h1>
                  <p className="text-gray-500">
                    Further secure your account for safety
                  </p>
                </div>
              </div>
              <FaChevronRight />
            </MenuItem>
            <MenuItem className="flex justify-between items-center py-3">
              <div className="flex gap-[10px] items-center">
                <div className="rounded-full bg-[#f2f2fb] p-2 h-min">
                  <IoSettingsOutline className="text-2xl text-[#2A3980]" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-lg text-black">Setting</h1>
                  <p className="text-gray-500">Change your settings</p>
                </div>
              </div>
              <FaChevronRight />
            </MenuItem>
            <MenuItem className="flex justify-between items-center py-3">
              <div className="flex gap-[10px] items-center">
                <div className="rounded-full bg-[#f2f2fb] p-2 h-min">
                  <IoLogOutOutline className="text-2xl text-[#2A3980]" />
                </div>
                <div className="">
                  <h1 className="text-semibold text-lg text-black">Log out</h1>
                  <p className="text-gray-500">
                    Further secure your account for safety
                  </p>
                </div>
              </div>
              <FaChevronRight />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
