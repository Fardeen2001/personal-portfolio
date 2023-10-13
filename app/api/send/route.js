import EmailTamplate from "@/app/components/EmailTamplate";
import { NextResponse, NextRequest } from "next/server";
import { SMTPClient } from "emailjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    const client = new SMTPClient({
      user: process.env.USEREMAIL,
      password: process.env.PASSWORD,
      host: "smtp.gmail.com",
      ssl: true,
    });
    console.log(process.env.PASSWORD);
    client.send({
      text: EmailTamplate(subject, message),
      from: process.env.USEREMAIL,
      to: email,
      subject: subject,
    });

    return NextResponse.json({ data: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
