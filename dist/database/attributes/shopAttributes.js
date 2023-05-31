"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const shopAttributes = {
    Shop: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    priceForDelivery: {
        type: sequelize_1.DataTypes.STRING,
        allow: false
    }
};
exports.default = shopAttributes;
//# sourceMappingURL=shopAttributes.js.map