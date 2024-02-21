import express, { Request, Response } from 'express';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import sequelize from './sequelize.config';
const app = express();

// Middleware
app.use(express.json());

// Register TSOA routes
RegisterRoutes(app);

// Start the Sequelize connection
sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully.');

  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`Server is listening to http://localhost:${PORT}`)
  );
}).catch((error: any) => {
  console.error('Unable to connect to the database:', error);
});
