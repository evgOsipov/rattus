import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_PORT,
    database: process.env.DATABASE_NAME
});

export default pool;
