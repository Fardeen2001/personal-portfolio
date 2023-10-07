import EmailTamplate from "@/app/components/EmailTamplate";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    console.log(email, subject, message);

    const data = await resend.emails.send({
      from: "1si20et403@gmail.com",
      to: email,
      subject: subject,
      react: EmailTamplate(subject, message),
    });
    console.log(data);
    if (data.status === "success") {
      return NextResponse.json({ message: "Email sent successfully!" });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
