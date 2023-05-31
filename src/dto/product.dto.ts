import productAttributes from "../database/attributes/productAttributes"
import userAttributes from "../database/attributes/userAttributes";
const example ={...productAttributes , ShopId:1}
export type CreateProductDto = Record<keyof typeof example , string>
export  type UpdateProductDto = Partial<CreateProductDto>
export type CreateUserDto = Record<keyof typeof userAttributes, string>
