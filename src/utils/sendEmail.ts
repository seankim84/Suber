import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "postmaster@sandboxf8437580aaae4980ab403da52339d9db.mailgun.org"
});
