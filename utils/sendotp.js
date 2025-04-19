import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export async function sendMail(to, otp) {
  const subject = "Your OTP Code for Secure Access";
  const text = `Your OTP Code for Secure Access
  
  Hello,
  
  Thank you for using our service. Please use the following One-Time Password (OTP) to complete your action:
  
  OTP Code: ${otp}
  
  This OTP is valid for 10 minutes. Please do not share this code with anyone.
  
  If you did not request this OTP, please ignore this email.
  
  © 2024 Your Company. All rights reserved.`;

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Your OTP Code</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .para:{
      fontsize: 16px;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 10px 0;
        background-color: #4CAF50;
        color: #ffffff;
      }
      .content {
        padding: 20px;
      }
      .otp-code {
        font-size: 24px;
        font-weight: bold;
        color: #4CAF50;
        margin: 20px 0;
        text-align: center;
      }
      .footer {
        text-align: center;
        padding: 10px 0;
        background-color: #f4f4f4;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>OTP Verification</h1>
      </div>
      <div class="content">
        <h2>Hello,</h2>
        <p class = "para">Thank you for using our service. Please use the following One-Time Password (OTP) to complete your action:</p>
        <div class="otp-code">${otp}</div>
        <p class = "para">This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
        <p class = "para">If you did not request this OTP, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>`;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SANDER_URL,
      pass: process.env.SANDER_PASS,
    },
  });

  let mailOptions = {
    from: '"Musicfy" <arbab.dev76@gmail.com>',
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(`Mail has been sent to ${info.accepted[0]}`);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// const code = 1033;
// sendMail("sameershokeen76@gmail.com", code);
