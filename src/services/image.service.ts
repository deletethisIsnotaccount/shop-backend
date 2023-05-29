import * as uuid from "uuid";
import {Products} from "../database/dbConnection";
import path from "path";
import {UploadedFile} from "express-fileupload";

export class ImageService{

    public static  ImgFormatting(img : UploadedFile): string{
        return '.'+ img.name.split('.').pop()
    }
    public static async SetImg(img : UploadedFile , newNameFormatUUID: string){
        const imgName:string = newNameFormatUUID+this.ImgFormatting(img)
        await img.mv(path.join(__dirname , ".." , "..","src", 'static', imgName))
    }
}