import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import forgotPasswordImg from "../assets/images/forgot-password.png";
import { HiChevronLeft } from "react-icons/hi2";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import LoaderGif from "../assets/images/Circle-loader.gif";
import successGif from "../assets/images/success-gif.gif";
import { IoEyeSharp, IoEyeOff } from "react-icons/io5";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotMethod, setForgotMethod] = useState(null);
  const [showInputField, setShowInputField] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default country code
  const [verifyCodeShow, setVerifyCodeShow] = useState(false);
  const [resetPasswordShow, setResetPasswordShow] = useState(false);
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleMoveToVerifyCodeContinueBtn = () => {
    verifyCodeShow(true);
  };

  // Handle change in OTP input fields
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Update OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if the current input is filled
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace to move to the previous input field
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    console.log("Submit button clicked", otp.join(""));
    // setLoading(true);
    setResetPasswordShow(true);

    // setSuccess(true);
  };

  const handleSubmitResetPassword = (e) => {
    // e.preventDefault();
    // Handle password reset logic here
    setSuccess(true);
  };

  const RenderForgotMethod = () => (
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
  );

  const RenderEmailSMS = () => (
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
          onClick={() => setVerifyCodeShow(true)}
        >
          Continue
        </button>
      </div>
    </div>
  );

  const RenderOtpUi = () => (
    <div
      className="md:w-7/12 w-full p-3 flex flex-col items-center h-[100vh] overflow-y-scroll scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-start w-full">
        <div
          className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
          onClick={() => navigate("/signupForm")}
        >
          <HiChevronLeft className="text-3xl" />
        </div>
      </div>
      <div className="md:w-5/12 w-full p-3 h-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-[#2A3980] text-center mb-3">
          Verify Code
        </h1>
        <p className="text-gray-600 text-center">
          Please enter the code we just sent to your email
        </p>
        <p className="text-[#EC8B09] text-center">RohitKumar@gmail.com</p>

        <form className="w-full flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                placeholder="-"
                className="text-[#3A3A3A] border w-14 h-14 text-center text-2xl font-semibold text-slate-900 bg-[#F6F6F6] hover:border-slate-200 appearance-none rounded-xl p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder:font-medium placeholder:text-3xl"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>

          <p className="mt-8 text-gray-500 text-center">Didn't receive OTP?</p>
          <Link className="underline text-[#10A37F] text-center font-semibold">
            Resend Code
          </Link>
          <button
            type="submit"
            className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );

  const RenderSuccess = () =>
    success && (
      <div className="md:w-7/12 w-full p-3 flex flex-col items-center h-[100vh] overflow-y-hidden scroll-smooth">
        <div className="w-[80%] h-[80%] flex flex-col justify-center items-center relative">
          <img src={successGif} alt="success" className="" />
          <h2 className="text-4xl mt-8 mb-2 font-bold text-[#2A3980] text-center">
            CONGRATULATIONS
          </h2>
          <p className="text-[#3A3A3A]">Your account is all set!</p>
        </div>
      </div>
    );

  const RenderLoading = () =>
    loading && (
      <div className="md:w-7/12 w-full h-[100vh] bg-[rgba(23,23,23,0.6)] flex items-center justify-center absolute">
        <div className="flex h-[100px] w-[100px] rounded-lg bg-white">
          <img src={LoaderGif} alt="loader" className="h-full w-full" />
        </div>
      </div>
    );

  const RenderResetPasswordForm = () =>
    (
      <div
      className="md:w-7/12 w-full p-3 flex flex-col items-center  h-[100vh] overflow-y-scroll scroll-smooth"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-start w-full">
        <div
          className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50"
          onClick={() => navigate("/signupForm")}
        >
          <HiChevronLeft className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col md:w-6/12 items-center justify-center h-full md:mt-2 mt-8">
        <h1 className="text-2xl text-center font-semibold text-[#2A3980] mb-16">
          Reset Password
        </h1>
        
        <div className="flex w-full">
          <form
            className="w-full flex flex-col"
            action="/api/resetpassword"
            method="POST"
            onSubmit={(e) => handleSubmitResetPassword(e)}
          >
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
            <div className="flex flex-col w-full mb-4 ">
              <label htmlFor="confirmPassword" className="font-semibold">
                Confirm Password
              </label>
              <div className="flex w-full relative">
                <input
                  type={isConfirmPasswordShow ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="rounded-xl p-3 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
                  placeholder="Enter old Password"
                  required
                />
                {isConfirmPasswordShow ? (
                  <IoEyeOff
                    className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                    onClick={() => {
                      setIsConfirmPasswordShow(!isConfirmPasswordShow);
                    }}
                  />
                ) : (
                  <IoEyeSharp
                    className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]"
                    onClick={() => {
                      setIsConfirmPasswordShow(!isConfirmPasswordShow);
                    }}
                  />
                )}
              </div>
            </div>

            <button
              
              className="bg-[#10A37F] text-lg text-white rounded-full p-3 w-full max-w-full mt-8"
              onClick={(e) => handleSubmitResetPassword(e)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      </div>
    );

  return (
    <div
      className="w-full flex justify-between h-[100vh] overflow-hidden p-3"
      style={{ scrollbarWidth: "none" }}
    >
      {!verifyCodeShow && !showInputField ? (
        <RenderForgotMethod />
      ) : (
        <>
          {!verifyCodeShow ? (
            <RenderEmailSMS />
          ) : (
            <>
              {resetPasswordShow ? success?<RenderSuccess/>: <RenderResetPasswordForm /> : <RenderOtpUi />}

              {/* Loader while verifying */}
              <RenderLoading />
            </>
          )}
        </>
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
