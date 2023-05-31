"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const dbConnection_1 = require("./database/dbConnection");
const product_router_1 = require("./router/product.router");
const shop_router_1 = require("./router/shop.router");
const user_router_1 = require("./router/user.router");
const order_router_1 = require("./router/order.router");
const MtM_router_1 = require("./router/MtM.router");
dotenv.config();
const app = (0, express_1.default)();
app.use((0, express_fileupload_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path.join(__dirname, "..", 'static')));
(0, cors_1.default)({
    credentials: true,
    origin: "http://localhost",
});
app.use('/api', product_router_1.productRouter, shop_router_1.ShopRouter, user_router_1.UserRouter, order_router_1.OrderRouter, MtM_router_1.OrderProductRouter);
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000, () => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    console.log(`server is running on port: ${(_b = process.env.PORT) !== null && _b !== void 0 ? _b : 5000} \n http://localhost:5000/`);
    try {
        yield dbConnection_1.sequelize.sync();
        yield dbConnection_1.sequelize.authenticate();
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=index.js.map