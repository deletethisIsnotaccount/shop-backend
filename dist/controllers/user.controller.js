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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const dbConnection_1 = require("../database/dbConnection");
const common_controller_1 = require("./common.controller");
const user_validation_1 = require("../validation/user.validation");
class UserController {
    static CreateOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const { error, warning, value } = user_validation_1.userValidation.validate(data);
                //JWT service
                if (error) {
                    return res.status(400).json({ error: error.details[0].message });
                }
                if (value) {
                    res.status(200).json(yield dbConnection_1.Users.create(value));
                }
            }
            catch (e) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.UserController = UserController;
UserController.GetAll = common_controller_1.commonController.GetAll(dbConnection_1.Users);
UserController.GetOne = common_controller_1.commonController.GetOne(dbConnection_1.Users);
UserController.DeleteOne = common_controller_1.commonController.DeleteOne(dbConnection_1.Users);
UserController.UpdateOne = common_controller_1.commonController.UpdateOne(dbConnection_1.Users, user_validation_1.UpdateUserValidation);
//# sourceMappingURL=user.controller.js.map