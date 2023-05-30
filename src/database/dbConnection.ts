import {DataTypes, Sequelize} from 'sequelize';
import {ConfigDB} from './DatabaseConfig'
import productAttributes from "./attributes/productAttributes";
import orderAttributes from "./attributes/orderAttributes"
import userAttributes from "./attributes/userAttributes"
import shopAttributes from "./attributes/shopAttributes"
import ShopAttributes from "./attributes/shopAttributes";

export const sequelize = new Sequelize(ConfigDB.Database,ConfigDB.User ,ConfigDB.Password , {
    host: ConfigDB.Host,
    dialect: 'postgres',
    port: ConfigDB.Port,
});
    const Orders = sequelize.define ('Orders' , orderAttributes);
    const Products = sequelize.define('Products', productAttributes);
    const Users = sequelize.define('Users' , userAttributes)
    const Shop = sequelize.define('Shop' , ShopAttributes)

    Users.hasMany(Orders ,{
        foreignKey: 'UserId'
    })
        Orders.belongsTo(Users)
    Shop.hasMany(Products ,{
    foreignKey: 'ShopId',
    })
    Products.belongsTo(Shop)

 const OrdersProducts = sequelize.define('OrderProducts', {
    OrderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Orders,
            key: 'id'
        }
    },

    ProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: Products,
            key: 'id'
        }
    }
});
Products.belongsToMany(Orders, { through: OrdersProducts });
Orders.belongsToMany(Products, { through: OrdersProducts });


export {Users, Products , Orders,Shop ,OrdersProducts}
