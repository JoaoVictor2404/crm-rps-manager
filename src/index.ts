import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import rateLimiter from './middlewares/rateLimit.middleware';
import errorMiddleware from './middlewares/error.middleware';
import authRoutes from './routes/auth.routes';
import crmRoutes from './routes/crm.routes';
import rpsRoutes from './routes/rps.routes';
import config from './config/default';
import { DataSource } from 'typeorm';

const app = express();
const spec = YAML.load('./swagger.yaml');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
app.use(authRoutes);
app.use(crmRoutes);
app.use(rpsRoutes);

app.use(errorMiddleware);

const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  entities: [__dirname + '/entities/*.ts'],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
    });
  })
  .catch(err => console.error('Error during Data Source initialization:', err));
