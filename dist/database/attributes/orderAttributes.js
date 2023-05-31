"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const orderAttributes = {
    OrderDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
};
exports.default = orderAttributes;
//# sourceMappingURL=orderAttributes.js.map