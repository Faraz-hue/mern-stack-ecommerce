const nodeMailer = require("nodemailer")

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTranspPort({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_MAIL,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SPMT_PASSWORD,
        }
    })

    const mailOptions = {
        from: "",
        to: options.email,
        subject: option.subject,
        text: options.message,
    }

    await transporter.sendEmail(mailOptions)
}

module.exports = sendEmail