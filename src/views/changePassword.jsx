import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../assets/images/login-side-img.png";
import { HiChevronLeft } from "react-icons/hi2";
import languageIcon from "../assets/images/language-icon.svg";
import Logo from "../assets/images/logo.svg";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { Dialog } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [isOldPasswordShow, setIsOldPasswordShow] = useState(false);
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Update this to store the selected language
  const [success, setSuccess] = useState(false);
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

  const handleSuccessModal = () => setSuccess(!success);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess(true);
    } catch (error) {
      console.log("Error in submitting the form:", error);
    }
  };

  return (
    <div className="w-full flex justify-between p-3 h-[100vh] overflow-hidden">
      <div
        className="md:w-7/12 w-full flex flex-col items-center h-[100vh] overflow-y-scroll scroll-smooth pb-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex w-11/12 justify-between ">
          <div
            className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
            onClick={() => navigate("/dashboard")}
          >
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
            Change Password
          </h1>
          <p className="text-lg text-center font-medium mt-2">
            Don&apos;t worry,only you can see your personal data. No one else
            will be able to see it
          </p>

          <div className="p-3 rounded-full shadow-lg w-[120px] h-[120px] flex justify-center items-center mt-8 mb-8">
            <img src={Logo} alt="" className="w-[80px] h-[70px]" />
          </div>
          <div className="flex w-full">
            <form
              className="w-full flex flex-col"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex flex-col w-full mb-4 ">
                <label htmlFor="oldPassword" className="font-semibold">
                  Old Password
                </label>
                <div className="flex w-full relative">
                  <input
                    type={isOldPasswordShow ? "text" : "password"}
                    id="oldPassword"
                    name="oldPassword"
                    className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                    placeholder="Enter old Password"
                    required
                  />
                  {isOldPasswordShow ? (
                    <IoEyeOff
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsOldPasswordShow(!isOldPasswordShow);
                      }}
                    />
                  ) : (
                    <IoEyeSharp
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsOldPasswordShow(!isOldPasswordShow);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full mb-4 ">
                <label htmlFor="newPassword" className="font-semibold">
                  New Password
                </label>
                <div className="flex w-full relative">
                  <input
                    type={isNewPasswordShow ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                    placeholder="Enter new Password"
                    required
                  />
                  {isNewPasswordShow ? (
                    <IoEyeOff
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsNewPasswordShow(!isNewPasswordShow);
                      }}
                    />
                  ) : (
                    <IoEyeSharp
                      className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                      onClick={() => {
                        setIsNewPasswordShow(!isNewPasswordShow);
                      }}
                    />
                  )}
                </div>
              </div>

              <button
                className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8"
                onClick={(e) => handleSubmit(e)}
              >
                Save
              </button>
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
      <Dialog
        open={success}
        handler={handleSuccessModal}
        className="md:max-w-[400px] md:min-w-[400px] lg:max-w-[400px] lg:min-w-[400px] 2xl:min-w-[400px] 2xl:max-w-[400px]  rounded-3xl bg-white flex flex-col items-center"
      >
        <div className="w-11/12 mt-3 flex justify-end">
          <div className="rounded-full border-2 border-[#000] h-min w-min p-1 cursor-pointer hover:bg-gray-100" onClick={handleSuccessModal}>
            <HiOutlineXMark className="text-xl text-black" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center h-full  mt-12 mb-16">
        <h3 className="text-center text-2xl text-[#2A3980] font-semibold">Successful</h3>
        <p className="text-center text-black">Password Changed<br/> Successfully</p>
        </div>
        
      </Dialog>
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

export default ChangePassword;
