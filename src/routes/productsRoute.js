import { Router } from 'express';

import { createProduct } from '../controllers/productsController.js';
import { getProductById } from '../controllers/productsController.js';
import { getProductByRestaurantCategory } from '../controllers/productsController.js';
import { updateProduct } from '../controllers/productsController.js';
import { deleteProduct } from '../controllers/productsController.js';
const router = Router();

router.post('/', createProduct);
router.get('/:id', getProductById);
router.get('/', getProductByRestaurantCategory);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
