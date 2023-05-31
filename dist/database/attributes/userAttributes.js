"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const userAttributes = {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
};
exports.default = userAttributes;
//# sourceMappingURL=userAttributes.js.map