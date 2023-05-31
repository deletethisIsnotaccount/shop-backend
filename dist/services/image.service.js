"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const path_1 = __importDefault(require("path"));
class ImageService {
    static ImgFormatting(img) {
        return '.' + img.name.split('.').pop();
    }
    static SetImg(img, newNameFormatUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            const imgName = newNameFormatUUID + this.ImgFormatting(img);
            yield img.mv(path_1.default.join(__dirname, "..", "..", "src", 'static', imgName));
        });
    }
    static SetToStatic(fileName) {
        return path_1.default.join(__dirname, "..", "..", "src", 'static', fileName);
    }
}
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map