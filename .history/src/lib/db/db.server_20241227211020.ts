// db/db.server.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';
 

// const client = dev ? postgres(DATABASE_URL) : postgres(DATABASE_URL, { ssl: 'require' });
const { DATABASE_URL, DB_USER, DB_PASSWORD } = process.env;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

if (!DB_USER || !DB_PASSWORD) {
  throw new Error('DB_USER and DB_PASSWORD environment variables are required');
}

export default {
  schema: './src/lib/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  }
} satisfies Config;
