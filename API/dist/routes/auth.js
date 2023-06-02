"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const verifyToken_1 = require("../libs/verifyToken");
const router = (0, express_1.Router)();
router.post('/signup', auth_controller_1.signup);
router.post('/signin', auth_controller_1.signin);
//Rutas protegidas
router.get('/profile', verifyToken_1.TokenValidation, auth_controller_1.profile);
router.get('/logout', verifyToken_1.TokenValidation, auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.js.map