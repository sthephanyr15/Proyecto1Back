import { Router } from 'express';

import { getUsers } from '../controllers/userControllers.js';
import { createUser } from '../controllers/userControllers.js';
import { updateUser } from '../controllers/userControllers.js';
import { deleteUser } from '../controllers/userControllers.js';

const router = Router();
router.post('/', createUser);
router.get('/', getUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
