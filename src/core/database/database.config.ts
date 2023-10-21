import { registerAs } from '@nestjs/config';
import { Environment } from 'core/enums/environment.enum';
import { IDatabaseConfigAttributes } from 'src/core/interfaces/database.interface';

export default registerAs('database', () => {
  let config: IDatabaseConfigAttributes;
  const development = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    type: process.env.DB_DIALECT,
  };
  const test = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    type: process.env.DB_DIALECT,
  };
  const production = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    type: process.env.DB_DIALECT,
  };

  switch (process.env.NODE_ENV) {
    case Environment.DEVELOPMENT:
      config = development;
      break;
    case Environment.TEST:
      config = test;
      break;
    case Environment.PRODUCTION:
      config = production;
      break;
    default:
      config = development;
  }
  return config;
});
