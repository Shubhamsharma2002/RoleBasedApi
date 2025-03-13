
// env settup
import 'dotenv/config';

import {server} from './app.js';
import connectDB from './Src/Db/dbConnection.js';
import sendEmail from './Src/Middleware/mailer.js';

// port of the project


const port = process.env.PORT || 5000;
// server listen
const recipients = "shubhamtech004@gmail.com";
const subject = "Hello ✔";
const textBody = "Hello world?";
const htmlBody = "<b>Hello world?</b>";
export default sendEmail;
server.listen(port, ()=>{
   connectDB();
//    sendEmail(recipients,subject,textBody,htmlBody);
//    sendEmail(recipients,subject,"registration is on process",htmlBody);
    console.log(`server is fired sucessfully on port number::) ${port}`);
})