"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersProducts = exports.Shop = exports.Orders = exports.Products = exports.Users = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const productAttributes_1 = __importDefault(require("./attributes/productAttributes"));
const orderAttributes_1 = __importDefault(require("./attributes/orderAttributes"));
const userAttributes_1 = __importDefault(require("./attributes/userAttributes"));
const shopAttributes_1 = __importDefault(require("./attributes/shopAttributes"));
exports.sequelize = new sequelize_1.Sequelize("postgres://andrii:SeuLQrCbB0ZYHZrYpCqHEYiSqfPbcFjt@dpg-chrlsegrddlba9pak230-a.frankfurt-postgres.render.com/store_r74r", { dialectOptions: { ssl: true, native: true } });
const Orders = exports.sequelize.define('Orders', orderAttributes_1.default);
exports.Orders = Orders;
const Products = exports.sequelize.define('Products', productAttributes_1.default);
exports.Products = Products;
const Users = exports.sequelize.define('Users', userAttributes_1.default);
exports.Users = Users;
const Shop = exports.sequelize.define('Shop', shopAttributes_1.default);
exports.Shop = Shop;
Users.hasMany(Orders, {
    foreignKey: 'UserId'
});
Orders.belongsTo(Users);
Shop.hasMany(Products, {
    foreignKey: 'ShopId',
});
Products.belongsTo(Shop);
const OrdersProducts = exports.sequelize.define('OrderProducts', {
    OrderId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Orders,
            key: 'id'
        }
    },
    ProductId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Products,
            key: 'id'
        }
    }
});
exports.OrdersProducts = OrdersProducts;
Products.belongsToMany(Orders, { through: OrdersProducts });
Orders.belongsToMany(Products, { through: OrdersProducts });
//# sourceMappingURL=dbConnection.js.map