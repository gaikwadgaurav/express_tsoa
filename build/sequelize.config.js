"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('tsoa_user', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Set to true if you want to see SQL queries in the console
});
exports.default = sequelize;
