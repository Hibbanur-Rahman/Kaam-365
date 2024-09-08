import React from "react";
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

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="w-full flex py-2 items-center">
      <h1 className="text-3xl font-semibold text-[#2A3980]">Dashboard</h1>
      <div className="relative w-8/12">
        <input
          type="text"
          placeholder="Search by name, position"
          className="w-full p-1 px-3 rounded-lg border outline-none"
        />
        <CiSearch className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]" />
      </div>
      <div className="flex items-center">
        <div className="group relative h-min w-min hover:bg-[rgba(175,184,228,0.47)] p-2 rounded-full cursor-pointer">
          <FaBell className="text-2xl text-[#BBBBBB] group-hover:text-[#2A397E]" />
          <div className="h-[10px] w-[10px] rounded-full bg-[#23A757] absolute top-[10px] right-[5px]"></div>
        </div>
        <div className="group relative h-min w-min hover:bg-[rgba(175,184,228,0.47)] p-2 rounded-full cursor-pointer">
          <BsFillChatLeftTextFill className="text-2xl text-[#BBBBBB] group-hover:text-[#2A397E]" />
        </div>

        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <img
                src={profileImg}
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />
              <IoChevronDownSharp
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <IoChevronUpOutline
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </MenuHandler>
          <MenuList className="hidden rounded-xl lg:block">
            <MenuItem className="flex justify-between">
              <div className="flex">
                <div className="rounded-full bg-[#f2f2fb] p-2 ">
                  <CiUser className="text-xl text-[#2A3980]" />
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
            <MenuItem>React</MenuItem>
            <MenuItem>TailwindCSS</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
