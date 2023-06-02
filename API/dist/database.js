"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test", {})
    .then((db) => console.log("Base de datos conectada"))
    .catch((err) => console.log(err));
//# sourceMappingURL=database.js.map