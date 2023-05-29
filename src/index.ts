import * as dotenv from 'dotenv'
import * as path from "path"
import cookieParser from "cookie-parser"
import bodyParser from 'body-parser'
import express, {NextFunction, Response, Request} from "express"
import cors from "cors"
import fileUpload from "express-fileupload"
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
app.use(express.static(path.join(__dirname, 'static')));
cors({
    credentials: true,
    origin: "http://localhost",
})

app.get('/api' , (req: Request , res :  Response , next: NextFunction)=> {
    res.json({'messge' : 'hello'})
});


app.listen(process.env.PORT ?? 5000, async () => {
    console.log(`server is running on port: ${process.env.PORT  ?? 5000} \n http://localhost:5000/` )
    try {
       console.log('test test')
    } catch (error) {
        console.log(error)
    }
})




