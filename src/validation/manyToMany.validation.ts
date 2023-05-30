import Joi from "joi";

export const manyToManyValidation = Joi.object({
    OrderId: Joi.number()
        .required(),
    ProductId: Joi.number()
        .required(),
})