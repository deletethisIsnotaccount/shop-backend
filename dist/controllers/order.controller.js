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
exports.OrderController = void 0;
const dbConnection_1 = require("../database/dbConnection");
const order_validation_1 = require("../validation/order.validation");
const common_controller_1 = require("./common.controller");
class OrderController {
    static CreateOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const { error, value } = order_validation_1.orderValidation.validate(data);
                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }
                if (!(yield dbConnection_1.Users.findOne({ where: { id: value.UserId } }))) {
                    res.json({ "error": `User not found ;user with id : ${value.UserId} not exist` }).status(404);
                }
                else
                    res.json(yield dbConnection_1.Orders.create(value));
            }
            catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.OrderController = OrderController;
OrderController.getAll = common_controller_1.commonController.GetAll(dbConnection_1.Orders);
OrderController.getOne = common_controller_1.commonController.GetOne(dbConnection_1.Orders);
OrderController.delete = common_controller_1.commonController.DeleteOne(dbConnection_1.Orders);
//# sourceMappingURL=order.controller.js.map