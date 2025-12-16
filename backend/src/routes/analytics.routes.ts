import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.use(authMiddleware);

// Placeholder routes for analytics
router.get('/dashboard', (req, res) => res.json({ stats: {} }));
router.get('/videos/:id', (req, res) => res.json({ analytics: {} }));

export default router;
