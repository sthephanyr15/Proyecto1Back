import {Router} from 'express';
import {createRestaurant, getRestaurant, getAllRestaurants, updateRestaurant, deleteRestaurant} from '../controllers/restaurantsController';

const router = Router();
router.post('/', createRestaurant);
router.get('/', getRestaurant);
router.get('/restaurants', getAllRestaurants);
router.patch('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

