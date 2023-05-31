"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manyToManyValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.manyToManyValidation = joi_1.default.object({
    OrderId: joi_1.default.number()
        .required(),
    ProductId: joi_1.default.number()
        .required(),
});
//# sourceMappingURL=manyToMany.validation.js.map