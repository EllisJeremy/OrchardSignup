import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.fused.com",
  port: 587,
  secure: false,
  auth: {
    user: "whatshappening@beyondsunday.org",
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
  return transporter.sendMail({
    from: '"The Orchard" <whatshappening@beyondsunday.org>',
    to,
    subject,
    text,
    html,
  });
}
