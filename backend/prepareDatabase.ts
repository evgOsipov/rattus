import dotenv from 'dotenv';
import { Client } from 'pg';

import db from './db';

dotenv.config();
const createDatabaseIfNotExists = async () => {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS,
        port: process.env.POSTGRES_PORT,
    });
    const createDatabaseQuery = `CREATE DATABASE ${process.env.DATABASE_NAME}`;
    try {
        await client.connect();
        await client.query(createDatabaseQuery);
        return true;
    } catch (error) {
        if (error.stack.includes(`"${process.env.DATABASE_NAME}" already exists`)) {
            return true
        }
        console.error(error.stack);
        return false;
    } finally {
        await client.end();
    }
}

const createTablesIfNotExists = async () => {
    const createTableQueries = [
        `create TABLE IF NOT EXISTS "documents"
         (
             id    SERIAL PRIMARY KEY,
             title VARCHAR,
             date  BIGINT
         );`,
        `create TABLE IF NOT EXISTS "reports"
         (
             id          SERIAL PRIMARY KEY,
             date        BIGINT,
             title       VARCHAR,
             document_id INTEGER,
             FOREIGN KEY (document_id) REFERENCES documents (id)
         );`,
        `create TABLE IF NOT EXISTS "specifications"
         (
             id          SERIAL PRIMARY KEY,
             title       VARCHAR,
             status      VARCHAR(255),
             answer      VARCHAR,
             document_id INTEGER,
             report_id   INTEGER,
             FOREIGN KEY (document_id) REFERENCES documents (id) ON DELETE CASCADE,
             FOREIGN KEY (report_id) REFERENCES reports (id) ON DELETE CASCADE
         );`,
    ];

    for (const query of createTableQueries) {
        await db.query(query);
    }
}

export const prepareDatabase = async () => {
    await createDatabaseIfNotExists();
    await createTablesIfNotExists();
}

