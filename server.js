require("dotenv").config();
const nodemailer = require("nodemailer");

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Step 2
let mailerOptions = {
    from: "service@gmail.com",
    to: process.env.EMAIL,
    subject: "Fuck",
    text: "I am gonna say bye nye "
};

// Step 3
transporter.sendMail(mailerOptions, (err, data) => {
    if (err){
        console.log("Error: " + err)
    }else{
        console.log("Email sent");
    }
});