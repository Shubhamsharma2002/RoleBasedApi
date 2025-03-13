import nodemailer from 'nodemailer';
import generateHtmlContent from './dynamicHtml.js';


const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'chatusteam@gmail.com',
        pass:'wgje cxyj cmnx cjeq'
    }
});

// Function to send an email
const sendEmail = async (toEmails, subject, messageText, messageHtmlContent) => {
    try {
      // Generate HTML content dynamically
      const htmlContent = generateHtmlContent(toEmails, subject, messageHtmlContent);
  
      // Send the email
      const info = await transporter.sendMail({
        from: '"Message by Shubhi 👻" <chatusteam@gmail.com>',
        to: toEmails, // List of receivers
        subject: subject, // Subject line
        text: messageText, // Plain text body
        html: htmlContent, // HTML body
      });
  
      console.log("Message sent: %s", info.messageId);
      return info.messageId;
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  export  default sendEmail;
