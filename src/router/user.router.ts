import {Router} from "express";
import {UserController} from "../controllers/user.controller"

export const UserRouter = Router()
UserRouter.post("/user" , UserController.CreateOne)
UserRouter.get("/singleUser" , UserController.GetOne)
UserRouter.delete("/removeUser" , UserController.DeleteOne)
UserRouter.get("/allUsers" , UserController.GetAll)
UserRouter.put("/putUser" , UserController.UpdateOne)
