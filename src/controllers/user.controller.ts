import {NextFunction, Request, Response} from "express";
import {ShopValidation, UpdateShopValidation} from "../validation/shop.validation";
import { Users} from "../database/dbConnection";
import {commonController} from "./common.controller";
import {UpdateUserValidation, userValidation} from "../validation/user.validation";

export class UserController {
    public static async CreateOne(req : Request , res: Response , next : NextFunction){
        try {
            const data = req.body;
            const {error , warning, value}= userValidation.validate(data)
            //JWT service
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            if(value){
                res.status(200).json(await Users.create(value));
            }
        }
        catch (e) {
            res.status(500).json({ error: 'Internal server error' });
        }

    }
    public static GetAll=commonController.GetAll(Users)
    public static GetOne=commonController.GetOne(Users)
    public static  DeleteOne = commonController.DeleteOne(Users)
    public static UpdateOne = commonController.UpdateOne(Users , UpdateUserValidation)
}