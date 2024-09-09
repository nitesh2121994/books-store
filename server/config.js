// config.js
import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT,
  secretKey: process.env.SECRET_KEY
};

export default config;
