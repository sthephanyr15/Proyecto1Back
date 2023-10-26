import { Router } from 'express';

import { createProduct } from '../controllers/productsController.js';
import { getProductById } from '../controllers/productsController.js';
import { getAllProducts } from '../controllers/productsController.js';
import { updateProduct } from '../controllers/productsController.js';
import { deleteProduct } from '../controllers/productsController.js';
const router = Router();

router.post('/', createProduct);
router.get('/_id', getProductById);
router.get('/products', getAllProducts);
router.patch('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);

export default router;
