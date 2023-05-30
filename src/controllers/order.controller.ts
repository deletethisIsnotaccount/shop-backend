import {Request, Response , NextFunction} from "express";
import {Orders, Users} from "../database/dbConnection";
import OrderAttributes from "../database/attributes/orderAttributes";
import productAttributes from "../database/attributes/productAttributes";
import {orderValidation} from "../validation/order.validation";
import {commonController} from "./common.controller";

export class OrderController {
    public static async  CreateOrder(req : Request , res : Response , next : NextFunction){
        try {
            const data: Record<keyof typeof OrderAttributes, string>= req.body;
            const {error , value}=orderValidation.validate(data)
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            if(! await Users.findOne({where:{id:value.UserId}})){ res.json({"error": `User not found ;user with id : ${value.UserId} not exist`}).status(404)}
            else res.json( await Orders.create(value))
        }catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    public static getAll = commonController.GetAll(Orders)
    public static getOne = commonController.GetOne(Orders)
    public static delete = commonController.DeleteOne(Orders)
}
