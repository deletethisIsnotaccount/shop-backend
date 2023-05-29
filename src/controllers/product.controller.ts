import {NextFunction, Request, Response} from "express";
import {ProductValidator} from "../validation/product.validation"
import {CreateProductDto, UpdateProductDto} from "../dto/product.dto";
import {UploadedFile} from "express-fileupload";
import * as  uuid from "uuid"
import {Products} from "../database/dbConnection";
import * as path from "path";
import {ImageService} from "../services/image.service";
export class ProductController{
    public static async CreateProduct(req : Request , res: Response , next : NextFunction){
        try {
            const data: CreateProductDto = req.body;
            const {error , warning , value}= ProductValidator.validate(data)
            if(!error)
            {
                const img: UploadedFile | UploadedFile[] = req.files.img;
                if(img && !Array.isArray(img)){
                    const imgName:string = uuid.v4();
                    !await Products.create({...value , img:imgName+ImageService.ImgFormatting(img)})? res.status(400): await ImageService.SetImg(img , imgName);
                    res.json({"status": "success"});
                }
                res.json({"status":"Image should be an file type"})
            }
            else res.send(error.message)
        }catch (e) {

        }

    }

    public static async GetAll(req: Request , res: Response , next: NextFunction){
        res.json (await Products.findAll());
    }

    public static async GetOne(req: Request , res: Response , next: NextFunction){
        res.json( await Products.findOne({where:{id:req.query.id}}))
    }

    public static async DeleteOne(req: Request , res: Response , next: NextFunction){
        res.json( await Products.destroy({where:{id:req.query.id}}))
    }
    public static async UpdateOne(req: Request , res: Response , next: NextFunction){
        const {error,warning , value} = ProductValidator.validate(req.body);
        if(value){
            res.json( await Products.update({...value} , {where:{id:req.query.id}}))
        }
        else res.json({"status":"error"})
        res.status(400)
    }
}