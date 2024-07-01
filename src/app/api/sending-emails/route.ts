import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, subject, message } = await req.json();
    if (name == "" || email == "" || subject == "" || message == "") {
      return NextResponse.json({
        status: 500,
        message: "all data is required",
      });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.DB_GMAIL_ID,
        pass: process.env.APP_PASSWORD,
      },
    });
    const mailContext = {
      from: email,
      to: process.env.DB_GMAIL_ID,
      subject: subject,
      text: ` from ${email} \n ${message}`,
    };
    if (mailContext.from !== mailContext.to) {
      await transporter.sendMail(mailContext);
      return NextResponse.json({
        status: 200,
        message: "email sent successfully",
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "something went wrong while sending the email",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "something went wrong while sending the email",
    });
  }
}
