import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/token.js";

// Signup controller
export const signUp = async (req, res) => {
  try {
    const { username, email, password, mobile, role } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password Must be atleast 8 characters" });
    }

    if (mobile.lenght < 10) {
      return res
        .status(400)
        .json({ message: "Mobile number should be atleast 10 digits" });
    }

    // hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user if not exists and password is valid
    user = User.create({
      username,
      email,
      hashedPassword,
      mobile,
      role,
    });

    // generate token and set cookies
    const token = generateTokenAndSetCookies(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return res.status(201).json(user);
  } catch (error) {
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

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate token and set cookies
    const token = generateTokenAndSetCookies(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return res.status(200).json(user);
  } catch (error) {
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
