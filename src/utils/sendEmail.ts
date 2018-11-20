import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandboxf8437580aaae4980ab403da52339d9db.mailgun.org"
});

const sendEmail = (subject: string, html:string ) => {
    const emailData = {
        from: "sean.kim84@gmail.com",
        to: "sean.kim84@gmail.com",
        subject,
        html
    };
    return mailGunClient.messages().send(emailData)
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hellow ${fullName}, please verify your Email`;
    const emailBody = `Click Verify your Email by clicking <a href="https://www.google.com/${key}/">Here</a>`;
        return sendEmail(emailSubject, emailBody);
};
