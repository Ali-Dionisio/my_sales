// NOVO data-source.ts

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

 entities: [
     'src/modules/**/database/entities/*.ts', // Para o desenvolvimento (ts-node-dev)
     './dist/modules/**/database/entities/*.js' // Se você usa 'dist' para produção
  ],

 migrations: [
     'src/shared/typeorm/migrations/*.ts',
     './dist/shared/typeorm/migrations/*.js'
  ],

  // ADICIONE ESTE LOG PARA AJUDAR NO DEBUG
  // logging: ["query", "error"],

});
