import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/token.js";
import { sendOtpMail } from "../utils/mailer.js";

// Signup controller
// Signup controller
export const signUp = async (req, res) => {
  try {
    const { name, email, password, mobile, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password Must be atleast 8 characters" });
    }

    // Only validate mobile if it's provided
    if (mobile && mobile.length < 10) {
      return res
        .status(400)
        .json({ message: "Mobile number should be atleast 10 digits" });
    }

    // hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const user = await User.create({
      username: name, // Map name to username
      email,
      password: hashedPassword, // Map hashedPassword to password field
      number: mobile, // Map mobile to number field
      role,
    });

    // generate token and set cookies
    const token = generateTokenAndSetCookies(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use env var for security
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error("Signup error:", error); // Log the error for debugging
    return res
      .status(400)
      .json({ message: `Error in Signup: ${error.message}` });
  }
};

// Signin controller
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Use user.password

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token and set cookies
    const token = generateTokenAndSetCookies(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    // Clear reset password related fields on successful login to prevent stale state
    if (user.resetOtp || user.isOtpVerified || user.verificationExpiry) {
      user.resetOtp = undefined;
      user.resetOtpExpiry = undefined;
      user.isOtpVerified = false;
      user.verificationExpiry = undefined;
      await user.save();
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Signin error:", error);
    return res
      .status(400)
      .json({ message: `Error in Signin: ${error.message}` });
  }
};

// Signout controller
export const signOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Signout successful" });
  } catch (error) {
    res.status(400).json({ message: `Error in Signout: ${error.message}` });
  }
};

// Send OTP controller
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    user.resetOtp = otp;
    user.resetOtpExpiry = Date.now() + 10 * 60 * 1000;
    user.isOtpVerified = false;

    await user.save();

    await sendOtpMail(email, otp);
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in sending OTP mail:", error);
    return res
      .status(400)
      .json({ message: `Error in sending OTP mail: ${error.message}` });
  }
};

// Verify OTP controller
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (user.resetOtpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }
    if (user.resetOtp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    user.isOtpVerified = true;
    user.verificationExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes to reset password
    user.resetOtp = undefined;
    user.resetOtpExpiry = undefined;
    await user.save();
    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verifying OTP:", error);
    return res
      .status(400)
      .json({ message: `Error in verifying OTP: ${error.message}` });
  }
};

// Reset Password controller
export const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (!user.isOtpVerified) {
      return res.status(400).json({ message: "OTP not verified" });
    }

    // Check if verification session has expired
    if (user.verificationExpiry && user.verificationExpiry < Date.now()) {
      return res.status(400).json({
        message: "Verification session expired. Please verify OTP again.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.isOtpVerified = false;
    user.resetOtp = undefined;
    user.resetOtpExpiry = undefined;
    user.verificationExpiry = undefined;
    await user.save();
    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error in resetting password:", error);
    return res
      .status(400)
      .json({ message: `Error in resetting password: ${error.message}` });
  }
};
