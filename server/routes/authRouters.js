import {registerUser , loginUser , getProfile , logoutUser} from '../controller/authController.js';
import express from "express";
import cors from 'cors';

const router = express.Router();

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

export default router;