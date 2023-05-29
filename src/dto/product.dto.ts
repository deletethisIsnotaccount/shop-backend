import productAttributes from "../database/attributes/productAttributes"
export type CreateProductDto = Record<keyof typeof productAttributes, string>
export  type UpdateProductDto = Partial<CreateProductDto>