// init-db.ts

import sequelize from './sequelize-config';
import User from './models/User';

async function init() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Synchronize the models with the database
    await sequelize.sync({ force: true }); // Set force to true only during development to drop existing tables

    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
    console.log('Connection closed.');
  }
}

init();
