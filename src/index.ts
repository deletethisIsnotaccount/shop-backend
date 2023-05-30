import * as dotenv from 'dotenv'
import * as path from "path"
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser'
import express, {NextFunction, Response, Request} from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
import {sequelize} from "./database/dbConnection"
import {productRouter} from "./router/product.router"
import {ShopRouter} from "./router/shop.router";
dotenv.config()

const app = express()
app.use(fileUpload())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..",'static')));
cors({
    credentials: true,
    origin: "http://localhost",
})

app.use('/api' , productRouter,ShopRouter);


app.listen(process.env.PORT ?? 5000, async () => {
    console.log(`server is running on port: ${process.env.PORT  ?? 5000} \n http://localhost:5000/` )
    try {
        await sequelize.sync()
        await sequelize.authenticate();
    } catch (error) {
        console.log(error)
    }
})




