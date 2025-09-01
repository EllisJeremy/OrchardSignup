import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.fused.com",
  port: 587, // use STARTTLS
  secure: false, // false for 587
  auth: {
    user: "whatshappening@beyondsunday.org",
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    const info = await transporter.sendMail({
      from: '"The Orchard" <whatshappening@beyondsunday.org>',
      to,
      subject,
      text,
    });
    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error(" Email error:", err);
  }
}
