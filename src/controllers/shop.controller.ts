import {NextFunction, Request, Response} from "express";
import {ShopValidation, UpdateShopValidation} from "../validation/shop.validation";
import {UploadedFile} from "express-fileupload";
import * as uuid from "uuid";
import { Shop} from "../database/dbConnection";
import {ImageService} from "../services/image.service";
import {commonController} from "./common.controller";
import {UpdateProductValidator} from "../validation/product.validation";


export class ShopController {
    public static async CreateOne(req : Request , res: Response , next : NextFunction){
        try {
            const data = req.body;
            const {error , warning, value}= ShopValidation.validate(data)
            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }
            if(value){
                res.status(200).json(await Shop.create(value));
            }
        }
        catch (e) {
            res.status(500).json({ error: 'Internal server error' });
        }

    }
    public static GetAll=commonController.GetAll(Shop)
    public static GetOne=commonController.GetOne(Shop)
    public static  DeleteOne = commonController.DeleteOne(Shop )
    public static UpdateOne = commonController.UpdateOne(Shop , UpdateShopValidation)
}