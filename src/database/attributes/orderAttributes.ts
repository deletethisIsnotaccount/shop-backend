import { DataTypes } from "sequelize"

const orderAttributes = {

    OrderDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}


export default orderAttributes;