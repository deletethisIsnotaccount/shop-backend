import { DataTypes } from "sequelize"

const productAttributes = {
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price : {
        type:DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type:DataTypes.STRING ,
        allowNull: true,
    },
    ShopId: {
        type: DataTypes.NUMBER,
        required: false
    }
}


export default productAttributes;