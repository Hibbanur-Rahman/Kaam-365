import React, { useState } from "react";
import SignUpFormImg from "../assets/images/signup-form-img.png";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default country code

  const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+61", name: "Australia" },
    { code: "+971", name: "UAE" },
    { code: "+86", name: "China" },
  ];
  const navigate = useNavigate();
  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handleSubmit = () => {
    navigate('/verifyCode');
  };

  return (
    <div
      className="w-full flex justify-between h-[100vh] overflow-hidden p-3"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="md:w-7/12 w-full flex flex-col  items-center h-[100vh] overflow-y-scroll scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-start w-full">
          <div className="p-2 rounded-full shadow-lg w-[60px] h-[60px] flex justify-center items-center  mb-8">
            <img src={Logo} alt="" className="w-[50px] h-[50px]" />
          </div>
        </div>
        <div className="md:w-7/12 w-full">
          <h1 className="font-bold text-2xl text-[#2A3980]">
            Sign Up for free
          </h1>
          <form action="" className="w-full flex flex-col mt-8 mb-8">
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="fullName" className="font-semibold">
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
              <label htmlFor="companyName" className="font-semibold">
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
                  placeholder="***************"
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
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="mobileNumber" className="font-semibold">
                Mobile Number
              </label>
              <div className="flex w-full relative mt-2">
                <select
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  className="rounded-l-xl p-2 py-0 text-[16px] w-[65px] bg-[#F6F6F6] border-r-0 text-gray-500 outline-none"
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
                  maxLength={10} // Limit input to 10 digits
                />
              </div>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" className="bg-[#10A37F]" />
              <p className="text-black font-semibold">
                Agree with{" "}
                <Link className="text-[#10A37F] underline" to="#">
                  {" "}
                  Terms & Condition
                </Link>
              </p>
            </div>
            <button className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8" onClick={handleSubmit}>
              Sign up
            </button>
            <p className="text-center text-[#7E7E7E] mt-2">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-[#FC7700] underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="w-5/12 md:flex hidden h-full  bg-cover">
        <img
          src={SignUpFormImg}
          alt="SignUp img"
          className="w-full h-full rounded-3xl object-fill"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
