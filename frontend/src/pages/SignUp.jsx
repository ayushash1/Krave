import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const SignUp = () => {
  const bgcolor = "#F9F9F9";
  const primaryColor = "#00B894";
  const secondaryColor = "#55E6C1";
  const textColor = "#2C3E50";
  const accentColor = "#FF6B6B";
  const lightBg = "#F0F8F5";
  const [showPassword, setShowPassword] = useState(false);

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

        <div className="space-y-5">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullname"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Full Name
            </label>
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
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              placeholder="Enter your full name"
            />
          </div>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Email
            </label>
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
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              placeholder="Enter your email"
            />
          </div>
          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="number"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: lightBg,
                borderColor: secondaryColor,
                borderWidth: "1.5px",
                color: textColor,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px rgba(85, 230, 193, 0.1)`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block font-semibold mb-2 text-sm"
              style={{ color: textColor }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: lightBg,
                  borderColor: secondaryColor,
                  borderWidth: "1.5px",
                  color: textColor,
                }}
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
            <button
              type="button"
              className="w-full mt-10 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
