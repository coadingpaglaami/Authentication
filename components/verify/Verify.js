"use client";
import React, { useRef, useEffect, useState } from "react";

export const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [buttonText, setButtonText] = useState("Verify OTP");

  useEffect(() => {
    // Update button state based on whether all OTP digits are filled
    const allFilled = otp.every((digit) => digit.length === 1);
    setIsButtonDisabled(!allFilled);
  }, [otp]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    console.log(otp);
    newOtp[index] = value.slice(0, 1); // Limit to 1 character
    setOtp(newOtp);

    // Move focus to next input
    if (value.length === 1 && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    const demoCode = "12345"; // Demo verification code
    if (otpCode === demoCode) {
      alert("Verification successful!");
    } else {
      alert("Invalid OTP. Please try again. Demo code is 12345.");
    }
  };

  const countdownDuration = 5; // 5 seconds countdown

  const handleVerifyButton = () => {
    // Disable the button
    setIsDisabled(true);
    // Start countdown from the duration
    setCountdown(countdownDuration);
  };

  useEffect(() => {
    let timer;

    if (isDisabled && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
        setButtonText(`Resend OTP in ${countdown - 1}s`);
      }, 1000);
    } else if (countdown === 0 && isDisabled) {
      // Countdown finished
      setIsDisabled(false);
      setButtonText("Resend");
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isDisabled, countdown]);

  return (
    <div>
      <h4 className="text-2xl font-semibold text-white text-center">
        Forget Password
      </h4>
      <p className="text-lg text-white text-center">
        Please input the verification code send to your email jerry73@aol.com
      </p>
      <div className="grid gap-4 w-full ">
        <div className="flex justify-center w-full gap-6">
          {Array(5)
            .fill()
            .map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                value={otp[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`otp-input w-15 h-15 text-center ${
                  otp[index]
                    ? "border-2 border-green-600"
                    : "border-2 border-white"
                }  rounded-md  text-white focus:outline-none focus:border-green-600`}
                maxLength="1"
              />
            ))}
        </div>

        <button
          onClick={handleVerify}
          className=" w-full p-2 disabled:!opacity-50 disabled:!bg-white disabled:!text-black disabled:!cursor-not-allowed text-white defaultbutton  rounded-md hover:bg-indigo-700"
          disabled={isButtonDisabled}
        >
          Verify OTP
        </button>
        <button
          onClick={handleVerifyButton}
          className={`w-full p-2 rounded-md border border-[#963EC8] bg-transparent
        ${
          isDisabled
            ? "opacity-50 cursor-not-allowed text-[#8D8D8D]"
            : " text-indigo-700"
        }
        transition-colors duration-300`}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
        <div className="flex flex-row items-center gap-2">
          <hr className="flex flex-grow border-white/30 " />
          <span className="text-sm text-white/30 ">OR</span>
          <hr className="flex flex-grow border-white/30 " />
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-white h-12 w-12 p-2 rounded-md border border-gray-300">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="h-6 w-6"
            />
          </button>
          <button className="bg-white w-12 h-12 p-2 rounded-md border border-gray-300">
            <img
              src="https://www.apple.com/favicon.ico"
              alt="Apple"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
