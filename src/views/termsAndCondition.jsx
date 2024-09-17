import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/images/signup-form-img.png";
import { HiChevronLeft } from "react-icons/hi2";
import languageIcon from "../assets/images/language-icon.svg";
import { Dialog } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

const TermsAndCondition = () => {
  const navigate = useNavigate();
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
    <div
      className="w-full flex h-[100vh] overflow-hidden p-2"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="w-6/12 flex flex-col items-center h-[100%] overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-11/12 flex justify-between mt-4 items-center">
          <div
            className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
            onClick={() => navigate("/dashboard")}
          >
            <HiChevronLeft className="text-3xl" />
          </div>
          <h1 className="text-2xl text-[#2A3980] font-semibold">
            Terms and Conditions
          </h1>
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
        <div className="mt-16 flex flex-col px-10">
          <p className="text-sm text-[#3A3A3A] text-justify font-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            dictum turpis. Fusce hendrerit quam vel mauris ullamcorper euismod.
          </p>
          <ul className="list-decimal  ps-6 my-2 " role="list">
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Integer congue leo non augue tincidunt varius. Duis consequat
              justo et urna vulputate ultricies. Cras malesuada ante eget eros
              tincidunt, at congue libero varius. Vivamus tincidunt tortor vel
              efficitur ullamcorper.
            </li>
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Nam scelerisque aliquam nibh, a condimentum nulla sollicitudin
              vel. Proin bibendum velit eu justo scelerisque, vel tincidunt
              risus facilisis.
            </li>
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Nulla facilisi. Sed ultrices efficitur nisl, non elementum justo
              tincidunt eu. Suspendisse eu fringilla risus. Curabitur efficitur
              nunc vel quam cursus, eu convallis orci commodo. Integer eget
              tristique libero, eu gravida elit.
            </li>
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Etiam finibus, felis ut ultricies tincidunt, erat justo
              scelerisque dui, ac pharetra lectus tellus non justo. Suspendisse
              malesuada ligula in velit tincidunt, non vulputate metus iaculis.
              Donec id dolor id purus varius ornare.
            </li>
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Nulla facilisi Praesent tincidunt, mauris quis lacinia tincidunt,
              dolor enim ullamcorper purus, in convallis ligula justo in turpis.
              Quisque ut tincidunt felis.
            </li>
            <li className="text-sm text-[#3A3A3A] text-justify font-regular my-2">
              Sed id lacinia neque. Vestibulum vel turpis sapien. In
              consectetur, orci non vulputate vulputate, libero odio bibendum
              felis, at tempus justo arcu at justo. Vivamus vel ex volutpat,
              bibendum odio vel, ullamcorper tellus. Quisque efficitur fringilla
              sem at aliquam. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Sed auctor leo non sem
              tincidunt, at malesuada ex ullamcorper.
            </li>
          </ul>
          <p className="text-sm text-[#3A3A3A] text-justify font-regular">
            Fusce eu nisl a enim elementum blandit ut ut nisi. Pellentesque
            vitae sapien in tellus elementum malesuada. Suspendisse at lectus eu
            odio vehicula auctor at id massa. Duis in lectus purus. Sed a
            malesuada est, vel aliquet orci. Nunc varius, quam et scelerisque
            varius, nunc nisi tristique lorem, eu hendrerit sapien sapien ac
            enim. Praesent varius arcu at massa fringilla, non scelerisque
            libero facilisis. Sed blandit dui vel diam fermentum, a congue mi
            efficitur. Vivam
          </p>
        </div>
      </div>
      <div className="w-6/12">
        <img src={Image} alt="" className="w-full h-full rounded-2xl" />
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

export default TermsAndCondition;
