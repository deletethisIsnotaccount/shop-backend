"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
exports.OrderRouter = (0, express_1.Router)();
exports.OrderRouter.post("/newOrder", order_controller_1.OrderController.CreateOrder);
exports.OrderRouter.get('/allOrders', order_controller_1.OrderController.getAll);
exports.OrderRouter.get('/Order', order_controller_1.OrderController.getOne);
exports.OrderRouter.delete('/remove', order_controller_1.OrderController.delete);
//# sourceMappingURL=order.router.js.map