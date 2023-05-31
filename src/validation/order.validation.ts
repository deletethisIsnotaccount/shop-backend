import Joi from "joi";
import {CreateUserDto } from "../dto/product.dto"
import OrderAttributes from "../database/attributes/orderAttributes";
Joi.object()
export const orderValidation = Joi.object< Record<keyof typeof OrderAttributes | "UserId" , string>>({
    OrderDescription: Joi.string()
        .required()
        .max(200),
    UserId: Joi.number()
        .required()
})

