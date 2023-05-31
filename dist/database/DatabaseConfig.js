"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ConfigDB = {
    Port: Number(process.env.DB_PORT),
    Host: process.env.DB_HOST,
    User: process.env.DB_USER,
    Database: process.env.DB_DATABASE,
    Password: process.env.DB_PASSWORD,
};
//# sourceMappingURL=DatabaseConfig.js.map