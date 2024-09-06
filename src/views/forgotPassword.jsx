import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotPasswordImg from "../assets/images/forgot-password.png";
import { HiChevronLeft } from "react-icons/hi2";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotMethod, setForgotMethod] = useState(null);
  const [showInputField, setShowInputField] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default country code

  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    // Add more country codes if needed
  ];

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handleContinueChooseMethod = () => {
    setShowInputField(true);
  };

  return (
    <div
      className="w-full flex justify-between h-[100vh] overflow-hidden p-3"
      style={{ scrollbarWidth: "none" }}
    >
      {!showInputField ? (
        <div
          className="md:w-7/12 w-full flex flex-col  items-center h-[100vh] overflow-y-scroll scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-start w-11/12">
            <div
              className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
              onClick={() => {
                navigate("/signin");
              }}
            >
              <HiChevronLeft className="text-3xl" />
            </div>
          </div>
          <div className="w-5/12 flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-semibold text-[#2A3980] mb-8">
              Forgot Password
            </h1>
            <div
              className={`rounded-3xl cursor-pointer hover:bg-gray-200 ${
                forgotMethod === "sms"
                  ? "border-[2px] border-blue-900"
                  : "border-[1px] border-gray-500"
              } gap-[10px] py-3 px-6 mb-3 flex items-center w-full`}
              onClick={() => {
                setForgotMethod("sms");
              }}
            >
              <BsChatLeftDotsFill className="text-[#EC8B09] text-xl" />
              <p className="text-gray-500">
                Via SMS{" "}
                <span className="ms-1 font-semibold text-black">
                  +91 949***6519
                </span>
              </p>
            </div>
            <div
              className={`rounded-3xl cursor-pointer hover:bg-gray-200 ${
                forgotMethod === "email"
                  ? "border-[2px] border-blue-900"
                  : "border-[1px] border-gray-500"
              } gap-[10px] py-3 px-6 mb-3 flex items-center w-full`}
              onClick={() => {
                setForgotMethod("email");
              }}
            >
              <MdEmail className="text-[#EC8B09] text-2xl" />
              <p className="text-gray-500">
                Via Email{" "}
                <span className="ms-1 font-semibold text-black">
                  examp***@gmail.com
                </span>
              </p>
            </div>
            <button
              type="submit"
              className={`${
                forgotMethod == null ? "cursor-not-allowed" : "cursor-pointer"
              } bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8`}
              onClick={handleContinueChooseMethod}
              disabled={forgotMethod === null}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div
          className="md:w-7/12 w-full flex flex-col  items-center h-[100vh] overflow-y-scroll scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-start w-11/12">
            <div
              className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
              onClick={() => {
                setShowInputField(false);
              }}
            >
              <HiChevronLeft className="text-3xl" />
            </div>
          </div>
          <div className="w-5/12 flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-semibold text-[#2A3980] mb-2">
              Forgot Password
            </h1>
            <p className="text-center">
              Enter your contact details for password reset
            </p>
            {forgotMethod === "sms" ? (
              <div className="flex flex-col w-full mb-4 mt-8">
                <label htmlFor="mobileNumber" className="font-semibold">
                  Enter Mobile Number
                </label>
                <div className="flex w-full relative mt-2">
                  <select
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="rounded-l-xl p-2 py-0 text-[16px] w-[68px] bg-[#F6F6F6] border-r-0 text-gray-500 outline-none"
                  >
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code} ({country.name})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required
                    className="rounded-r-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border"
                    placeholder="9****826519"
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full mb-4 mt-8">
                <label htmlFor="email" className="font-semibold">
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
            )}

            <button
              className="cursor-pointer bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8"
              onClick={() => navigate("/verifyCode")}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="w-5/12 md:flex hidden h-full bg-cover">
        <img
          src={forgotPasswordImg}
          alt="Forgot Password"
          className="w-full h-full rounded-3xl object-fill"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
