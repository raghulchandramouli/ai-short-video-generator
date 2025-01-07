import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://AI-Design_owner:paiNI6MsDZ5O@ep-black-breeze-a5m17t7r.us-east-2.aws.neon.tech/ai-shorts-video-generator?sslmode=require",
  },
});
