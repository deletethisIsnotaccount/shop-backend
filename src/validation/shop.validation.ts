import Joi  from 'joi';
import {CreateProductDto, UpdateProductDto} from "../dto/product.dto";
export const ShopValidation = Joi.object({
    Shop: Joi.string()
        .required()
        .min(5)
        .max(20),
    priceForDelivery:
        Joi.number()
        .required()
        .max(1000),
})

