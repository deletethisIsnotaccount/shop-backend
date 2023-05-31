"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRouter = void 0;
const express_1 = require("express");
const shop_controller_1 = require("../controllers/shop.controller");
const product_router_1 = require("./product.router");
exports.ShopRouter = (0, express_1.Router)();
exports.ShopRouter.post("/shop", shop_controller_1.ShopController.CreateOne);
product_router_1.productRouter.get("/singleShop", shop_controller_1.ShopController.GetOne);
product_router_1.productRouter.delete("/removeShop", shop_controller_1.ShopController.DeleteOne);
product_router_1.productRouter.get("/allShops", shop_controller_1.ShopController.GetAll);
product_router_1.productRouter.put("/putShops", shop_controller_1.ShopController.UpdateOne);
//# sourceMappingURL=shop.router.js.map