import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://AI-Design_owner:paiNI6MsDZ5O@ep-black-breeze-a5m17t7r.us-east-2.aws.neon.tech/ai-shorts-video-generator?sslmode=require");
export const db = drizzle(sql);

