import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tsoa_user', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true if you want to see SQL queries in the console
});

export default sequelize;