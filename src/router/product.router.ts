import {Router} from "express";
import {ProductController} from "../controllers/product.controller"
export const productRouter = Router()
productRouter.post("/product" , ProductController.CreateProduct)
productRouter.get("/singleProduct" , ProductController.GetOne)
productRouter.get("/file/:id" , ProductController.getProductImage)
productRouter.delete("/removeProduct" , ProductController.DeleteOne)
productRouter.get("/allProducts" , ProductController.GetAll)
productRouter.put("/putProducts" , ProductController.UpdateOne)
productRouter.get("/productLike" , ProductController.GetAlikeProducts)


