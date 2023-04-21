import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'z45l55XR',
    host: 'localhost',
    port: 5432,
    database: 'rattus'
});

export default pool;
