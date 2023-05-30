import { DataTypes } from "sequelize"

const shopAttributes = {
    Shop: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priceForDelivery: {
        type: DataTypes.STRING,
        allow : false
    }
}


export default shopAttributes;