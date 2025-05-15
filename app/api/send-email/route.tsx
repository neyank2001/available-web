import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse request JSON body
  const { name, email, message } = await req.json();

  // Create SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465, // true if port 465 (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Optional: accept self-signed certs - remove in prod
    tls: {
      rejectUnauthorized: false,
    },
    // logger: true, // enable logging to console for debugging
    // debug: true, // show SMTP traffic
  });

  try {
    // Verify connection configuration before sending
    // await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact Form Message from ${name}`,
      text: `
📬 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}

---
Timestamp: ${new Date().toLocaleString()}
`,
      html: `
  <h2>📬 New Contact Form Submission</h2>
  <p><strong>👤 Name:</strong> ${name}</p>
  <p><strong>📧 Email:</strong> ${email}</p>
  <p><strong>💬 Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
  <hr>
  <p style="font-size: 0.85rem; color: gray;">Submitted on ${new Date().toLocaleString()}</p>
`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
