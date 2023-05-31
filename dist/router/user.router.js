"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/user", user_controller_1.UserController.CreateOne);
exports.UserRouter.get("/singleUser", user_controller_1.UserController.GetOne);
exports.UserRouter.delete("/removeUser", user_controller_1.UserController.DeleteOne);
exports.UserRouter.get("/allUsers", user_controller_1.UserController.GetAll);
exports.UserRouter.put("/putUser", user_controller_1.UserController.UpdateOne);
//# sourceMappingURL=user.router.js.map