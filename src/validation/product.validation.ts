import Joi  from 'joi';
import {CreateProductDto, UpdateProductDto} from "../dto/product.dto";
export const ProductValidator = Joi.object<CreateProductDto>({

    description: Joi.string()
        .required()
        .min(5)
        .max(400)
        .required(),
    ProductName: Joi.string()
        .required()
        .max(35),
    price: Joi.string()
        .required()
})

