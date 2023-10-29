import {Router} from 'express';

import { getRestaurantbyId } from '../controllers/restaurantController.js';
import { createRestaurant } from '../controllers/restaurantController.js';
import { getRestaurantByNameCategory } from '../controllers/restaurantController.js';
import { updateRestaurant } from '../controllers/restaurantController.js';
import { deleteRestaurant } from '../controllers/restaurantController.js';

const router = Router();
router.post('/', createRestaurant);
router.get('/:id', getRestaurantbyId);
router.get('/', getRestaurantByNameCategory);
router.patch('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;
