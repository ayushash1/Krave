import nodemailer from "nodemailer";
import passwordResetOtpTemplate from "./emailTemplates/passwordResetHtml.js";

const transporter = nodemailer.createTransport({
  service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_ADD,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
  logger: true,
  debug: true,
});

export const sendOtpMail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"Krave" <${process.env.EMAIL_ADD}>`,
      to: email,
      subject: "Krave | Password Reset OTP",
      text: `Your OTP is ${otp}`,
      html: passwordResetOtpTemplate(otp),
    });
  } catch (error) {
    console.error("Error in sending OTP mail:", error);
  }
};
