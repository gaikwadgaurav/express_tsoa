"use strict";
// init-db.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_config_1 = __importDefault(require("./sequelize-config"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize_config_1.default.authenticate();
            console.log('Connection to the database has been established successfully.');
            // Synchronize the models with the database
            yield sequelize_config_1.default.sync({ force: true }); // Set force to true only during development to drop existing tables
            console.log('Database synchronized.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        finally {
            // Close the Sequelize connection
            yield sequelize_config_1.default.close();
            console.log('Connection closed.');
        }
    });
}
init();
