import productAttributes from "../database/attributes/productAttributes"
import userAttributes from "../database/attributes/userAttributes";
export type CreateProductDto = Record<keyof typeof productAttributes, string>
export  type UpdateProductDto = Partial<CreateProductDto>
export type CreateUserDto = Record<keyof typeof userAttributes, string>
