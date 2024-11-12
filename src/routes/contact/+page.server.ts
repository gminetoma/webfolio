import type Mail from 'nodemailer/lib/mailer';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';

const sendEmail = (formData: ContactForm, resolve: (value: boolean) => void) => {
  const nodemailerEmail = import.meta.env.VITE_NODEMAILER_EMAIL;
  const nodemailerPassword = import.meta.env.VITE_NODEMAILER_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: nodemailerEmail,
      pass: nodemailerPassword
    }
  });

  const mailOptions: Mail.Options = {
    from: 'webfolio',
    to: 'gminetoma@gmail.com',
    subject: 'Webfolio',
    text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Text: ${formData.text}
        `
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      resolve(false);
      return;
    }
    resolve(true);
  });
};

export const actions: Actions = {
  default: async ({ request }) => {
    const rawFormData: FormData = await request.formData();
    const formData = Object.fromEntries(rawFormData) as ContactForm;

    const result = await new Promise<boolean>((resolve) => {
      sendEmail(formData, resolve);
    });

    return { success: result };
  }
};
