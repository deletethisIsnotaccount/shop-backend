"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShopValidation = exports.ShopValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ShopValidation = joi_1.default.object({
    Shop: joi_1.default.string()
        .required()
        .min(3)
        .max(20),
    priceForDelivery: joi_1.default.number()
        .required()
        .max(1000),
});
exports.UpdateShopValidation = joi_1.default.object({
    Shop: joi_1.default.string()
        .optional()
        .min(3)
        .max(20),
    priceForDelivery: joi_1.default.number()
        .optional()
        .max(1000),
});
//# sourceMappingURL=shop.validation.js.map