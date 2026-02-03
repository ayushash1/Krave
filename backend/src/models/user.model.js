import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    number: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "delivery"],
      default: "user",
      required: true,
    },
    resetOtp: {
      type: String,
      default: null,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },
    resetOtpExpiry: {
      type: Date,
      default: null,
    },
    verificationExpiry: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
