import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";

const ForgotPassword = () => {
  const bgcolor = "#F9F9F9";
  const primaryColor = "#00B894";
  const secondaryColor = "#55E6C1";
  const textColor = "#2C3E50";
  const accentColor = "#FF6B6B";
  const lightBg = "#F0F8F5";
  const [step, setStep] = useState(3);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);

  const passwordsMatch = password === confirmPassword;
  const showError = !passwordsMatch && touched;

  const navigate = useNavigate();
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
        {step == 1 && (
          <div>
            <p className="text-xl font-bold" style={{ color: textColor }}>
              Forgot Password
            </p>

            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <p className="text-gray-500 mt-4 mb-6 font-medium">
              Please enter your email address linked to your account.
            </p>
            <input
              type="text"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-none"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <button className="w-full mt-4 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center">
              Send Reset Link
            </button>
            <div>
              <p
                className="text-sm mt-6 text-center text-gray-500 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </p>
            </div>
          </div>
        )}

        {step == 2 && (
          <div>
            <p className="text-xl font-bold" style={{ color: textColor }}>
              Verify OTP
            </p>

            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <p className="text-gray-500 mt-4 mb-6 font-medium">
              Please enter the OTP sent to your email address.
            </p>
            <input
              type="text"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-none"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <button className="w-full mt-4 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center">
              Verify OTP
            </button>
          </div>
        )}

        {step == 3 && (
          <div>
            <p className="text-xl font-bold" style={{ color: textColor }}>
              Reset Password
            </p>

            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <p className="text-gray-500 mt-4 mb-6 font-medium">
              Please enter your new password.
            </p>
            <input
              type="password"
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-none"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-none ${
                  showError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => setTouched(true)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <GoEye /> : <GoEyeClosed />}
              </button>
            </div>
            {showError && (
              <p className="text-sm mb-4" style={{ color: accentColor }}>
                Passwords do not match
              </p>
            )}
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-gray-200"></div>
            </div>

            <button className="w-full mt-4 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center">
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
