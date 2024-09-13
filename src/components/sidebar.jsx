import Logo from "../assets/images/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/slice/sidebarSlice";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const openSidebar = useSelector((state) => state.sidebar.openSidebar);
  return (
    <div className="w-full flex flex-col justify-between h-[100vh] shadow-xl bg-white">
      <div className="w-full">
        <div className={`${!openSidebar?'px-4':''} flex items-center justify-center gap-[10px] w-full mt-4`}>
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
              {openSidebar ? "Dashboard" : <AiOutlineDashboard className="text-2xl"/>}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/jobs" || location.pathname==='/dashboard/create-vacancy'
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/jobs")}
            >
              {openSidebar ? "Jobs" : <HiOutlineAcademicCap className="text-2xl"/>}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/post-jobs"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/post-jobs")}
            >
              {openSidebar ? "Post Jobs" : <LiaBusinessTimeSolid className="text-2xl"/>}
            </li>
            <li
              className={`flex p-3  w-full ${
                location.pathname === "/dashboard/application-status"
                  ? "px-4 border-l-[6px] border-[#2A3980] bg-[#E2E7FF] text-[#2A3980]"
                  : "px-6"
              } hover:bg-[#e2e2f560] cursor-pointer hover:text-[#2A3980] transition duration-300 font-medium`}
              onClick={() => navigate("/dashboard/application-status")}
            >
              {openSidebar ? "Application Status" : <HiOutlineBuildingOffice2 className="text-2xl"/>}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 pb-4">
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
    </div>
  );
};

export default Sidebar;
