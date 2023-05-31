"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
exports.productRouter = (0, express_1.Router)();
exports.productRouter.post("/product", product_controller_1.ProductController.CreateProduct);
exports.productRouter.get("/singleProduct", product_controller_1.ProductController.GetOne);
exports.productRouter.get("/file/:id", product_controller_1.ProductController.getProductImage);
exports.productRouter.delete("/removeProduct", product_controller_1.ProductController.DeleteOne);
exports.productRouter.get("/allProducts", product_controller_1.ProductController.GetAll);
exports.productRouter.put("/putProducts", product_controller_1.ProductController.UpdateOne);
//# sourceMappingURL=product.router.js.map