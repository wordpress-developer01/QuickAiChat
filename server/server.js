import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();

await connectCloudinary();

const allowedOrigins = [
  'https://themebackup4u.com',
  'https://www.themebackup4u.com',
  'http://localhost:5173',
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Явно завершаем preflight до auth
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());
app.use(
  clerkMiddleware({
    frontendApiProxy: {
      enabled: true,
    },
  })
);

app.get('/', (req, res) => res.send('Server is Live!'));

// auth только на API, не глобально на всё подряд
app.use('/api/ai', requireAuth(), aiRouter);
app.use('/api/user', requireAuth(), userRouter);

// обработчик ошибок
app.use((err, req, res, next) => {
  console.error('SERVER ERROR:', err);

  res.status(err.status || 500).json({
    code: 'SERVER_ERROR',
    message: err.message || 'Internal server error',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});