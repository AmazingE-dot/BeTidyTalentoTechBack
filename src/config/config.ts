
require("dotenv").config()

export const config: any = {
  desarrollo: {
    database: {
      connection: process.env.DB_CONNECTION,
    },
    email: {
      from: process.env.FROM_EMAIL_DESARROLLO,
      port: process.env.PORT_EMAIL_DESARROLLO,
      host: process.env.HOST_EMAIL_DESARROLLO,
      email: process.env.USER_EMAIL_DESARROLLO,
      password: process.env.PASS_EMAIL_DESARROLLO,
    },
    jwtSecret: process.env.JWTSECRET,
    jwtSecretPass: process.env.JWT_SECRET_PASS,
    ipApi: process.env.IP_API,
    ip: process.env.IP
  },
  pruebas: {
    database: {
      connection: process.env.DB_CONNECTION,
    },
    email: {
      port: process.env.PORT_EMAIL_PRUEBAS,
      host: process.env.HOST_EMAIL_PRUEBAS,
      email: process.env.USER_EMAIL_PRUEBAS,
      password: process.env.PASS_EMAIL_PRUEBAS,
    },
    jwtSecret: process.env.JWTSECRET,
    jwtSecretPass: process.env.JWT_SECRET_PASS,
    ipApi: process.env.IP_API,
  },
  produccion: {
    database: {
      connection: process.env.DB_CONNECTION,
    },
    email: {
      from: process.env.FROM_EMAIL_PRODUCCION,
      port: process.env.PORT_EMAIL_PRODUCCION,
      host: process.env.HOST_EMAIL_PRODUCCION,
      email: process.env.USER_EMAIL_PRODUCCION,
      password: process.env.PASS_EMAIL_PRODUCCION,
    },
    jwtSecret: process.env.JWTSECRET,
    jwtSecretPass: process.env.JWT_SECRET_PASS,
    ipApi: process.env.IP_API,
  },
}; 