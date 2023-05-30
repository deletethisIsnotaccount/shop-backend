import Joi from "joi";
import {NextFunction, Request, Response} from "express";
import {UpdateProductValidator} from "../validation/product.validation";
import {Products} from "../database/dbConnection";
import {Model, ModelCtor} from "sequelize";

export class commonController  {

    public static  UpdateOne(model : ModelCtor<Model<any, any>> , ValidationObject :  Joi.ObjectSchema<any>){
        return async function (req: Request , res: Response , next: NextFunction){
            try{
                const {error , value} = ValidationObject.validate(req.body);
                if(!error){
                    res.status(200).json( await Products.update({...value} , {where:{id:req.query.id}}))
                }
                else res.status(400).json({error: "Bad request" , "message": error.message})
            }
            catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }

        }
    }
    public static DeleteOne(model : ModelCtor<Model<any, any>>){
    return  async function (req: Request , res: Response , next: NextFunction){
            try {
                res.status(200).json( await model.destroy({where:{id:req.query.id}}))
            } catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
    public static GetOne(model : ModelCtor<Model<any, any>>){
    return  async function (req: Request , res: Response , next: NextFunction){
            try {
                res.status(200).json( await model.findOne({where:{id:req.query.id}}));
            } catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
    public static GetAll(model : ModelCtor<Model<any, any>>){
        return async function (req: Request , res: Response , next: NextFunction){
            try {

                res.status(200).json(await model.findAll());
            } catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }

}