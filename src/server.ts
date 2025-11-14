import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config/app.config.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requestLogger } from './middlewares/requestLogger.js';
import apiRoutes from './routes/api.routes.js';
import formRoutes from './routes/form.routes.js';

// Reemplazo de __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', apiRoutes);
app.use(formRoutes);

// Manejo de errores (debe ir al final)
app.use(errorHandler);

// Iniciar servidor
app.listen(config.port, () => {
  console.log(`🚀 Server running at http://localhost:${config.port}`);
  console.log(`📦 Environment: ${config.nodeEnv}`);
});
