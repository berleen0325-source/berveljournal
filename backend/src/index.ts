import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { json } from 'express';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import { router as healthRouter } from './routes/health';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: process.env.APP_URL, credentials: true }));
app.use(json());
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use('/health', healthRouter);

app.listen(port, () => {
  console.log(`TradingJourney Pro backend running on http://localhost:${port}`);
});
