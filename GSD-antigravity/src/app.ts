import express from 'express';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/', (_req, res) => {
    res.status(200).json({ name: 'gsd-antigravity', message: 'API is running' });
  });

  return app;
}
