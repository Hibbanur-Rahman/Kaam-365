import React from "react";
import LoginImg from "../assets/images/login-side-img.png";
import { HiChevronLeft } from "react-icons/hi2";
import languageIcon from "../assets/images/language-icon.svg";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="w-full flex justify-between p-3 h-[100vh]">
      <div className="w-7/12 flex flex-col items-center">
        <div className="flex w-11/12 justify-between ">
          <div className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            <HiChevronLeft className="text-3xl" />
          </div>
          <div className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            <img
              src={languageIcon}
              alt="language-icon"
              className="h-[35px] w-[35px] max-w-[35px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-5/12  items-center">
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
                  type="text"
                  id="email"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="email" className="font-semibold">
                  Password
                </label>
                <input
                  type="text"
                  id="email"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Enter Password"
                />
              </div>
              <Link
                to="/forgot-password"
                className="text-[#10A37F] text-right font-semibold"
              >
                Forgot the password?
              </Link>
              <button
                className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8">
                Login
              </button>
              <p className="text-center text-[#7E7E7E] mt-2">Don't have an account? <Link className="font-semibold text-[#FC7700] underline">Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
      <div className="w-5/12 h-full">
        <img
          src={LoginImg}
          alt="login img"
          className="w-full h-full rounded-3xl object-fill"
        />
      </div>
    </div>
  );
};

export default SignIn;
