 const email = require('nodemailer');
 const express = require('express');
 const router = express.Router();


//create transporter
let transporter = email.createTransport({
    service: 'gmail',
    auth :{
useremail:process.env.Email,
pass:process.env.Password

    }
})

//emaail option & content

let mailOptions={
    from:"nidhal1508@gmail.com",
    to:"nidhaltest1508@gmail.com",
    subject:"testNodemail",
    text:"test working"
};

//send email
transporter.sendMail(mailOptions, function (err , data) {
    if (err) {
        console.log("errors occurs", err)
    } else {
        console.log("email sent")
    }
});

//export router 
module.exports = router;