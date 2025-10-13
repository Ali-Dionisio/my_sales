import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import path from "path";

const port = process.env.PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5433,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, "../modules/**/database/entities/*.{ts,js}")],
  migrations: [path.join(__dirname, "../shared/typeorm/migrations/*.{ts,js}")],
});
