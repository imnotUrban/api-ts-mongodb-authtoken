"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//Settings
app.set("port", 3000);
//Middleware
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true, // Agrega esta lsínea paras permitir el envío de credenciales
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
//Routes
app.use("/api/auth", auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map