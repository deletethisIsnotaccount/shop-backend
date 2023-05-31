"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_validation_1 = require("../validation/product.validation");
const uuid = __importStar(require("uuid"));
const dbConnection_1 = require("../database/dbConnection");
const image_service_1 = require("../services/image.service");
const common_controller_1 = require("./common.controller");
class ProductController {
    static CreateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const { error, warning, value } = product_validation_1.ProductValidator.validate(data);
                if (!error) {
                    const img = req.files.img;
                    if (img && !Array.isArray(img)) {
                        const imgName = uuid.v4();
                        !(yield dbConnection_1.Products.create(Object.assign(Object.assign({}, value), { img: imgName + image_service_1.ImageService.ImgFormatting(img) }))) ? res.status(400) : yield image_service_1.ImageService.SetImg(img, imgName);
                        res.json({ "status": "success" });
                    }
                    res.json({ "status": "Image should be an file type" });
                }
                else
                    res.send(error.message);
            }
            catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static getProductImage(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const img = req.params.id;
                if (!img) {
                    res.status(404).json({ error: `Product with id ${req.params.id} not found` });
                }
                res.sendFile(image_service_1.ImageService.SetToStatic(img));
            }
            catch (error) {
                console.error('Server Side', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.ProductController = ProductController;
ProductController.GetAll = common_controller_1.commonController.GetAll(dbConnection_1.Products);
ProductController.GetOne = common_controller_1.commonController.GetOne(dbConnection_1.Products);
ProductController.DeleteOne = common_controller_1.commonController.DeleteOne(dbConnection_1.Products);
ProductController.UpdateOne = common_controller_1.commonController.UpdateOne(dbConnection_1.Products, product_validation_1.UpdateProductValidator);
//# sourceMappingURL=product.controller.js.map