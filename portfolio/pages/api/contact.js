import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const {
    name,
    telephone,
    email,
    message
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
    subject: 'Sent from my website',
    text: `Ceci est un message de ${name}, ${telephone}. ${message} : ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  });

}
