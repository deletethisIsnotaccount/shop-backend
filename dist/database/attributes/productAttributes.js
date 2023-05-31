"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const productAttributes = {
    ProductName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
};
exports.default = productAttributes;
//# sourceMappingURL=productAttributes.js.map