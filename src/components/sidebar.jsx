import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@material-tailwind/react";
import Logo from "../assets/images/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { toggleSidebar } from "../redux/slice/sidebarSlice";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import locationIcon from "../assets/images/location-icon.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const openSidebar = useSelector((state) => state.sidebar.openSidebar);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [locationManual, setLocationManual] = useState(false);

  const handleLocationModal = () => {
    setOpenLocationModal(!openLocationModal);
  };
  return (
    <div className="w-full flex flex-col justify-between h-[100vh] shadow-xl bg-white">
      <div className="w-full">
        <div
          className={`${
            !openSidebar ? "px-4" : ""
          } flex items-center justify-center gap-[10px] w-full mt-4`}
        >
          <div
            className="p-2 rounded-full shadow-lg w-[60px] h-[60px] flex justify-center items-center cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          >
            <img src={Logo} alt="" className="w-[50px] h-[50px]" />
          </div>
          {openSidebar && (
            <h3 className="text-[#2A3980] text-2xl font-semibold">KAAM 365</h3>
          )}
        </div>
        <div className="w-full mt-8">
          <ul className="flex flex-col  w-full">
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/")}
            >
              {openSidebar ? (
                "Dashboard"
              ) : (
                <AiOutlineDashboard className="text-2xl" />
              )}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/jobs" ||
                location.pathname === "/dashboard/create-vacancy"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/jobs")}
            >
              {openSidebar ? (
                "Jobs"
              ) : (
                <HiOutlineAcademicCap className="text-2xl" />
              )}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/post-jobs"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/post-jobs")}
            >
              {openSidebar ? (
                "Post Jobs"
              ) : (
                <LiaBusinessTimeSolid className="text-2xl" />
              )}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/application-status"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/application-status")}
            >
              {openSidebar ? (
                "Application Status"
              ) : (
                <HiOutlineBuildingOffice2 className="text-2xl" />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`w-full px-3 pb-4 ${
          openLocationModal ? "relative z-[10000]" : ""
        }`}
        onClick={handleLocationModal}
      >
        {openSidebar ? (
          <div
            className="rounded-2xl flex flex-col p-3 py-6"
            style={{
              background:
                "linear-gradient(48deg, rgba(65,85,183,1) 0%, rgba(40,54,123,1) 68%, rgba(30,42,98,1) 100%)",
            }}
          >
            <p className="text-white font-regular text-sm">Location</p>
            <div className="flex gap-[6px] items-center mt-2">
              <div className="text-3xl  bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 inline-block text-transparent bg-clip-text">
                <FaLocationDot className="inline text-yellow-500" />
              </div>
              <p className="font-semibold text-white text-[15px]">
                Vasant Vihar, New Delhi
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <FaLocationDot className=" text-yellow-500 text-4xl text-center" />
          </div>
        )}
      </div>
      <Dialog
        handler={handleLocationModal}
        open={openLocationModal}
        className={` py-4 ${locationManual?'pt-8 px-4 rounded-[40px]':'px-8  rounded-[50px]'} md:max-w-[365px] md:min-w-[365px] lg:max-w-[365px] lg:min-w-[365px] 2xl:min-w-[365px] 2xl:max-w-[365px]  bg-white flex flex-col items-center font-poppins`}
      >
        {locationManual ? (
          <>
            <div className="w-full flex justify-between">
              <p className="text-[#2A3980] text-base font-semibold">
                change location
              </p>
              <p
                className="font-regular text-sm text-[#455154] cursor-pointer"
                onClick={() => setLocationManual(!locationManual)}
              >
                Cancel
              </p>
            </div>
            <div className="w-full mt-3">
              <div className="w-full">
                <p className="text-[#3A3A3A] text-base">
                  Where are you currently staying?
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-[rgba(58,58,58,0.24)] w-full text-[#3A3A3A] py-1 font-medium placeholder:text-[#3A3A3A]" placeholder="Ludhiana"
                />
              </div>
              <div className="w-full mt-4">
                <p className="text-[#3A3A3A] text-base">
                  Select Locality
                </p>
                <input
                  type="text"
                  className="outline-none border-b-2 border-[rgba(58,58,58,0.24)] w-full text-[#3A3A3A] py-1 font-medium placeholder:text-[#3A3A3A]" placeholder="Select-33 Yamuna Expressway"
                />
              </div>
              <button
              className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-10"
              onClick={handleLocationModal}
            >
              Save
            </button>
            </div>
          </>
        ) : (
          <>
            <div className="rounded-full bg-[#FFF9F1] p-4 relative top-[-40px] shadow-lg">
              <img src={locationIcon} alt="" className="h-[60px] w-[60px]" />
            </div>
            <h1 className="text-2xl text-center text-black font-medium">
              What is your location?
            </h1>
            <p className="text-center text-[#3A3A3A] text-sm mt-2">
              To find the local talent.
            </p>
            <button
              className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-16"
              onClick={handleLocationModal}
            >
              Allow Location access
            </button>
            <p
              className="underline text-center text-[#10A37F] font-medium text-base mt-4 cursor-pointer"
              onClick={() => setLocationManual(!locationManual)}
            >
              Enter Location Manually
            </p>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Sidebar;
