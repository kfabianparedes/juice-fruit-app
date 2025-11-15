import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config/app.config.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requestLogger } from './middlewares/requestLogger.js';
import { requestIdMiddleware } from './middlewares/requestId.js';
import apiRoutes from './routes/api.routes.js';
import authRoutes from './routes/form.routes.js';
import { logger } from './utils/logger.js';

// Reemplazo de __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIdMiddleware);
app.use(requestLogger);

// Archivos estáticos - Servir desde /assets
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// Rutas de vistas HTML
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/welcome', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'welcome.html'));
});

// Rutas API
app.use('/api', apiRoutes);
app.use(authRoutes);

// Manejo de errores (debe ir al final)
app.use(errorHandler);

// Iniciar servidor
app.listen(config.port, () => {
  logger.info('Server started', {
    port: config.port,
    environment: config.nodeEnv,
    url: `http://localhost:${config.port}`,
  });
});
