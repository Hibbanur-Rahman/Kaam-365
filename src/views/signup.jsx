import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImg from "../assets/images/signup-img.png";
import SIgnupBgImg from "../assets/images/sign-up-bg.png";
import jobSeekerGif from "../assets/images/Job Seeker.gif";
import RecruiterGif from "../assets/images/Find Job Online.gif";
import languageIcon from "../assets/images/language-icon.svg";
import Logo from "../assets/images/logo.svg";
import { Dialog } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCheck2 } from "react-icons/bs";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option (Job Seeker or Recruiter)

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

  const navigate=useNavigate();

  const handleOpen = () => setOpen(!open);
  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleNavigate=()=>{
    if(selectedOption==='recruiter'){
      navigate('/signupForm');
    }
  }

  return (
    <div className="w-full flex justify-between h-[100vh] ">
      <div className="md:w-7/12 w-full flex justify-center items-center">
        <div className="md:w-8/12 w-full flex flex-col items-center rounded-3xl shadow-2xl p-3">
          <div className="flex w-full justify-end">
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
          <div className="md:w-8/12 w-full pb-6 flex flex-col justify-center items-center">
            <div className="p-3 rounded-full shadow-lg w-[120px] h-[120px] flex justify-center items-center  mb-8">
              <img src={Logo} alt="" className="w-[80px] h-[70px]" />
            </div>
            <p className="text-lg text-center font-semibold">
              &quot;Welcome to <span className="text-[#EC8B09]"> Kaam 365</span>
              , your one-stop shop for finding diverse and fulfilling jobs in
              India&quot;.
            </p>

            <h1 className="font-bold text-xl mt-12 mb-4">
              What are you looking for?
            </h1>

            <div className="flex justify-between gap-[30px]">
              {/* Job Seeker Option */}
              <div
                className={`flex flex-col items-center justify-center h-min border-2 rounded-xl cursor-pointer ${
                  selectedOption === "jobSeeker"
                    ? " border-light-blue-800"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedOption("jobSeeker")}
              >
                <img
                  src={RecruiterGif}
                  alt="Job Seeker"
                  className="h-[163px] w-[175px]"
                />
                <p className="text-center font-semibold text-lg mt-[-30px] text-[#2A3980]">
                  Job Seeker
                </p>
              </div>

              {/* Recruiter Option */}
              <div
                className={`flex flex-col items-center justify-center h-min border-2 rounded-xl cursor-pointer ${
                  selectedOption === "recruiter"
                    ? " border-light-blue-800"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedOption("recruiter")}
              >
                <img
                  src={jobSeekerGif}
                  alt="Recruiter"
                  className="h-[163px] w-[175px]"
                />
                <p className="text-center font-semibold text-lg mt-[-30px] text-[#2A3980]">
                  Recruiter
                </p>
              </div>
            </div>

            <button className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8" onClick={handleNavigate}>
              Continue
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-5/12 md:flex hidden h-full p-3 bg-cover"
        style={{ backgroundImage: `url(${SIgnupBgImg})` }}
      >
        <img
          src={SignUpImg}
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

export default SignUp;
