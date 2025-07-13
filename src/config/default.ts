import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  jwt: {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
  db: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
  },
  redisUrl: process.env.REDIS_URL!,
  email: {
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
  twilio: {
    sid: process.env.TWILIO_SID!,
    token: process.env.TWILIO_TOKEN!,
    from: process.env.TWILIO_FROM!,
  },
};
