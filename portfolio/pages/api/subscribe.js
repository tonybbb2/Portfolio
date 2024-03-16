import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const {
    email,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'bui.tony35@gmail.com',
      pass: `${process.env.NEXT_NODEMAILER_APP_PASSWORD}`
    }
  });

  const mailOptions = {
    from: email,
    to: 'bui.tony35@gmail.com',
    subject: `Subscription from ${email}`,
    text: `${email} subscribed to your news letter!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error);
    } else {
      res.send(info);
    }
  }); 

}
