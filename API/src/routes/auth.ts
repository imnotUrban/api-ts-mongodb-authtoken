import {Router} from 'express';
import {signin, signup, profile, logout} from '../controllers/auth.controller';
import { TokenValidation } from '../libs/verifyToken';


const router:Router = Router();


router.post('/signup', signup);
router.post('/signin', signin);

//Rutas protegidas
router.get('/profile', TokenValidation,profile);

router.get('/logout', TokenValidation, logout);

export default router;