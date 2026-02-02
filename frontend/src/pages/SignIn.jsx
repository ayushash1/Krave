import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const bgcolor = "#F9F9F9";
  const primaryColor = "#00B894";
  const secondaryColor = "#55E6C1";
  const textColor = "#2C3E50";
  const accentColor = "#FF6B6B";
  const lightBg = "#F0F8F5";

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_API_URL + "/api/auth/signin",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

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
        <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
          Krave
        </h1>
        <p className="text-gray-500 mb-8 font-medium">Login to get started</p>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            {/* <label
              htmlFor="email"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Email
            </label> */}
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: lightBg,
                borderColor: secondaryColor,
                borderWidth: "1.5px",
                color: textColor,
              }}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              placeholder="Email Address"
            />
          </div>
          {/* Password Input */}
          <div>
            {/* <label
              htmlFor="password"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Password
            </label> */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: lightBg,
                  borderColor: secondaryColor,
                  borderWidth: "1.5px",
                  color: textColor,
                }}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) =>
                  (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <GoEye /> : <GoEyeClosed />}
              </button>
            </div>
          </div>
          <div className="text-right mt-2 cursor-pointer hover:underline text-[#00B894]">
            <p className="text-sm" onClick={() => navigate("/forgot-password")}>Forgot Password? </p>
          </div>
          {/* Login Button */}
          <button
            type="button"
            className="w-full mt-2 bg-linear-to-r from-teal-500 to-cyan-500 text-white cursor-pointer font-semibold py-3 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            onClick={handleSubmit}
          >
            Login
          </button>{" "}
          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-gray-200"></div>{" "}
            <span className="shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="grow border-t border-gray-200"></div>{" "}
          </div>
          {/* Login with google button */}
          <button
            type="button"
            className="w-full mt-1 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center"
          >
            <FcGoogle className="inline mr-2 text-2xl bg-white rounded-full" />
            Login with Google
          </button>
          <div>
            <p className="text-sm mt-6 text-center text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-teal-500 font-semibold hover:underline cursor-pointer"
                onClick={() => navigate("/signup", { replace: true })}
              >
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
