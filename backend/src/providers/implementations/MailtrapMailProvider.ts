import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

class MailtrapMailProvider implements IMailProvider {
  private emailHost: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private emailPort: any;
  private emailUser: string;
  private emailPass: string;
  private transporter: Mail;

  constructor() {
    this.emailHost = process.env.EMAIL_HOST || "sandbox.smtp.mailtrap.io";
    this.emailPort = process.env.EMAIL_PORT || 2525;
    this.emailUser = process.env.EMAIL_USER || "cb7e9e0fc0f4e1";
    this.emailPass = process.env.EMAIL_PASS || "1c6556773467da";
    
    this.transporter = nodemailer.createTransport({
      host: this.emailHost,
      port: +this.emailPort,
      auth: {
        user: this.emailUser,
        pass: this.emailPass
      }
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}

export { MailtrapMailProvider };