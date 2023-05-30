import Joi from "joi";
import {CreateUserDto } from "../dto/product.dto"
export const userValidation = Joi.object<CreateUserDto>({
   name: Joi.string()
       .required()
       .min(1)
       .max(20)
    ,phoneNumber: Joi.string()
        .length(10)
        .required(),
    surname: Joi.string()
        .required()
        .max(20)
})

export const UpdateUserValidation = Joi.object({
    name: Joi.string()
        .optional()
        .min(1)
        .max(20)
    ,phoneNumber: Joi.string()
        .length(10)
        .optional(),
    surname: Joi.string()
        .optional()
        .max(20)
})