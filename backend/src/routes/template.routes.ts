import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.use(authMiddleware);

// Placeholder routes for templates
router.get('/', (req, res) => res.json({ templates: [] }));
router.get('/:id', (req, res) => res.json({ template: null }));

export default router;
