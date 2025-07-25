import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendEmail = process.env.RESEND_EMAIL
const fromEmail = process.env.FROM_EMAIL
console.log('FROM_EMAIL:', fromEmail);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: resendEmail,
      to: [fromEmail],
      subject: subject,
      html: `
        <style>
          * {
            font-family: Arial, sans-serif;
          }
          p {
            margin: 0.5rem 0;
          }
          a {
            color: #1890ff;
            text-decoration: none;
          }
        </style>
        <h1 style="font-weight: bold; font-size: 1.5rem;">${subject}</h1>
        <p>Message from: <a href="mailto:${email}">${email}</a></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
