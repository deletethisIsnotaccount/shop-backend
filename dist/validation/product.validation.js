"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductValidator = exports.ProductValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ProductValidator = joi_1.default.object({
    description: joi_1.default.string()
        .required()
        .min(5)
        .max(400)
        .required(),
    ProductName: joi_1.default.string()
        .required()
        .max(35),
    price: joi_1.default.string()
        .required(),
    ShopId: joi_1.default.string()
        .required()
});
exports.UpdateProductValidator = joi_1.default.object({
    description: joi_1.default.string()
        .min(5)
        .max(400)
        .optional(),
    ProductName: joi_1.default.string()
        .optional()
        .max(35),
    price: joi_1.default.string()
        .optional(),
    ShopId: joi_1.default.number()
        .optional()
});
//# sourceMappingURL=product.validation.js.map