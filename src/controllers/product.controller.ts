import {NextFunction, Request, Response} from "express";
import {ProductValidator, UpdateProductValidator} from "../validation/product.validation"

import {CreateProductDto, UpdateProductDto} from "../dto/product.dto";
import {UploadedFile} from "express-fileupload";
import * as  uuid from "uuid"
import {Products} from "../database/dbConnection";
import * as path from "path";
import {ImageService} from "../services/image.service";
import {commonController} from "./common.controller";
import ProductAttributes from "../database/attributes/productAttributes";
import {Model} from "sequelize";
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
    public static async getProductImage(req: Request , res: Response , next: NextFunction){
        try {
            const product: any  =  await Products.findOne({where:{id:req.params.id}})
            if(!product){res.status(404).json({error: `Product with id ${req.params.id} not found` })}
            res.sendFile(ImageService.SetToStatic(product.img))
        }catch (error) {
            console.error('Server Side', error);
            res.status(500).json({ error: 'Internal server error' });
        }

    }
    public static GetAll=commonController.GetAll(Products)
    public static GetOne=commonController.GetOne(Products)
    public static  DeleteOne = commonController.DeleteOne(Products )
    public static UpdateOne = commonController.UpdateOne(Products , UpdateProductValidator)
}