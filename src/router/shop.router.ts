import {Router} from "express";
import {ShopController} from "../controllers/shop.controller"
import {ProductController} from "../controllers/product.controller";
import {productRouter} from "./product.router";
export const ShopRouter = Router()
ShopRouter.post("/shop" , ShopController.CreateOne)
productRouter.get("/singleShop" , ShopController.GetOne)
productRouter.delete("/removeShop" , ShopController.DeleteOne)
productRouter.get("/allShops" , ShopController.GetAll)
productRouter.put("/putShops" , ShopController.UpdateOne)
