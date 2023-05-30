import { DataTypes } from "sequelize"

const orderAttributes = {
    UserId:{
        type:DataTypes.STRING
    },
    OrderDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}


export default orderAttributes;