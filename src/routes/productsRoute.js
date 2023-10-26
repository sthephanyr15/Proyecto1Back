import {Router} from 'express';


import { createProduct } from '../controllers/productsController.js';
import { getProductbyId } from '../controllers/productsController.js';
import { getProductbyRestaurantID } from '../controllers/productsController.js';
import { getAllProducts } from '../controllers/productsController.js';
import { updateProduct } from '../controllers/productsController.js';
import { deleteProduct } from '../controllers/productsController.js';

router.post('/', createProduct);
router.get('/_id', getProductbyId);
router.get('/', getProductbyRestaurantID);
router.get('/products', getAllProducts);
router.patch('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);

export default router;