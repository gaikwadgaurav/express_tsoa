import express, { Request, Response } from 'express';
import { RegisterRoutes } from '../build/routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../build/swagger.json';
import sequelizeConfig from './sequelize.config';

const app = express();

// Call Sequelize initialization function
const sequelize = sequelizeConfig;

// Middleware
app.use(express.json());

// Swagger UI setup
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  '/api',
  swaggerUi.serve,
  async (request: Request, response: Response) => {
    return response.send(
      swaggerUi.generateHTML(await import('../build/swagger.json'))
    );
  }
);

// Register TSOA routes
RegisterRoutes(app);
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`server is listening to http://localhost:${PORT}`)
);