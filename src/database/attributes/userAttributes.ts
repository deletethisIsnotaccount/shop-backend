import { DataTypes } from "sequelize"

const userAttributes = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname : {
        type:DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}


export default userAttributes;