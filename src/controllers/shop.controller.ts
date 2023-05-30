import {NextFunction, Request, Response} from "express";
import {ShopValidation} from "../validation/shop.validation";
import {UploadedFile} from "express-fileupload";
import * as uuid from "uuid";
import { Shop} from "../database/dbConnection";
import {ImageService} from "../services/image.service";


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

    public static async GetAll(req: Request , res: Response , next: NextFunction){
        try {

            res.status(200).json(await Shop.findAll());
        } catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public static async GetOne(req: Request , res: Response , next: NextFunction){
        try {
            res.status(200).json( await Shop.findOne({where:{id:req.query.id}}));
        } catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public static async DeleteOne(req: Request , res: Response , next: NextFunction){
        try {
            res.status(200).json( await Shop.destroy({where:{id:req.query.id}}))
        } catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    public static async UpdateOne(req: Request , res: Response , next: NextFunction){
        try {
            const {error,warning , value} = ShopValidation.validate(req.body);
            if(value){
                res.status(200).json( await Shop.update({...value} , {where:{id:req.query.id}}))
            }
            res.status(400).json({error: "Bad request"})
        }
        catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    }
}