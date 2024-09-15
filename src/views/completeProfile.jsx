import Logo from "../assets/images/logo.svg";
import { Link,useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const CompleteProfile = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full flex flex-col items-center p-5">
      <div className="flex justify-start w-full">
        <div className="p-2 rounded-full shadow-lg w-[60px] h-[60px] flex justify-center items-center  mb-8 cursor-pointer" onClick={()=>navigate('/dashboard')}>
          <img src={Logo} alt="" className="w-[50px] h-[50px]" />
        </div>
      </div>
      <div className="w-8/12 flex flex-col">
        <h1 className="text-xl font-semibold text-[#2A3980]">
          Complete your profile
        </h1>
        <div className="border-[1px] border-[#949494] shadow-xl rounded-2xl p-8 relative mt-5">
          <form action="" className="w-full flex  justify-between">
            <div className="w-[80px] h-[80px] rounded-full bg-[#DDE3FF] absolute top-[-40px] left-[47%] flex justify-center items-center  border-[#747474] border-[1px]">
              <FaCloudUploadAlt className="text-[#2A3980] text-4xl" />
            </div>
            <div className="w-5/12">
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="fullName" className="font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Ex. Amar Jha."
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="companyName" className="font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Ex. Oracle."
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="establishedDate" className="font-medium">
                  Established Date
                </label>
                <input
                  type="date"
                  id="establishedDate"
                  name="establishedDate"
                  required
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="05-12-2004"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="location" className="font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Gachibowli"
                />
              </div>
            </div>
            <div className="w-5/12">
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="aboutCompany" className="font-medium">
                  About Company
                </label>
                <textarea
                  type="text"
                  id="aboutCompany"
                  name="aboutCompany"
                  required
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full h-[150px] outline-none focus:border mt-2 resize-none"
                  placeholder="About Company"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="companyAddress" className="font-medium">
                  Company Address
                </label>
                <input
                  type="text"
                  id="companyAddress"
                  name="companyAddress"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Ex. Oracle."
                  required
                />
              </div>

              <div className="flex flex-col w-full mb-4">
                <label htmlFor="GSTNumber" className="font-medium">
                  GST Number
                </label>
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="GST Number"
                  required
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="PANNumber" className="font-medium">
                  PAN Number
                </label>
                <input
                  type="text"
                  id="PANNumber"
                  name="PANNumber"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="PAN Number"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-4/12 max-w-full mt-8"
            onClick={() => navigate("/dashboard")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
