"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const sequelize_config_1 = __importDefault(require("./sequelize.config"));
const app = (0, express_1.default)();
// Call Sequelize initialization function
const sequelize = sequelize_config_1.default;
// Middleware
app.use(express_1.default.json());
// Register TSOA routes
(0, routes_1.RegisterRoutes)(app);
const PORT = 3000;
app.listen(PORT, () => console.log(`server is listening to http://localhost:${PORT}`));
