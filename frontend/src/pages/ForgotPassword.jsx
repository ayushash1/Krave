import { useState } from "react";

const ForgotPassword = () => {
  const bgcolor = "#F9F9F9";
  const primaryColor = "#00B894";
  const secondaryColor = "#55E6C1";
  const textColor = "#2C3E50";
  const accentColor = "#FF6B6B";
  const lightBg = "#F0F8F5";
  const [step, setStep] = useState();
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: bgcolor }}
    >
      <div
        className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md"
        style={{
          borderColor: secondaryColor,
          borderWidth: "2px",
        }}
      >
        <p className="text-xl font-bold" style={{ color: textColor }}>
          Forgot Password
        </p>

        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-gray-200"></div>
        </div>

        <p className="text-gray-500 mt-4 mb-6 font-medium">
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <input
          type="text"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-none"
          placeholder="Enter your email address or mobile number"
        />

        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-gray-200"></div>
        </div>

        <button className="w-full mt-4 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
