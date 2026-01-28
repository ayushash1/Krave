import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/token.js";

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

