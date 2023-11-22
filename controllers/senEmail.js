const nodemailer = require('nodemailer');


require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
})


const senEmail = async (req, res) => {
    console.log("Start")
    const { name, mail, message } = req.body
    // console.log(name, mail, message)

    const mailOptions = {
        from: process.env.USER,
        to: process.env.USER,
        subject: `Portfolio message from ${name}`,
        text: `Email: ${mail}\nMessage: ${message}`
    };
    // const { from } = mailOptions
    // console.log(`from: ${from}`)

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.message})
        }
        console.log('Email sent: ' + info.response)
        res.status(200).json({ success: true })
    });

    
}

module.exports = senEmail;