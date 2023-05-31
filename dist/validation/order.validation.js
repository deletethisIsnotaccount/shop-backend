"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
joi_1.default.object();
exports.orderValidation = joi_1.default.object({
    OrderDescription: joi_1.default.string()
        .required()
        .max(200),
    UserId: joi_1.default.number()
        .required()
});
//# sourceMappingURL=order.validation.js.map