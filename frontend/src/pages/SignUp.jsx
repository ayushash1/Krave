import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const bgcolor = "#F9F9F9";
  const primaryColor = "#00B894";
  const secondaryColor = "#55E6C1";
  const textColor = "#2C3E50";
  const accentColor = "#FF6B6B";
  const lightBg = "#F0F8F5";

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState(false);

  const passwordsMatch = password === confirmPassword;
  const showError = !passwordsMatch && touched;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_API_URL + "/api/auth/signup",
        {
          name,
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
        <p className="text-gray-500 mb-8 font-medium">Sign up to get started</p>

        <form className="space-y-4">
          {/* Full Name Input */}
          <div>
            {/* <label
              htmlFor="fullname"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Name
            </label> */}
            <input
              type="text"
              id="fullname"
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: lightBg,
                borderColor: secondaryColor,
                borderWidth: "1.5px",
                color: textColor,
              }}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              placeholder="Name"
            />
          </div>
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
          {/* Password Input */}
          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onBlur={() => setTouched(true)}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: lightBg,
                border: "1.5px solid",
                borderColor: showError
                  ? accentColor
                  : passwordsMatch
                    ? primaryColor
                    : secondaryColor,
                color: textColor,
              }}
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <GoEye /> : <GoEyeClosed />}
            </button>
          </div>
          {/* Register Button */}
          <button
            type="button"
            className="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white cursor-pointer font-semibold py-3 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            onClick={handleSubmit}
          >
            Register
          </button>{" "}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>{" "}
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>{" "}
          </div>
          {/* Signup with google button */}
          <button
            type="button"
            className="w-full mt-1 border-2 border-teal-500 text-gray-700 font-semibold cursor-pointer py-3 px-4 rounded-lg hover:bg-teal-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 flex items-center justify-center"
          >
            <FcGoogle className="inline mr-2 text-2xl bg-white rounded-full" />
            Sign up with Google
          </button>
          <div>
            <p className="text-sm mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <span
                className="text-teal-500 font-semibold hover:underline cursor-pointer"
                onClick={(e) => navigate("/login", { replace: true })}
              >
                Log In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
