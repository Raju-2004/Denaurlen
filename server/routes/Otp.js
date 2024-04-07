const express = require("express");
const Router = express.Router();
const nm = require("nodemailer");
const { google } = require("googleapis");

let savedOTPS = {};


CLIENT_ID = process.env.CLIENT_ID
CLIENT_SECRET = process.env.CLIENT_SECRET
REDIRECT_URI = process.env.REDIRECT_URI
REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const generateOTP = () => {
  const digits = "0123456789";
  const limit = 4; // 6-digit OTP
  let otp = "";
  for (let i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

async function sendMail(email,otp) {
  try {
    const access_token = await oAuth2Client.getAccessToken();
    const transport = nm.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "kusaraju202@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: access_token,
      },
    });

    const mailOptions = {
      from: "kusaraju202@gmail.com",
      to: email,
      subject: "OTP Verification",
      html: `<p>Your OTP is: <b>${otp}</b>. This OTP is valid for 3 minutes.</p>`
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (err) {
    console.log(err);
  }
}

Router.post("/sendemail", async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  const otpExpiration = Date.now() + 5 * 60 * 1000;
  savedOTPS[email] = { otp: String(otp), expiration: otpExpiration }; // Ensure OTP is stored as a string
  try {
    const result = await sendMail(email, otp);
    console.log("Email sent:", result);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

Router.post('/verify', (req, res) => {
    const { email, otp } = req.body;
    const savedOTP = savedOTPS[email]?.otp;
    if (!savedOTP || savedOTP !== otp || savedOTPS[email].expiration < Date.now()) { // Compare OTPs as strings
        res.status(400).send('Invalid OTP');
    } else {
        res.status(200).send('OTP verified successfully');
    }
});

module.exports = Router;
