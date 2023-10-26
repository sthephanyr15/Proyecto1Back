import {Router} from 'express';

import { getRestaurant } from '../controllers/restaurantController.js';
import { createRestaurant } from '../controllers/restaurantController.js';
import { getAllRestaurants } from '../controllers/restaurantController.js';
import { updateRestaurant } from '../controllers/restaurantController.js';
import { deleteRestaurant } from '../controllers/restaurantController.js';

// import {createRestaurant, getRestaurant, getAllRestaurants, updateRestaurant, deleteRestaurant} from '../controllers/restaurantsController';
const router = Router();
router.post('/', createRestaurant);
router.get('/', getRestaurant);
router.get('/restaurants', getAllRestaurants);
router.patch('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

export default router;
