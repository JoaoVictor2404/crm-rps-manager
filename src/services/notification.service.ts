import nodemailer from 'nodemailer';
import config from '../config/default';
import twilio from 'twilio';

const mailer = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  auth: { user: config.email.user, pass: config.email.pass }
});
const twClient = twilio(config.twilio.sid, config.twilio.token);

export const notificationService = {
  async sendEmail(to: string, subject: string, html: string) {
    return mailer.sendMail({ from: config.email.user, to, subject, html });
  },
  async sendSMS(to: string, body: string) {
    return twClient.messages.create({ from: config.twilio.from, to, body });
  }
};
