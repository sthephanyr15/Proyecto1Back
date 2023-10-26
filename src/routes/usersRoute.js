import {Router} from 'express';


import { getUsers } from '../controllers/userController';
import { createUser } from '../controllers/userController.js';
import { updateUser } from '../controllers/userController.js';
import { deleteUser } from '../controllers/userController.js';

const router = Router();
router.post('/', createUser);
router.get('/', getUsers);
router.patch('/:username', updateUser);
router.delete('/:username', deleteUser);

export default router;