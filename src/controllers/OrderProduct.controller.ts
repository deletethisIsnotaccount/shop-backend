import {Request , Response, NextFunction} from "express";
import {OrdersProducts} from "../database/dbConnection"
import {manyToManyValidation} from "../validation/manyToMany.validation"
import {commonController} from "./common.controller";
export class OrderProductController {

    public static async CreateMtM(req: Request , res : Response , next : NextFunction){
        try {
            const data = req.body;
            const {error , value}= manyToManyValidation.validate(data)
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            if(value){
                res.status(200).json(await OrdersProducts.create(value));
            }
        }
        catch (e) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    public static async GetAllByOrder(req: Request , res : Response , next : NextFunction){
        try {
            const id = req.query.OrderId;
            if(!id){res.status(400).json({error : "OrderId should not be null"})}
            res.json(await OrdersProducts.findAll({where:{OrderId:id}}))
        }
        catch (e) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    public static DeleteMtM = commonController.DeleteOne(OrdersProducts);
    public static GetAllMtM = commonController.GetAll(OrdersProducts);
}