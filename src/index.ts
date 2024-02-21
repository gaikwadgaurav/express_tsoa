import express, { Request, Response } from 'express';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import sequelizeConfig from './sequelize.config';

const app = express();

// Call Sequelize initialization function
const sequelize = sequelizeConfig;

// Middleware
app.use(express.json());

// Register TSOA routes
RegisterRoutes(app);
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server is listening to http://localhost:${PORT}`)
);