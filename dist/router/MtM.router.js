"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductRouter = void 0;
const express_1 = require("express");
const OrderProduct_controller_1 = require("../controllers/OrderProduct.controller");
exports.OrderProductRouter = (0, express_1.Router)();
exports.OrderProductRouter.post("/poCreate", OrderProduct_controller_1.OrderProductController.CreateMtM);
exports.OrderProductRouter.get('/poAll', OrderProduct_controller_1.OrderProductController.GetAllMtM);
exports.OrderProductRouter.delete('/poRemove', OrderProduct_controller_1.OrderProductController.DeleteMtM);
exports.OrderProductRouter.get('/poAllWhere', OrderProduct_controller_1.OrderProductController.GetAllByOrder);
//# sourceMappingURL=MtM.router.js.map