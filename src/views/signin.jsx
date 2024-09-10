import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import LoginImg from "../assets/images/login-side-img.png";
import { HiChevronLeft } from "react-icons/hi2";
import languageIcon from "../assets/images/language-icon.svg";
import Logo from "../assets/images/logo.svg";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { Dialog } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { BsCheck2 } from "react-icons/bs";

const SignIn = () => {
  const navigate=useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Update this to store the selected language
  const language = [
    "English",
    "Hindi",
    "Assamese",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Odia",
    "Punjabi",
    "Nepali",
    "Maithili",
    "Kashmiri",
    "Malyalam",
    "Kannada",
    "Telugu",
    "Tamil",
    "Konkani",
  ];

  const handleOpen = () => setOpen(!open);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang); // Set the selected language
  };

  return (
    <div className="w-full flex justify-between p-3 h-[100vh] overflow-hidden">
      <div className="md:w-7/12 w-full flex flex-col items-center h-[100vh] overflow-y-scroll scroll-smooth pb-8" style={{scrollbarWidth:'none'}}>
        <div className="flex w-11/12 justify-between ">
          <div className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            <HiChevronLeft className="text-3xl" />
          </div>
          <div
            className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
            onClick={handleOpen}
          >
            <img
              src={languageIcon}
              alt="language-icon"
              className="h-[35px] w-[35px] max-w-[35px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-6/12 items-center md:mt-2 mt-8">
          <h1 className="text-2xl text-center font-semibold text-[#2A3980]">
            Login to your Account
          </h1>
          <p className="text-lg text-center font-medium mt-2">
            Don&apos;t worry,only you can see your personal data. No one else
            will be able to see it
          </p>

          <div className="p-3 rounded-full shadow-lg w-[120px] h-[120px] flex justify-center items-center mt-8 mb-8">
            <img src={Logo} alt="" className="w-[80px] h-[70px]" />
          </div>
          <div className="flex w-full">
            <form className="w-full flex flex-col">
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <div className="flex w-full relative">
                  <input
                    type={isPasswordShow ? "text" : "password"}
                    id="password"
                    name="password"
                    className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                    placeholder="Enter Password"
                    required
                  />
                  {isPasswordShow ? (
                    <IoEyeOff
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsPasswordShow(!isPasswordShow);
                      }}
                    />
                  ) : (
                    <IoEyeSharp
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsPasswordShow(!isPasswordShow);
                      }}
                    />
                  )}
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="text-[#10A37F] text-right font-semibold"
              >
                Forgot the password?
              </Link>
              <button className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8" onClick={()=>navigate('/dashboard')}>
                Login
              </button>
              <p className="text-center text-[#7E7E7E] mt-2">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[#FC7700] underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-5/12 md:flex hidden h-full">
        <img
          src={LoginImg}
          alt="login img"
          className="w-full h-full rounded-3xl object-fill"
        />
      </div>



      <Dialog open={open} handler={handleOpen} className="p-4 rounded-3xl">
        <div className="flex w-full relative">
          <input
            type="text"
            className="rounded-3xl p-2 px-4 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
            placeholder="Search language"
          />
          <CiSearch className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]" />
        </div>
        <div className="flex flex-wrap mt-8 mb-8 justify-center">
          {Array.isArray(language) &&
            language.map((item, key) => (
              <div className="md:w-4/12 lg:w-3/12 w-6/12 px-2" key={key}>
                <button
                  className={`${
                    selectedLanguage === item
                      ? "bg-[#2A3980] text-white"
                      : "bg-[#D4DBFF] text-black"
                  } flex items-center justify-center gap-[3px] rounded-lg  py-1 mt-2 mb-2  w-full`}
                  onClick={() => handleLanguageSelect(item)}
                >
                  {item}
                  {selectedLanguage === item ? (
                    <BsCheck2 className="font-bold text-xl" />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            ))}
        </div>
        <div className="flex w-full justify-end mt-8 mb-8 px-4">
          <Link className="font-semibold text-[#10A37F] underline">
            See all
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-[15px]">
            <p className="text-[#A59898]" onClick={handleOpen}>
              Cancel
            </p>
            <button
              className="bg-[#10A37F] rounded-2xl text-white px-8 py-1"
              onClick={handleOpen}
            >
              Apply
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SignIn;
