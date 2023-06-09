import Joi  from 'joi';
import {CreateProductDto, UpdateProductDto} from "../dto/product.dto";
export const ShopValidation = Joi.object({
    Shop: Joi.string()
        .required()
        .min(3)
        .max(20),
    priceForDelivery:
        Joi.number()
        .required()
        .max(1000),
})

export const UpdateShopValidation = Joi.object({
    Shop: Joi.string()
        .optional()
        .min(3)
        .max(20),
    priceForDelivery: Joi.number()
            .optional()
            .max(1000),
})




