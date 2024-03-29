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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../database/models/User"));
const validateUserEmail_1 = __importDefault(require("./validations/validateUserEmail"));
const sequelize_1 = require("sequelize");
const config = __importStar(require("../database/config/database"));
const sequelize = new sequelize_1.Sequelize(config);
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.findAll();
    return users;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield (0, validateUserEmail_1.default)(user.email);
    if (userExists)
        return null;
    const newUser = yield User_1.default.create(Object.assign({}, user));
    return newUser;
});
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield sequelize.transaction((t) => __awaiter(void 0, void 0, void 0, function* () {
        yield User_1.default.update(user, { where: { id }, transaction: t });
        const updated = yield User_1.default.findByPk(id, { transaction: t });
        return updated;
    }));
    return updatedUser;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.default.destroy({ where: { id } });
});
exports.default = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
};
