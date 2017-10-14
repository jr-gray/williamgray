const nodemailer = require('nodemailer');
require('dotenv').load();

module.exports = {
  sendEmail(req, res) {
    let name    = req.body.name;
    let email   = req.body.email;
    let message = req.body.message;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jrgrayy@gmail.com',
        pass: process.env.emailpw
      }
    });
    
    let mailOptions = {
      from: 'jrgrayy@gmail.com',
      to: 'jrgrayy@gmail.com',
      subject: 'Message from williamjgray.com',
      text: `Name: ${name}, Email: ${email}, Message: ${message}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.send(true);
  }
}