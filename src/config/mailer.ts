import nodemailer from "nodemailer";
import { config } from "./config";

const enviroment = config[process.env.NODE_ENV || "desarrollo"];
const { host, port, email, password } = enviroment.email


export const transporter = nodemailer.createTransport({
  service: 'hotmail',
  // host: "smtp-mail.outlook.com",
  // port: 587,
  // secure: true,
  auth: {
    user: "carlos-eduardo-leon2@hotmail.com",
    pass: "EduardoSan12321.",
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Puede enviar correos electrónicos");
  })
  .catch((error) => {
    console.log("Error al enviar", error);
  });
