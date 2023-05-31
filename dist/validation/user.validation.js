"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserValidation = exports.userValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userValidation = joi_1.default.object({
    name: joi_1.default.string()
        .required()
        .min(1)
        .max(20),
    phoneNumber: joi_1.default.string()
        .length(10)
        .required(),
    surname: joi_1.default.string()
        .required()
        .max(20)
});
exports.UpdateUserValidation = joi_1.default.object({
    name: joi_1.default.string()
        .optional()
        .min(1)
        .max(20),
    phoneNumber: joi_1.default.string()
        .length(10)
        .optional(),
    surname: joi_1.default.string()
        .optional()
        .max(20)
});
//# sourceMappingURL=user.validation.js.map