import dotenv from 'dotenv';
dotenv.config();

type ConfigType = {
  API_PORT: number;
  APP_URL: string;
  API_VERSION: string;
  DB_URL: string;
  DB_SYNC: boolean;
  TOKEN: {
    ACCESS_KEY: string;
    ACCESS_TIME: string;
    REFRESH_KEY: string;
    REFRESH_TIME: string;
  };

  SUPER_ADMIN: {
    EMAIL: string;
    PASSWOR: string;
  };
  REDIS: {
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_PASSWORD: string;
  };
  FILE_PATH: string;
  BASE_URL: string;
};

export const config: ConfigType = {
  API_PORT: Number(process.env.API_PORT),
  APP_URL: String(process.env.APP_URL),
  API_VERSION: String(process.env.API_VERSION),
  DB_URL:
    String(process.env.NODE_ENV) === 'dev'
      ? String(process.env.DATABASE_URL)
      : String(process.env.PROD_DB_URL),
  DB_SYNC: String(process.env.NODE_ENV) === 'dev' ? true : false,
  TOKEN: {
    ACCESS_KEY: String(process.env.ACCESS_TOKEN_KEY),
    ACCESS_TIME: String(process.env.ACCESS_TOKEN_TIME),
    REFRESH_KEY: String(process.env.REFRESH_TOKEN_KEY),
    REFRESH_TIME: String(process.env.REFRESH_TOKEN_TIME),
  },
  SUPER_ADMIN: {
    EMAIL: String(process.env.SUPER_ADMIN_EMAIL),
    PASSWOR: String(process.env.SUPER_ADMIN_PASSWORD),
  },
  REDIS: {
    REDIS_HOST: String(process.env.REDIS_HOST),
    REDIS_PORT: Number(process.env.REDIS_PORT),
    REDIS_PASSWORD: String(process.env.REDIS_PASSWORD),
  },
  FILE_PATH: String(process.env.FILE_PATH),
  BASE_URL: String(process.env.BASE_URL),
};
