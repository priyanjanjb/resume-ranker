import {registerUser , loginUser , getProfile , logoutUser , dataRead} from '../controller/authController.js';
import express from "express";
import cors from 'cors';
import { createRequire } from 'module';
const require = createRequire(import.meta.url); //to overcome the issue of using require in ES module
const multer  = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/register', registerUser);
router.post('/login' , loginUser);
router.get('/profile' , getProfile);
router.post('/logout' , logoutUser);   
router.post('/dataRead', upload.single("cvFile"),dataRead);

export default router;