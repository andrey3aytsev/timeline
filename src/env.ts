import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  serverPort: process.env.SERVER_PORT,
  dbUser: process.env.DB_USER,
  dbUserPassword: process.env.DB_USER_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT),
  dbName: process.env.DB_NAME,
};
