import {Router} from "express";
import {OrderProductController} from "../controllers/OrderProduct.controller"

export const OrderProductRouter = Router()
OrderProductRouter.post("/poCreate" ,OrderProductController.CreateMtM)
OrderProductRouter.get('/poAll' , OrderProductController.GetAllMtM)
OrderProductRouter.delete('/poRemove' , OrderProductController.DeleteMtM)
OrderProductRouter.get('/poAllWhere' , OrderProductController.GetAllByOrder)



