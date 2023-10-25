import {Router} from 'express';
import {getUsers, getUsers, createUser, updateUser, deleteUser} from '../controllers/usersController';

const router = Router();
router.post('/', createUser);
router.get('/', getUsers);
router.patch('/:username', updateUser);
router.delete('/:username', deleteUser);

export default router;