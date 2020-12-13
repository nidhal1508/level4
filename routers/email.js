//  const nodemailer = require('nodemailer');
//  const express = require('express');
// const {google} = require('googleapis')
//  const router = express.Router();

// //  let transporter = email.createTransport({
// //     service: 'gmail',
// //     auth :{
// //         xoauth2:xoauth2.createXOAuth2Generator({
// //         useremail:"nidhal1508@gmail.com",
// //         clientId: '99225458119-k1ov3fkf46euq9vlevjh4s1vtotf9tm0.apps.googleusercontent.com',
// //         clientSecret: 'slPtz400_oxVIv6ZIbmnKTtz',
// //         refreshToken: '1//04TolYpeo3k02CgYIARAAGAQSNwF-L9IrMcBX-fu-LXi3OBz-52JbJs2uoumHo5B-9KvixOvPlZFPTaaEsRKUHXojwjR_BrrXtSQ',
// //         accessToken:'ya29.a0AfH6SMAryjZoTcT0kCSV0IzUInpntczJ0lnPfpByH-NqQJloJezXs1Uo-n3m_tTZm1CL6UU4ULa5zHNsxEwBIga6LxUH4m5qeZMscPA4Jk0EyrU0SlGN4usmlD-uB6j_uCBG0fJ5asB1rxvQeY0FCqgNdzXh7sBnoU3icji-UJQ'
// //     })
// //     }

// // })



       
//         const redirect ='https://developers.google.com/oauthplayground';
//       const  clientId= '99225458119-k1ov3fkf46euq9vlevjh4s1vtotf9tm0.apps.googleusercontent.com';
//       const  clientSecret= '';
//        const refreshToken= '1//04TolYpeo3k02CgYIARAAGAQSNwF-L9IrMcBX-fu-LXi3OBz-52JbJs2uoumHo5B-9KvixOvPlZFPTaaEsRKUHXojwjR_BrrXtSQ';
     
    
// const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirect)
// oAuth2Client.setCredentials({refresh_token: refreshToken})


// //emaail option & content

// let mailOptions={
//     from:"nidhal1508@gmail.com",
//     to:"nidhaltest1508@gmail.com",
//     subject:"testNodemail",
//     text:"test working",
//     html:"<h1>test working html</h1>"
// };

// //send email
// async function sendMail(params) {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();
//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'nidhal1508@gmail.com',
//                 clientId: clientId,
//                 clientSecret: clientSecret,
//                 refreshToken: refreshToken,
//                 accessToken: accessToken
//             }
//         })
//         const result= await transport.sendMail(mailOptions) ;
//         return result;
//     } catch (error) {
//         return error
//     }
// }

// sendMail().then((result)=> console.log('email sent') ).catch((error)=> console.log('error.message'))

// //export router 

const email = require('nodemailer');
 const express = require('express');
 const router = express.Router();



//create transporter

   
let transporter = email.createTransport({
    service: 'gmail',
    auth :{
user:"********",
pass:"*********"

    }
})

//emaail option & content


router.put('/sendingmail',function (req,res) {
    let mailOptions={
        from:"nidhal1508@gmail.com",
        to:"nidhaltest1508@gmail.com",
        subject:"testNodemail",
        text:"test working",
        img:{
            type: img,
            src :"./upload/1607862056322bonjourrrr-30.jpg"
        }
    };
//send email
 transporter.sendMail(mailOptions, function (err , data) {
    if (err) {
        console.log("errors occurs", err)
    } else {
        console.log("email sent")
        res.json(mailOptions);
    }
    
});

});


//export router 
module.exports = router;