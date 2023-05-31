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
exports.commonController = void 0;
class commonController {
    static UpdateOne(model, ValidationObject) {
        return function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { error, value } = ValidationObject.validate(req.body);
                    if (error) {
                        res.status(200).json(yield model.update(Object.assign({}, value), { where: { id: req.query.id } }));
                    }
                    else
                        res.status(400).json({ error: "Bad request", "message": error.message });
                }
                catch (error) {
                    console.error('Server Side', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });
        };
    }
    static DeleteOne(model) {
        return function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    res.status(200).json(yield model.destroy({ where: { id: req.query.id } }));
                }
                catch (error) {
                    console.error('Server Side', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });
        };
    }
    static GetOne(model) {
        return function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    res.status(200).json(yield model.findOne({ where: { id: req.query.id } }));
                }
                catch (error) {
                    console.error('Server Side', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });
        };
    }
    static GetAll(model) {
        return function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const Users = yield model.findAll();
                    res.status(200).json(Users);
                }
                catch (error) {
                    console.error('Server Side', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            });
        };
    }
}
exports.commonController = commonController;
//# sourceMappingURL=common.controller.js.map