"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductController = void 0;
const dbConnection_1 = require("../database/dbConnection");
const manyToMany_validation_1 = require("../validation/manyToMany.validation");
const common_controller_1 = require("./common.controller");
class OrderProductController {
    static CreateMtM(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const { error, value } = manyToMany_validation_1.manyToManyValidation.validate(data);
                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }
                if (value) {
                    res.status(200).json(yield dbConnection_1.OrdersProducts.create(value));
                }
            }
            catch (e) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static GetAllByOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.OrderId;
                if (!id) {
                    res.status(400).json({ error: "OrderId should not be null" });
                }
                res.json(yield dbConnection_1.OrdersProducts.findAll({ where: { OrderId: id } }));
            }
            catch (e) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.OrderProductController = OrderProductController;
OrderProductController.DeleteMtM = common_controller_1.commonController.DeleteOne(dbConnection_1.OrdersProducts);
OrderProductController.GetAllMtM = common_controller_1.commonController.GetAll(dbConnection_1.OrdersProducts);
//# sourceMappingURL=OrderProduct.controller.js.map