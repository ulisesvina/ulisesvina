import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env["EMAIL_SERVER"],
    port: 587,
    auth: {
      user: process.env["EMAIL_USER"],
      pass: process.env["EMAIL_PASSWORD"],
    },
  });

  let info = await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env["EMAIL_USER"]}>`,
    to: "contacto@ulisesvina.me",
    subject: req.body.subject,
    text: req.body.message,
  });

  console.log("Message sent: %s", info.messageId);
};

export default handler;
