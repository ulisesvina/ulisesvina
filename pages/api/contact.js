import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const data = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env["RECAPTCHA_SECRET_KEY"]}&response=${req.body.token}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
    }
  ).then((response) => response.json());

  if(data.success) {
    const transporter = nodemailer.createTransport({
      host: process.env["EMAIL_SERVER"],
      port: 587,
      auth: {
        user: process.env["EMAIL_USER"],
        pass: process.env["EMAIL_PASSWORD"],
      },
    });

    let info = await transporter.sendMail({
      from: `"Contact form" <${process.env["EMAIL_USER"]}>`,
      to: "contacto@ulisesvina.me",
      subject: req.body.subject,
      text: req.body.message,
      html: `
      <h3>New inquiry from</h3>
      <h1>${req.body.firstName} ${req.body.lastName}</h1> <br />
      <b>Reply to:</b> <a href="mailto:${req.body.email}">${req.body.email}</a> <br />
      <div style="margin-top: 60px">
        <p>${req.body.message}</p>
      </div>
      `
    });

    return res.status(200).json({
      message: "Email sent",
    });
  }
  return res.status(400).json({
    message: "Invalid token",
  });
};

export default handler;
