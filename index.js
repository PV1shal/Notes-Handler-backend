import express from 'express';
import cors from 'cors';
import taskRoutes from './api/tasksManager.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/taskManager', taskRoutes);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export default app;