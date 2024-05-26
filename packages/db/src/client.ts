import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import * as schema from "./schema";


export const db = drizzle(sql, { schema });

// import 'dotenv/config'


// import postgres from 'postgres'

// // eslint-disable-next-line no-restricted-properties
// // const connectionString = process.env.DATABASE_URL ?? '';

// // Disable prefetch as it is not supported for "Transaction" pool mode
// export const client = postgres(connectionString, { prepare: false });
// export const db = drizzle(client, { schema });