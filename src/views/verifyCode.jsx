import React, { useState, useRef } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
import verifyCodeImg from "../assets/images/verify-code-img.png";
import LoaderGif from "../assets/images/Circle-loader.gif";
import successGif from "../assets/images/success-gif.gif";
import toast from "react-hot-toast";
import axios from "axios";

const VerifyCode = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate=useNavigate();
  const location=useLocation();
  const {email,password}=location.state||{};
  
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const response=await axios.post(`${import.meta.env.VITE_API_URL}/authms/auth/confirm-otp`,{
        email:email,
        OTP:otp.join(""),
        password:password
      });
      if(response.status==200){
        toast.success("Otp Verified");
        setLoading(false);
        setSuccess(true);
      }
      console.log("Submit button clicked", otp.join(""));
     
    }catch(error){
      console.log("Error in verifying Opt:",error);
      toast.error("Failed to Verify Otp");
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full flex justify-between h-[100vh] overflow-hidden relative"
      style={{ scrollbarWidth: "none" }}
    >
      {success ? (
        <div className="md:w-7/12 w-full p-3 flex flex-col items-center h-[100vh] overflow-y-hidden scroll-smooth">
          <div className="w-[80%] h-[80%] flex flex-col justify-center items-center relative">
            <img src={successGif} alt="success" className="" />
            <h2 className="text-4xl mt-8 mb-2 font-bold text-[#2A3980] text-center">
              CONGRATULATIONS
            </h2>
            <p className="text-[#3A3A3A]">Your account is all set!</p>
          </div>
        </div>
      ) : (
        <div
          className="md:w-7/12 w-full p-3 flex flex-col items-center h-[100vh] overflow-y-scroll scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex justify-start w-full">
            <div className="rounded-full bg-white shadow-xl h-min w-min p-2 flex items-center justify-center cursor-pointer hover:bg-slate-50" onClick={()=>navigate('/signupForm')}>
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
            <p className="text-[#EC8B09] text-center">{email}</p>

            <form
              className="w-full flex flex-col mt-10"
              onSubmit={(e)=>handleSubmit(e)}
            >
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

              <p className="mt-8 text-gray-500 text-center">
                Didn't receive OTP?
              </p>
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
      )}

      {/* Loader while verifying */}
      {loading && (
        <div className="md:w-7/12 w-full h-[100vh] bg-[rgba(23,23,23,0.6)] flex items-center justify-center absolute">
          <div className="flex h-[100px] w-[100px] rounded-lg bg-white">
            <img src={LoaderGif} alt="loader" className="h-full w-full" />
          </div>
        </div>
      )}

      <div className="w-5/12 md:flex hidden h-full p-3 bg-cover">
        <img
          src={verifyCodeImg}
          alt="login img"
          className="w-full h-full rounded-3xl object-fill"
        />
      </div>
    </div>
  );
};

export default VerifyCode;
