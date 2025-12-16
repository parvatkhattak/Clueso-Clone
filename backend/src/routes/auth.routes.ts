import { Router } from 'express';
import { body } from 'express-validator';
import { signup, login, getMe, logout } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Signup
router.post(
    '/signup',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        body('name').notEmpty().withMessage('Name is required'),
    ],
    signup
);

// Login
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    login
);

// Get current user
router.get('/me', authMiddleware, getMe);

// Logout
router.post('/logout', authMiddleware, logout);

export default router;
