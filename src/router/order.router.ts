import {Router} from "express";
import {OrderController} from "../controllers/order.controller"

export const OrderRouter = Router()
OrderRouter.post("/newOrder" ,OrderController.CreateOrder )
OrderRouter.get('/allOrders' , OrderController.getAll)
OrderRouter.get('/Order' , OrderController.getOne)
OrderRouter.delete('/remove' , OrderController.delete)



