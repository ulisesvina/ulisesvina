import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (
    !req.body.token ||
    !req.body.name ||
    !req.body.email ||
    !req.body.message
  ) {
    return res.status(400).json({
      message: "Missing fields",
      success: false,
    });
  }

  const data = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env["RECAPTCHA_SECRET_KEY"]}&response=${req.body.token}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
    }
  ).then((response) => response.json());

  if (data.success) {
    const transporter = nodemailer.createTransport({
      host: process.env["EMAIL_SERVER"],
      port: 587,
      auth: {
        user: process.env["EMAIL_USER"],
        pass: process.env["EMAIL_PASSWORD"],
      },
    });

    let info = await transporter.sendMail({
      from: `"Contact Form" <${process.env["EMAIL_USER"]}>`,
      to: "hello@ulisesv.com",
      subject: "New inquiry from contact form.",
      html:
        "Inquiry from <b>" +
        req.body.name +
        "</b> (" +
        req.body.email +
        ") at " +
        new Date().toLocaleString("en-US", {
          timeZone: "America/Mexico_City",
        }) +
        "<br><br>" +
        req.body.message.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    });

    return res.status(200).json({
      message: "Email sent",
      success: true,
    });
  }
  return res.status(400).json({
    message: "Invalid token",
    success: false,
  });
};

export default handler;
